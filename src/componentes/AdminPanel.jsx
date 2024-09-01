import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, doc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase/Firebaseconfig';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState(null);
  const [imagenUrl, setImagenUrl] = useState('');
  const [useUrl, setUseUrl] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(null); // Para controlar los detalles desplegables
  const auth = getAuth();
  const storage = getStorage();

  useEffect(() => {
    const checkAdmin = async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'usuarios', user.uid));
          if (userDoc.exists() && userDoc.data().rol === 'admin') {
            setIsAdmin(true);
            loadProducts();
          } else {
            setIsAdmin(false);
            setError('No tienes permiso para acceder a esta área.');
          }
        } catch (error) {
          setError('Error al verificar el rol de usuario.');
        }
      }
      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        checkAdmin(user);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const loadProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'productos'));
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(products);
    } catch (error) {
      setError('Error al cargar los productos.');
      console.error('Error al cargar los productos:', error);
    }
  };

  const handleImageChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    let imageUrl = imagenUrl;
    if (imagen && !useUrl) {
      try {
        const storageRef = ref(storage, `productos/${imagen.name}`);
        await uploadBytes(storageRef, imagen);
        imageUrl = await getDownloadURL(storageRef);
      } catch (uploadError) {
        setError('Error al subir la imagen.');
        console.error('Error al subir la imagen:', uploadError);
        return;
      }
    }

    try {
      if (selectedProduct) {
        await updateDoc(doc(db, 'productos', selectedProduct.id), {
          nombre,
          descripcion,
          categoria,
          precio: parseFloat(precio),
          imagen: imageUrl,
        });
        setSuccess(true);
        setSelectedProduct(null);
      } else {
        await addDoc(collection(db, 'productos'), {
          nombre,
          descripcion,
          categoria,
          precio: parseFloat(precio),
          imagen: imageUrl,
          estado: 'disponible',
        });
        setSuccess(true);
      }
      setNombre('');
      setDescripcion('');
      setCategoria('');
      setPrecio('');
      setImagen(null);
      setImagenUrl('');
      setUseUrl(false);
      loadProducts(); // Recargar productos después de agregar o editar
    } catch (error) {
      setError('Error al subir el producto.');
      console.error('Error al subir el producto:', error);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setNombre(product.nombre);
    setDescripcion(product.descripcion);
    setCategoria(product.categoria);
    setPrecio(product.precio);
    setImagenUrl(product.imagen);
    setUseUrl(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'productos', id));
      loadProducts();
    } catch (error) {
      setError('Error al eliminar el producto.');
      console.error('Error al eliminar el producto:', error);
    }
  };

  const handleToggleDetails = (id) => {
    setDetailsVisible(detailsVisible === id ? null : id);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAdmin(false);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  if (loading) return <p>Cargando...</p>;

  if (!isAdmin) {
    return (
      <div>
        <h2>Acceso denegado</h2>
        <p>{error || 'No tienes permiso para acceder a esta área.'}</p>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <h2>{selectedProduct ? 'Editar producto' : 'Subir nuevo producto'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label>
            <input
              type="checkbox"
              checked={useUrl}
              onChange={() => setUseUrl(!useUrl)}
            />
            Usar URL en lugar de subir archivo
          </label>
          {useUrl && (
            <input
              type="text"
              placeholder="URL de la imagen"
              value={imagenUrl}
              onChange={(e) => setImagenUrl(e.target.value)}
            />
          )}
        </div>
        <button type="submit">{selectedProduct ? 'Guardar cambios' : 'Subir producto'}</button>
        {success && <p className="success">Producto {selectedProduct ? 'actualizado' : 'subido'} con éxito.</p>}
        {error && <p className="error">{error}</p>}
      </form>
      <h2>Lista de productos</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((product) => (
            <React.Fragment key={product.id}>
              <tr>
                <td>{product.nombre}</td>
                <td>{product.categoria}</td>
                <td>${product.precio.toFixed(2)}</td>
                <td><img src={product.imagen} alt={product.nombre} /></td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(product)}>Editar</button>
                  <button className="delete-btn" onClick={() => handleDelete(product.id)}>Eliminar</button>
                  <button onClick={() => handleToggleDetails(product.id)}>Detalles</button>
                </td>
              </tr>
              {detailsVisible === product.id && (
                <tr>
                  <td colSpan="5">
                    <div className="product-details">
                      <p><strong>Descripción:</strong> {product.descripcion}</p>
                      <p><strong>Estado:</strong> {product.estado}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default AdminPanel;

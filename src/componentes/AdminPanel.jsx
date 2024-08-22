import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/Firebaseconfig';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const checkAdmin = async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'usuarios', user.uid));
          if (userDoc.exists() && userDoc.data().rol === 'admin') {
            setIsAdmin(true);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await addDoc(collection(db, 'productos'), {
        nombre,
        descripcion,
        categoria,
        precio: parseFloat(precio),
        imagen,
        estado: 'disponible' // Nuevo campo
      });
      setSuccess(true);
      setNombre('');
      setDescripcion('');
      setCategoria('');
      setPrecio('');
      setImagen('');
    } catch (error) {
      setError('Error al subir el producto.');
      console.error('Error al subir el producto:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAdmin(false);
      setNombre('');
      setDescripcion('');
      setCategoria('');
      setPrecio('');
      setImagen('');
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
      <h2>Subir nuevo producto</h2>
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
        <input
          type="text"
          placeholder="URL de la imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          required
        />
        <button type="submit">Subir producto</button>
        {success && <p className="success">Producto subido con éxito.</p>}
        {error && <p className="error">{error}</p>}
      </form>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );

  
};

export default AdminPanel;

import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/Firebaseconfig';

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [productos, setProductos] = useState([]);

  // Función para obtener productos desde Firestore
  const fetchProductos = async () => {
    try {
      const productosCollection = collection(db, 'productos');
      const productosSnapshot = await getDocs(productosCollection);
      const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProductos(productosList);
    } catch (error) {
      console.error('Error fetching productos:', error);
    }
  };

  // Cargar productos al montar el componente
  useEffect(() => {
    fetchProductos();
  }, []);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const finalizePurchase = async (name, phone) => {
    try {
      const order = {
        buyer: { name, phone },
        items: cartItems,
        total: cartItems.reduce((total, item) => total + item.precio, 0),
        date: new Date(),
      };

      // Añade la orden a la colección "orders"
      const docRef = await addDoc(collection(db, "orders"), order);

      // Actualiza el estado de los productos a "vendido"
      for (const item of cartItems) {
        const productRef = doc(db, "productos", item.id);
        await updateDoc(productRef, { estado: "vendido" });
      }

      // Limpiar el carrito después de la compra
      setCartItems([]);

      // Actualizar la lista de productos
      fetchProductos();

      // Retorna el ID de la orden creada
      return docRef.id;
    } catch (error) {
      console.error("Error al finalizar la compra:", error);
      throw new Error("No se pudo guardar la orden.");
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, productos, finalizePurchase }}>
      {children}
    </CartContext.Provider>
  );
};

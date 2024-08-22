import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2'; 
import '../styles/Cart.css'; 

const Cart = () => {
  const { cartItems, finalizePurchase } = useContext(CartContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.precio, 0).toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingrese su nombre y número de teléfono.',
      });
      return;
    }

    try {
      // Obtén el ID de la orden al finalizar la compra
      const orderId = await finalizePurchase(name, phone);

      // Muestra el mensaje de éxito con el ID de la orden
      Swal.fire({
        icon: 'success',
        title: 'Compra realizada con éxito!',
        text: `Su compra ha sido procesada con éxito. El total de su compra es $${calculateTotal()}. Su ID de orden es: ${orderId}.`,
      });

      

      // Limpia el formulario y el carrito
      setName('');
      setPhone('');
    } catch (error) {
      console.error('Error al guardar la orden:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al procesar su compra.',
      });
    }
  };

  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      <form onSubmit={handleSubmit} className="cart-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Número de Teléfono:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Finalizar Compra</button>
      </form>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.imagen} alt={item.nombre} className="item-image" />
              <div className="item-details">
                <h3>{item.nombre}</h3>
                <p>${item.precio.toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>
      <div className="cart-total">
        <h3>Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default Cart;

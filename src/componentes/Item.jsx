import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import '../styles/Item.css';

const Item = ({ item }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  // Verifica si el item ya está en el carrito
  const itemInCart = cartItems.find(cartItem => cartItem.id === item.id);
  const itemQuantity = itemInCart ? itemInCart.quantity : 0;

  const handleAddToCart = () => {
    if (itemQuantity === 0) {
      addToCart({ ...item, quantity: 1 });
    }
  };

  const handleRemoveFromCart = () => {
    if (itemQuantity === 1) {
      removeFromCart(item);
    }
  };

  return (
    <div className="item-card">
      <img src={item.imagen} alt={item.nombre} />
      <div className="item-text">
        <h3>{item.nombre}</h3>
        <p className="price">${item.precio.toFixed(2)}</p>
        <button className="button" onClick={toggleDetails}>
          {showDetails ? 'Ocultar Detalles' : 'Mostrar Detalles'}
        </button>
        {showDetails && (
          <div className="item-details">
            <p>{item.descripcion}</p>
          </div>
        )}

        <div className="card-actions">
          {item.estado === "vendido" ? (
            <div className="sold-banner">Vendido</div>
          ) : (
            <>
              {itemQuantity === 0 ? (
                <button className="button" onClick={handleAddToCart}>Agregar al carrito</button>
              ) : (
                <div className="quantity-control">
                  <button className="button" onClick={handleRemoveFromCart}>-</button>
                  <span className="quantity">{itemQuantity}</span>
                  <button className="button" onClick={handleAddToCart} disabled={itemQuantity === 1}>+</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;

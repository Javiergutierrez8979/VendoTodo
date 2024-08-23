import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/italy_4552534.png';
import CartWidget from '../componentes/CartWidget';
import { CartContext } from '../context/CartContext'; // Importa el contexto

function NavBar() {
  const { cartItems } = useContext(CartContext); // Usa el contexto para obtener los items del carrito

  return (
    <nav className="navbar navbar-expand-xl navbar-dark ">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand logo">
          <img src={Logo} width="40rem" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDark"
          aria-controls="navbarDark"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarDark">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Ventas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/contacto'>Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/admin-login'>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/admin-panel'>Admin-Panel</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ubicacion">Ubicación</Link>
            </li>
          </ul>
        </div>
        <Link to='/cart' className="navbar-brand cart-widget">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

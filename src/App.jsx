import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import Contacto from './componentes/Contacto';
import NotFound from './componentes/NotFound';
import Cart from './componentes/Cart';
import ProductDetail from './componentes/ProductDetail'; // Asegúrate de importar ProductDetail
import { CartProvider } from './context/CartContext'; // Importa el proveedor del contexto
import Footer from './componentes/Footer'; // Importa el componente Footer
import './styles/App.css';
import Ubicacion from './componentes/Ubicacion';
import AdminLogin from './componentes/AdminLogin';
import AdminPanel from './componentes/AdminPanel';
import PrivateRoute from './componentes/PrivateRoute'; // Importa el componente PrivateRoute

function App() {
  return (
    <CartProvider> {/* Envuelve tu aplicación con el proveedor de contexto */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} /> {/* Página principal */}
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} /> {/* Ruta para el carrito */}
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Ruta para detalles del producto */}
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/admin-login" element={<AdminLogin />} /> {/* Ruta para el login de administrador */}
          
          {/* Ruta protegida para el panel de administración */}
          <Route 
            path="/admin-panel" 
            element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            } 
          />

          <Route path="*" element={<NotFound />} /> {/* Ruta para manejar 404 */}
        </Routes>
        <Footer /> {/* Agrega el componente Footer */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

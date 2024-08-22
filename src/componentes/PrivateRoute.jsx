import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const PrivateRoute = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  // Si no hay un usuario autenticado, redirige al login de administrador
  if (!user) {
    return <Navigate to="/admin-login" />;
  }

  // Aquí podrías agregar más lógica para verificar si el usuario tiene el rol de admin
  // En este caso, estamos asumiendo que el usuario autenticado es un administrador.
  return children;
};

export default PrivateRoute;

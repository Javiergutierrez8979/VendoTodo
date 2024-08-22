import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Firebaseconfig";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import '../styles/AdminLogin.css'; // Asegúrate de tener este archivo CSS

const AdminLogin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate(); // Para realizar la navegación

  useEffect(() => {
    const checkAdmin = async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "usuarios", user.uid));
          if (userDoc.exists() && userDoc.data().rol === "admin") {
            setIsAdmin(true);
            navigate("/admin-panel"); // Redirige al AdminPanel cuando se detecta que es administrador
          } else {
            setIsAdmin(false);
            setError("No tienes permiso para acceder a esta área.");
            handleLogout(); // Desloguear si no es admin
          }
        } catch (error) {
          setError("Error al verificar el rol de usuario.");
        }
      }
      setLoading(false);
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        checkAdmin(user);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirigir después de iniciar sesión si el usuario es admin
      const user = auth.currentUser;
      const userDoc = await getDoc(doc(db, "usuarios", user.uid));
      if (userDoc.exists() && userDoc.data().rol === "admin") {
        navigate("/admin-panel");
      }
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("El formato del correo es incorrecto.");
      } else if (error.code === "auth/user-not-found") {
        setError("No existe un usuario con este correo.");
      } else if (error.code === "auth/wrong-password") {
        setError("La contraseña es incorrecta.");
      } else {
        setError("Error al iniciar sesión. Verifica tu correo y contraseña.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAdmin(false);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  if (loading) return <p>Cargando...</p>;

  if (!isAdmin) {
    return (
      <div className="admin-login">
        <h2>Iniciar Sesión como Administrador</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-login">
      <h1>Panel de Administración</h1>
      <button onClick={handleLogout} className="btn btn-primary">Cerrar Sesión</button>
      {/* Aquí va el contenido que solo deben ver los administradores */}
    </div>
  );
};

export default AdminLogin;

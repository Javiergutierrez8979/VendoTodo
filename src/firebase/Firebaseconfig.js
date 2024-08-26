// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9mD-OzKeGo8zP3hSaVjKYpHrWk7Z0Cwo",
  authDomain: "ventas-de-casa.firebaseapp.com",
  projectId: "ventas-de-casa",
  storageBucket: "ventas-de-casa.appspot.com",
  messagingSenderId: "379532997796",
  appId: "1:379532997796:web:b33f398f12070f82c32231",
  measurementId: "G-WZ0WF4BZQ3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore
const db = getFirestore(app);

const storage = getStorage(app);

export { db, storage };
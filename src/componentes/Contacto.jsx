import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/Firebaseconfig'; // Asegúrate de tener configurado Firebase
import '../styles/Contacto.css'

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Agrega los datos del formulario a la colección "contacto" en Firestore
      await addDoc(collection(db, 'contacto'), formData);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      console.error('Error al enviar el mensaje:', err);
    }
  };

  return (
    <div className="contacto-page">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Asunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
        {success && <p className="success">Mensaje enviado con éxito.</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Contacto;

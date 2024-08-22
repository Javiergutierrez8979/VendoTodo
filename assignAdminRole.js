const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Ruta al archivo JSON

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = 'USER_UID'; // UID del usuario a promover a administrador

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log('Rol de administrador asignado correctamente.');
  })
  .catch((error) => {
    console.error('Error al asignar rol de administrador:', error);
  });

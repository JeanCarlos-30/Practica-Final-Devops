const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta API
app.get('/api/saludo', (req, res) => {
  res.json({
    mensaje: '¡Hola Mundo!',
    autor: 'jeacarlos3015',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Ruta health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

// Solo iniciar servidor si no estamos en modo test
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(` Servidor corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;
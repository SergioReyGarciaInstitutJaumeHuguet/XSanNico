require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("Error al conectar a MongoDB", err));

// Importar rutas
const hogueraRoutes = require('./routes/hogueraRoutes');
const participanteRoutes = require('./routes/participanteRoutes');

// Usar rutas
app.use('/hogueras', hogueraRoutes);
app.use('/participantes', participanteRoutes);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

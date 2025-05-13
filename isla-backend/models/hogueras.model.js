// hogueras.model.js
// Importa mongoose para la definición del esquema y modelo
const mongoose = require('mongoose');

// Define el esquema para las hogueras
const HogueraSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true  // Campo obligatorio
  },
  temporada: {
    type: Number,
    required: true  // Campo obligatorio
  },
  ubicacion: {
    type: String,
    required: true  // Campo obligatorio
  },
  parejas: {
    type: Number,
    required: true  // Campo obligatorio
  }
}, {
  timestamps: true  // Añade campos createdAt y updatedAt automáticamente
});

// Exporta el modelo Hoguera basado en el esquema definido
// El tercer parámetro 'Hogueras' es el nombre de la colección en MongoDB
module.exports = mongoose.model('Hoguera', HogueraSchema, 'Hogueras');
// participantes.model.js
// Importa mongoose para la definición del esquema y modelo
const mongoose = require('mongoose');

// Define el esquema para los participantes
const ParticipanteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true  // Campo obligatorio
  },
  edad: {
    type: Number,
    required: true  // Campo obligatorio
  },
  genero: {
    type: String,
    enum: ['hombre', 'mujer'],  // El valor debe ser uno de estos dos
    required: true  // Campo obligatorio
  },
  rol: {
    type: String,
    enum: ['pareja', 'tentador'],  // El valor debe ser uno de estos dos
    required: true  // Campo obligatorio
  },
  temporada: {
    type: Number,
    required: true  // Campo obligatorio
  },
  foto: {
    type: Number,
    required: false  // Campo opcional
  }
}, {
  timestamps: true  // Añade campos createdAt y updatedAt automáticamente
});

// Exporta el modelo Participante basado en el esquema definido
// El tercer parámetro 'Participantes' es el nombre de la colección en MongoDB
module.exports = mongoose.model('Participante', ParticipanteSchema, 'Participantes');
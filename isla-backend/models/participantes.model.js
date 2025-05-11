const mongoose = require('mongoose');

const ParticipanteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  genero: {
    type: String,
    enum: ['hombre', 'mujer'],
    required: true
  },
  rol: {
    type: String,
    enum: ['pareja', 'tentador/a'],
    required: true
  },
  temporada: {
    type: Number,
    required: true
  },
  avatar: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Participante', ParticipanteSchema);

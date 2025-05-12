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
  rol: {
    type: String,
    enum: ['pareja', 'tentador', 'tentadora'],
    required: true
  },
  temporada: {
    type: Number,
    required: false
  },
  Genero: {
    type: Number, 
    required: false
  },
  foto: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Participante', ParticipanteSchema, 'Participantes');
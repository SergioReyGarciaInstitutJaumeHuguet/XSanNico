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
  ciudad: {
    type: String,
    required: true
  },
  estado_actual: {
    type: String,
    enum: ['pareja', 'soltero/a'],
    required: true
  },
  pareja: {
    type: String,
    required: false
  },
  tentaciones: {
    type: [String], // Array de strings
    required: false
  },
  infidelidades: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Participante', ParticipanteSchema, 'Participantes');
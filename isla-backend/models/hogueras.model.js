const mongoose = require('mongoose');

const HogueraSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  participante: {
    type: String,
    required: true
  },
  pareja_presente: {
    type: String,
    required: true
  },
  tentacion_presente: {
    type: String,
    required: true
  },
  reaccion: {
    type: String,
    required: true
  },
  decision: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Hoguera', HogueraSchema, 'Hogueras');
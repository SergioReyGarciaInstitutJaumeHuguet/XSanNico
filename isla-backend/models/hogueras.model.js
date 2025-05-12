const mongoose = require('mongoose');

const HogueraSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  temporada: {
    type: Number,
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  },
  parejas: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Hoguera', HogueraSchema, 'Hogueras');
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
  participantes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Participante'
  }],
}, {
  timestamps: true
});

module.exports = mongoose.model('Hoguera', HogueraSchema, 'Hogueras');
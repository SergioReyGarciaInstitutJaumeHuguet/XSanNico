const Participante = require('../models/participantes.model');

const getAllParticipantes = () => Participante.find();
const getParticipanteById = (id) => Participante.findById(id);
const createParticipante = (data) => new Participante(data).save();
const updateParticipante = (id, data) => Participante.findByIdAndUpdate(id, data, { new: true });
const deleteParticipante = (id) => Participante.findByIdAndDelete(id);

module.exports = { getAllParticipantes, getParticipanteById, createParticipante, updateParticipante, deleteParticipante };

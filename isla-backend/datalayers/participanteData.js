// participanteData.js
// Importa el modelo Participante definido en mongoose
const Participante = require('../models/participantes.model');

// Función para obtener todos los participantes de la base de datos
const getAllParticipantes = () => Participante.find();
// Función para buscar un participante específico por su ID
const getParticipanteById = (id) => Participante.findById(id);
// Función para crear un nuevo participante con los datos proporcionados
const createParticipante = (data) => new Participante(data).save();
// Función para actualizar un participante existente (retorna el documento actualizado)
const updateParticipante = (id, data) => Participante.findByIdAndUpdate(id, data, { new: true });
// Función para eliminar un participante por su ID
const deleteParticipante = (id) => Participante.findByIdAndDelete(id);

// Exporta todas las funciones para su uso en otros archivos
module.exports = { getAllParticipantes, getParticipanteById, createParticipante, updateParticipante, deleteParticipante };
// hogueraData.js
// Importa el modelo Hoguera definido en mongoose
const Hoguera = require('../models/hogueras.model');

// Función para obtener todas las hogueras de la base de datos
const getAllHogueras = () => Hoguera.find();
// Función para buscar una hoguera específica por su ID
const getHogueraById = (id) => Hoguera.findById(id);
// Función para crear una nueva hoguera con los datos proporcionados
const createHoguera = (data) => new Hoguera(data).save();
// Función para actualizar una hoguera existente (retorna el documento actualizado)
const updateHoguera = (id, data) => Hoguera.findByIdAndUpdate(id, data, { new: true });
// Función para eliminar una hoguera por su ID
const deleteHoguera = (id) => Hoguera.findByIdAndDelete(id);

// Exporta todas las funciones para su uso en otros archivos
module.exports = { getAllHogueras, getHogueraById, createHoguera, updateHoguera, deleteHoguera };
const Hoguera = require('../models/hogueras.model');

const getAllHogueras = () => Hoguera.find();
const createHoguera = (data) => new Hoguera(data).save();
const updateHoguera = (id, data) => Hoguera.findByIdAndUpdate(id, data, { new: true });
const deleteHoguera = (id) => Hoguera.findByIdAndDelete(id);

module.exports = { getAllHogueras, createHoguera, updateHoguera, deleteHoguera };

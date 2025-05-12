const hogueraData = require('../datalayers/hogueraData');

const getHogueras = async (req, res) => {
    const result = await hogueraData.getAllHogueras();
    res.json(result);
};
const getHogueraById = async (req, res) => {
    try {
        const hoguera = await hogueraData.getHogueraById(req.params.id);
        if (!hoguera) {
            return res.status(404).json({ message: 'Hoguera no encontrada' });
        }
        res.json(hoguera);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la hoguera', error });
    }
};
const postHoguera = async (req, res) => {
    const result = await hogueraData.createHoguera(req.body);
    res.status(201).json(result);
};

const putHoguera = async (req, res) => {
    const result = await hogueraData.updateHoguera(req.params.id, req.body);
    res.json(result);
};

const deleteHoguera = async (req, res) => {
    await hogueraData.deleteHoguera(req.params.id);
    res.json({ message: "Hoguera eliminada" });
};

module.exports = { getHogueras, getHogueraById, postHoguera, putHoguera, deleteHoguera };

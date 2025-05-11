const hogueraData = require('../datalayers/hogueraData');

const getHogueras = async (req, res) => {
    const result = await hogueraData.getAllHogueras();
    res.json(result);
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

module.exports = { getHogueras, postHoguera, putHoguera, deleteHoguera };

const participanteData = require('../datalayers/participanteData');

const getParticipantes = async (req, res) => {
    const result = await participanteData.getAllParticipantes();
    res.json(result);
};

const postParticipante = async (req, res) => {
    const result = await participanteData.createParticipante(req.body);
    res.status(201).json(result);
};

const putParticipante = async (req, res) => {
    const result = await participanteData.updateParticipante(req.params.id, req.body);
    res.json(result);
};

const deleteParticipante = async (req, res) => {
    await participanteData.deleteParticipante(req.params.id);
    res.json({ message: "Participante eliminat" });
};

module.exports = { getParticipantes, postParticipante, putParticipante, deleteParticipante };

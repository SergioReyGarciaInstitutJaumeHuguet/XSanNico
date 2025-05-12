const participanteData = require('../datalayers/participanteData');

const getParticipantes = async (req, res) => {
    const result = await participanteData.getAllParticipantes();
    res.json(result);
};
const getParticipanteById = async (req, res) => {
    try {
        const participante = await participanteData.getParticipanteById(req.params.id);
        if (!participante) {
            return res.status(404).json({ message: 'Participante no encontrada' });
        }
        res.json(participante);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la participante', error });
    }
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

module.exports = { getParticipantes, getParticipanteById, postParticipante, putParticipante, deleteParticipante };

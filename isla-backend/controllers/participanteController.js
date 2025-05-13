// participanteController.js
// Importa la capa de datos para participantes
const participanteData = require('../datalayers/participanteData');

// Controlador para obtener todos los participantes
const getParticipantes = async (req, res) => {
    // Obtiene todos los participantes de la base de datos
    const result = await participanteData.getAllParticipantes();
    // Envía la respuesta con los datos obtenidos
    res.json(result);
};

// Controlador para obtener un participante por su ID
const getParticipanteById = async (req, res) => {
    try {
        // Busca el participante por el ID proporcionado en los parámetros de la URL
        const participante = await participanteData.getParticipanteById(req.params.id);
        // Si no se encuentra el participante, retorna un error 404
        if (!participante) {
            return res.status(404).json({ message: 'Participante no encontrada' });
        }
        // Si se encuentra, envía los datos del participante
        res.json(participante);
    } catch (error) {
        // Maneja cualquier error en el proceso
        res.status(500).json({ message: 'Error al obtener la participante', error });
    }
};

// Controlador para crear un nuevo participante
const postParticipante = async (req, res) => {
    // Crea un participante con los datos proporcionados en el cuerpo de la petición
    const result = await participanteData.createParticipante(req.body);
    // Retorna el resultado con código 201 (Created)
    res.status(201).json(result);
};

// Controlador para actualizar un participante existente
const putParticipante = async (req, res) => {
    // Actualiza el participante con el ID proporcionado usando los datos del cuerpo
    const result = await participanteData.updateParticipante(req.params.id, req.body);
    // Envía la respuesta con el participante actualizado
    res.json(result);
};

// Controlador para eliminar un participante
const deleteParticipante = async (req, res) => {
    // Elimina el participante con el ID proporcionado
    await participanteData.deleteParticipante(req.params.id);
    // Envía un mensaje de confirmación (nota: está en catalán "eliminat")
    res.json({ message: "Participante eliminat" });
};

// Exporta los controladores para su uso en las rutas
module.exports = { getParticipantes, getParticipanteById, postParticipante, putParticipante, deleteParticipante };
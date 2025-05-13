// hogueraController.js
// Importa la capa de datos para hogueras
const hogueraData = require('../datalayers/hogueraData');

// Controlador para obtener todas las hogueras
const getHogueras = async (req, res) => {
    // Obtiene todas las hogueras de la base de datos
    const result = await hogueraData.getAllHogueras();
    // Envía la respuesta con los datos obtenidos
    res.json(result);
};

// Controlador para obtener una hoguera por su ID
const getHogueraById = async (req, res) => {
    try {
        // Busca la hoguera por el ID proporcionado en los parámetros de la URL
        const hoguera = await hogueraData.getHogueraById(req.params.id);
        // Si no se encuentra la hoguera, retorna un error 404
        if (!hoguera) {
            return res.status(404).json({ message: 'Hoguera no encontrada' });
        }
        // Si se encuentra, envía los datos de la hoguera
        res.json(hoguera);
    } catch (error) {
        // Maneja cualquier error en el proceso
        res.status(500).json({ message: 'Error al obtener la hoguera', error });
    }
};

// Controlador para crear una nueva hoguera
const postHoguera = async (req, res) => {
    // Crea una hoguera con los datos proporcionados en el cuerpo de la petición
    const result = await hogueraData.createHoguera(req.body);
    // Retorna el resultado con código 201 (Created)
    res.status(201).json(result);
};

// Controlador para actualizar una hoguera existente
const putHoguera = async (req, res) => {
    // Actualiza la hoguera con el ID proporcionado usando los datos del cuerpo
    const result = await hogueraData.updateHoguera(req.params.id, req.body);
    // Envía la respuesta con la hoguera actualizada
    res.json(result);
};

// Controlador para eliminar una hoguera
const deleteHoguera = async (req, res) => {
    // Elimina la hoguera con el ID proporcionado
    await hogueraData.deleteHoguera(req.params.id);
    // Envía un mensaje de confirmación
    res.json({ message: "Hoguera eliminada" });
};

// Exporta los controladores para su uso en las rutas
module.exports = { getHogueras, getHogueraById, postHoguera, putHoguera, deleteHoguera };
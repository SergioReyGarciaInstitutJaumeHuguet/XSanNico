// participanteRoutes.js
// Importa Express para definir rutas
const express = require('express');
// Crea un nuevo router
const router = express.Router();
// Importa el controlador de participantes
const participanteController = require('../controllers/participanteController');

// Define las rutas y asigna los métodos del controlador

// GET /api/participantes - Obtener todos los participantes
router.get('/', participanteController.getParticipantes);
// GET /api/participantes/:id - Obtener un participante por ID
router.get('/:id', participanteController.getParticipanteById);
// POST /api/participantes - Crear un nuevo participante
router.post('/', participanteController.postParticipante);
// PUT /api/participantes/:id - Actualizar un participante existente
router.put('/:id', participanteController.putParticipante);
// DELETE /api/participantes/:id - Eliminar un participante
router.delete('/:id', participanteController.deleteParticipante);

// Exporta el router configurado
module.exports = router;
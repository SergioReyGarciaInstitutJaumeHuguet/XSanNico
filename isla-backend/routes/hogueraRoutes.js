// hogueraRoutes.js
// Importa Express para definir rutas
const express = require('express');
// Crea un nuevo router
const router = express.Router();
// Importa el controlador de hogueras
const hogueraController = require('../controllers/hogueraController');

// Define las rutas y asigna los métodos del controlador

// GET /api/hogueras - Obtener todas las hogueras
router.get('/', hogueraController.getHogueras);
// GET /api/hogueras/:id - Obtener una hoguera por ID
router.get('/:id', hogueraController.getHogueraById);
// POST /api/hogueras - Crear una nueva hoguera
router.post('/', hogueraController.postHoguera);
// PUT /api/hogueras/:id - Actualizar una hoguera existente
router.put('/:id', hogueraController.putHoguera);
// DELETE /api/hogueras/:id - Eliminar una hoguera
router.delete('/:id', hogueraController.deleteHoguera);

// Exporta el router configurado
module.exports = router;
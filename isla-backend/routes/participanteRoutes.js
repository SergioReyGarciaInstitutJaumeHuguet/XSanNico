const express = require('express');
const router = express.Router();
const participanteController = require('../controllers/participanteController');

router.get('/', participanteController.getParticipantes);
router.get('/:id', participanteController.getParticipanteById);
router.post('/', participanteController.postParticipante);
router.put('/:id', participanteController.putParticipante);
router.delete('/:id', participanteController.deleteParticipante);

module.exports = router;

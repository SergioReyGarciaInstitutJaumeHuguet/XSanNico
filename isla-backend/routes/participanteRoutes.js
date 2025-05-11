const express = require('express');
const router = express.Router();
const participanteController = require('../controllers/participanteController');

router.get('/', participanteController.getParticipantes);
router.post('/', participanteController.postParticipante);
router.put('/:id', participanteController.putParticipante);
router.delete('/:id', participanteController.deleteParticipante);

module.exports = router;

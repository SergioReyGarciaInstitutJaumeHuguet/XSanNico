const express = require('express');
const router = express.Router();
const hogueraController = require('../controllers/hogueraController');

router.get('/', hogueraController.getHogueras);
router.post('/', hogueraController.postHoguera);
router.put('/:id', hogueraController.putHoguera);
router.delete('/:id', hogueraController.deleteHoguera);

module.exports = router;

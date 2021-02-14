const express = require('express');
const router = express.Router();

const indexController = require ('../controllers/indexController');

router.get('/',indexController.home);
router.post('/create', indexController.create);

router.get('/actualizar/:id',indexController.edit);
router.put('/actualizar/:id', indexController.update);
router.delete('/borrar/:id',indexController.delete);

module.exports = router;

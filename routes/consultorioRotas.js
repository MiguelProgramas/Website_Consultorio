const express = require('express');
const router = express.Router();
const ControladorConsultorio = require('../controllers/ControladorConsultorio');

router.get('/', ControladorConsultorio.mostrarContemplados);
router.get('/consulta', ControladorConsultorio.mostrarConsulta);
router.post('/consulta', ControladorConsultorio.mostrarConsultaPost);
router.get('/avaliar', ControladorConsultorio.mostrarAvaliar);

module.exports = router;
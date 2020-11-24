const router = require('express').Router();
const Horario = require('../databases/models/Horarios');

router.get('/horarios', async(req, res) => {
    const horarios = await Horario.findAll();
    res.json(horarios);
})

module.exports = router;
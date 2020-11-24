const router = require('express').Router();
const Activo = require('../databases/models/Activos');

router.get('/activos', async(req, res) => {
    const activos = await Activo.findAll();
    res.json(activos);
})
module.exports = router;
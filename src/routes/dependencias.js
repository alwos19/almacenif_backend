const router = require('express').Router();
const Dependencia = require('../databases/models/Dependencias');

router.get('/dependencias', async(req, res) => {
    const dependencias = await Dependencia.findAll();
    res.json(dependencias);
})
module.exports = router;
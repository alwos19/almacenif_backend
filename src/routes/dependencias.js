const router = require('express').Router();
const Dependencia = require('../databases/models/Dependencias');

router.get('/dependencias', async(req, res) => {
    const dependencias = await Dependencia.findAll();
    res.json(dependencias);
});

router.post('/dependencias', async(req, res) => {
    const dependencia = await Dependencia.create(req.body)
    res.json(dependencia);
})

module.exports = router;
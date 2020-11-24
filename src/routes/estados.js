const router = require('express').Router();
const Estado = require('../databases/models/Estados');

router.get('/estados', async(req, res) => {
    const estados = await Estado.findAll();
    res.json(estados);
})

module.exports = router;
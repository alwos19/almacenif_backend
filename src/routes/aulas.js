const router = require('express').Router();
const Aula = require('../databases/models/Aulas');

router.get('/aulas', async(req, res) => {
    const aulas = await Aula.findAll();
    res.json(aulas);
})

module.exports = router;
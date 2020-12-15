const router = require('express').Router();
const Rol = require('../databases/models/Roles');

router.get('/roles', async(req, res) => {
    const roles = await Rol.findAll();
    res.json(roles);
});

router.post('/roles', async(req, res) => {
    const rol = await Rol.create(req.body);
    res.json(rol);
});


module.exports = router;
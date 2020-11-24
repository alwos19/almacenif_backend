const router = require('express').Router();
const Rol = require('../databases/models/Roles');

router.get('/roles', async(req, res) => {
    const roles = await Rol.findAll();
    res.json(roles);
})
module.exports = router;
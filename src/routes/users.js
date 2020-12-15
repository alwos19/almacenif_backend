const router = require('express').Router();
const User = require('../databases/models/Users');
const Rol = require('../databases/models/Roles');



router.get('/users', async(req, res) => {
    const user = await User.findAll({
        include: {
            model: Rol,
            as: "rol",
            attributes: ['nombre']
        },
        attributes: ['nombre', 'cedula']
    });
    res.json(user);
})

router.post('/users/signup', async(req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

router.put('/users/:userId', async(req, res) => {
    await User.update(req.body, {
        where: { id: req.params.userId }
    });

    res.json({ succes: 'se ha modificado el usuario' })
});

router.delete('/users/:userId', async(req, res) => {
    await User.destroy({
        where: { id: req.params.userId }
    });
    res.json({ success: 'se ha borrado el usuario' })
})

module.exports = router;
const router = require('express').Router();
const User = require('../databases/models/Users');
const Rol = require('../databases/models/Roles');
const { Result } = require('express-validator');
const Dependencia = require('../databases/models/Dependencias');



router.get('/users', async(req, res) => {
    const user = await User.findAll({
        include: {
            model: Rol,
            as: "rol",
            attributes: ['rol'],

            model: Dependencia,
            as: "dependencia",
            attributes: ['dependencia']

        },
        attributes: ['nombre', 'cedula']
    });
    res.json(user);
})

router.post('/users/signup', async(req, res) => {
    const user = await User.create(req.body)

    res.json(user);


    // nombre: req.body.nombre,
    // apellido: req.body.apellido,
    // cedula: req.body.cedula,
    // email: req.body.email,
    // password: req.body.password,
    // rolId: req.body.rolId

    // await Rol.create({ rol: req.body.rol }).then(rol => {
    //     user.setRol(rol).then(result => {
    //         res.json(user);
    //     })
    // });


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
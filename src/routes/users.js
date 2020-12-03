const router = require('express').Router();
const User = require('../databases/models/Users');
const Rol = require('../databases/models/Roles');


router.get('/users', async(req, res) => {
    const user = await User.findAll();
    res.json(user);
})

router.post('/users/signup', async(req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

router.put('/users/:id', async(req, res) => {
    let id = await req.params.id;
    res.json({
        id
    });
})

module.exports = router;
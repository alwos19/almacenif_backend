const router = require('express').Router();
const User = require('../databases/models/Users');

router.get('/users', async(req, res) => {
    const user = await User.findAll();
    res.json(user);
})

module.exports = router;
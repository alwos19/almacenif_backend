const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('Hola mundo');
})
module.exports = router;
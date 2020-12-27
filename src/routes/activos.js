const router = require('express').Router();
const Activo = require('../databases/models/Activos');

router.get('/activos', async(req, res) => {
    const activos = await Activo.findAll();
    res.json(activos);
});

router.post('/activo', async(req, res) => {
    const activo = await Activo.create(req.body)
    res.json(activo)
});

router.put('/activo/:activoId', async(req, res) => {
    await Activo.update(req.body, {
        where: { id: req.params.activoId }
    });
    res.json({ success: 'se ha modificado el activo' })
});

router.delete('/activo/:activoId', async(req, res) => {
    await Activo.destroy({
        where: { id: req.params.activoId }
    });
    res.json({ success: 'se ha borrado el activo' })
})

module.exports = router;
const express = require('express');
const router = express.Router();
const generalService = require('./../service/generalService')

router.post('/', async function (req, res, next) {
    let data = await generalService.salvarComentario(req.body);
    res.status(200).json(data);
});

router.get('/', async function (req, res, next) {
    let data = await generalService.buscarComentarios();
    res.status(200).json(data);
});

module.exports = router;
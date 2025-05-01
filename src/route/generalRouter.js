const express = require('express');
const router = express.Router();
const generalService = require('./../service/generalService')

router.post('/comentario', async function (req, res, next) {
    await generalService.salvarComentario(req.body);
    res.end();
});

module.exports = router;
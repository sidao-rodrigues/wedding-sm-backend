const express = require('express');
const router = express.Router();
const storageService = require('./../service/storageService')

router.post('/imagem', async function (req, res, next) {
    await storageService.salvarImagem(req.body);
    res.end();
});

module.exports = router;
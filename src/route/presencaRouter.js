const express = require('express');
const router = express.Router();
const generalService = require('./../service/generalService')

router.post('/', async function (req, res, next) {
    let data = await generalService.salvaConfirmacaoPresenca(req.body);
    res.status(200).json(data);
});

module.exports = router;
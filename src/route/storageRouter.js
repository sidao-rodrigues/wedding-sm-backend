const express = require('express');
const router = express.Router();
const storageService = require('./../service/storageService')

router.post('/', async function (req, res, next) {
    await storageService.salvarImagem(req.body);
    res.end();
});

router.get('/', async function (req, res, next) {
  let data = await storageService.buscarImagens(req.query);
  res.status(200).json(data);
});

module.exports = router;
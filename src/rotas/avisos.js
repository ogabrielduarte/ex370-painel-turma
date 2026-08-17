const express = require("express");

const router = express.Router();

const avisos = [];
let proximoId = 1;

// GET /avisos
router.get("/", (req, res) => {
  res.status(200).json(avisos);
});

// POST /avisos
router.post("/", (req, res) => {
  const { titulo, mensagem } = req.body;

  if (!titulo || !mensagem) {
    return res.status(400).json({
      erro: "titulo e mensagem são obrigatórios"
    });
  }

  const aviso = {
    id: proximoId++,
    titulo,
    mensagem
  };

  avisos.push(aviso);

  return res.status(201).json(aviso);
});

module.exports = router;
const express = require("express");

const router = express.Router();

const opcoes = [
  { nome: "Presencial", votos: 0 },
  { nome: "Remoto", votos: 0 },
  { nome: "Híbrido", votos: 0 },
];

router.get("/", (req, res) => {
  try {
    res.status(201).json({
      opcoes
    })
  } catch (e) {
    res.status(501).json({ erro: "não implementado" });
  }
});


router.post("/voto", (req, res) => {

  const voto = req.body.opcao;

  try {
    for (let i = 0; i < opcoes.length; i++) {

      if (voto == opcoes[i].nome) {
        opcoes[i].votos += 1
      } else {
        throw new Error(`A opção ${voto} não existe`);
      }

      res.status(201).json({
        mensagem: `Parabéns! Você votou em -> ${voto} <- com sucesso!`,
        estadoAtual: opcoes
      })
    }
  } catch (e) {
    res.status(400).json({ erro: e.message || e });
  }
});

module.exports = router;

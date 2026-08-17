const express = require("express");

const router = express.Router();

// ─── Tarefa C — Enquete rápida ────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
// As opções já vêm cadastradas; vocês podem trocar os nomes se quiserem.
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

// POST /enquete/voto — corpo { opcao }: incrementa o voto daquela opção.
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

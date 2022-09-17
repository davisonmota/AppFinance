const express = require("express");
const app = express();
app.use(express.json());

app.use("/", express.static("./client"));

const lancamentos = [
  { mes: "janeiro", categoria: "Salário", tipo: "receita", valor: 3000 },
  { mes: "janeiro", categoria: "Aluguel", tipo: "despesa", valor: 2000 },
  { mes: "janeiro", categoria: "Conta de Luz", tipo: "despesa", valor: 200 },
  { mes: "fevereiro", categoria: "Salário", tipo: "receita", valor: 3000 },
  { mes: "fevereiro", categoria: "Aluguel", tipo: "despesa", valor: 1200 },
  { mes: "fevereiro", categoria: "Conta de Luz", tipo: "despesa", valor: 100 },
  { mes: "marco", categoria: "Salário", tipo: "receita", valor: 3000 },
  { mes: "marco", categoria: "Hora Extra", tipo: "receita", valor: 500 },
  { mes: "marco", categoria: "Aluguel", tipo: "despesa", valor: 600 },
];

app.get("/api/lancamentos", (req, res) => {
  res.json(lancamentos);
});

app.post("/api/lancamentos", (req, res) => {
  const lancamento = req.body;
  console.log(lancamento);
  lancamentos.push(lancamento);

  res.end();
});

app.listen(3000);

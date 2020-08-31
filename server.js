const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
let contador = 3;
const clientes = [
  {
    id: 1,
    nome: 'Joao',
    email: 'joao@email.com'
  },
  {
    id: 2,
    nome: 'Cristina',
    email: 'cristina@email.com'
  }
]
const porta = 3000;
app.set('port', porta);

app.get('/clientes', (req, res, next) => {
  res.json(clientes);
});

app.post('/clientes', (req, res, next) => {
  const cliente = req.body;
  clientes.push({id: contador += 1, nome: cliente.nome, email: cliente.email});
  console.log(clientes);
  res.status(201).json(clientes);
})

app.get("/teste", (req, res, next) => {
  res.send("Olá!");
});

const server = http.createServer(app);
server.listen(3000);

  



  /*app.use((req, res, next) => {
    res.send("Hello from the Back end");
  });*/

const express = require('express');
const server = express();
server.use(express.json());

const commits = [];

function checkCommitExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'O nome do commit é obrigatória.' });
  }

  if(commits.indexOf(req.body.name) == 0) {
    return res.status(400).json({ error: 'O nome desse commit já existe.' });
  }*/

  return next();
}

function checkCommitInArray(req, res, next) {
  const commit = commits[req.params.index];
  if (!commit) {
    return res.status(400).json({ error: 'Esse commit não existe.' });
  }

  req.commit = commit;

  return next();
}

server.get('/commits', (req, res) => {
  return res.json(commits);
});

server.get('/commits/:index', checkCommitInArray, (req, res) => {
  const { index } = req.params;
  return res.json(commits[index]);
});

server.post('/commits', checkCommitExists, (req, res) => {
  const { name } = req.body;
  commits.push(name);
  return res.json(commits);
});

server.put('/commits/:index', checkCommitInArray, checkCommitExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  commits[index] = name;

  return res.json(commits);
});

server.delete('/commits/:index', checkCommitInArray, (req, res) => {
  const { index } = req.params;

  commits.splice(index, 1);

  return res.send();
});

server.listen(3000);
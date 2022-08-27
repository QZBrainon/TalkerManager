const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const generateToken = require('../util/generateToken');
const emailValidator = require('../middlewares/emailValidator');
const passwordValidator = require('../middlewares/passwordValidator');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (req, res) => {
    const document = await fs.readFile('./src/talker.json', 'utf-8');
    if (document.length === 0) {
      return res.status(200).send([]);
    } 
      return res.status(200).json(JSON.parse(document));
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const document = await fs.readFile('./src/talker.json', 'utf-8');
  const talkerObject = JSON.parse(document);
  const foundTalker = talkerObject.find((talker) => talker.id === Number(id));
  if (foundTalker) {
    return res.status(200).send(foundTalker);
  }
  res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

app.post('/login', emailValidator, passwordValidator, (req, res) => {
  res.status(200).json({ token: generateToken() });
});

app.listen(PORT, () => {
  console.log('Online');
});

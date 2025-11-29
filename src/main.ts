import express from 'express';

const server = express();

const port = 2000;
server.use(express.json()); // Включаем парсер тела

server.get('/payload/:id', (req, res) => {
  console.log('Использую метод POST');
  console.log(req.params);
  res.send(`Вернул парамс ${req.params}`);
});

server.get('/payload/user', (req, res) => {
  console.log('Использую метод POST');
  console.log(req.query);
  res.send(`Вернул query`);
});

server.post('/payload', (req, res) => {
  console.log('Использую метод POST');
  console.log(req.body);
  res.send(`Вернул body`);
});

server.post('/payload/pay', (req, res) => {
  console.log('Использую метод POST');
  console.log(req.body);
  res.send(`Вернул body`);
});

server.listen(port, () => {
  console.log(`Server is started on port ${port}...`);
});

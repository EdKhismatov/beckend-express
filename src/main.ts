import express from 'express';
import logger from './logger/pino.logger';

const server = express();

const port = 2000;
server.use(express.json()); // Включаем парсер тела

server.get('/payload/:id', (req, res) => {
  logger.info(req.params, 'Использую метод Get, Отработано успешно');
  res.send(`Вернул парамс ${req.params.id}`);
});

server.post('/payload/user', (req, res) => {
  logger.info('Использую метод POST');
  logger.info(req.query);
  res.send(`Вернул query`);
});

server.post('/payload', (req, res) => {
  logger.info('Использую метод POST');
  logger.info(req.body);
  res.send(`Вернул body`);
});

server.listen(port, () => {
  logger.info(`Server is started on port ${port}...`);
});

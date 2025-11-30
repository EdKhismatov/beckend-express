import express from 'express';
import logger from '../logger/pino.logger';
import { userMock } from '../mocks/userMocks';

export const userRouter = express.Router();

userRouter.post('/register', (req, res) => {
  logger.info('Сгенерирован новый пользователь');
  res.json(userMock());
});

userRouter.post('/login', (req, res) => {
  logger.info('Логин пользователя');
  res.json(userMock());
});

import express from 'express';
import logger from '../logger/pino.logger';
import { userLoginMock, userRegMock } from '../mocks/user.mocks';

export const userRouter = express.Router();

userRouter.post('/register', (req, res) => {
  logger.info('Сгенерирован новый пользователь');
  res.json(userRegMock());
});

userRouter.post('/login', (req, res) => {
  logger.info('Логин пользователя');
  res.json(userLoginMock());
});

import { NextFunction, Request, Response } from 'express';
import logger from '../logger/pino.logger';

export const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err);
  res.status(500).json({
    // <-- В любом случае ставим статус ответа 500 и отправляем в message сообщение ошибки
    code: 'error',
    message: err.message,
  });
};

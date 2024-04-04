import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const VERBOSE_ERROR = false;
const VERBOSE_STACK = false;

const errorHandler = (err, req: Request, res: Response, next: NextFunction) => {
  console.log('errorHandler...');
  console.log(err);
  if (VERBOSE_ERROR) console.error(err);
  if (VERBOSE_STACK) console.error(err.stack);

  const status = err.statusCode || err.status || StatusCodes.INTERNAL_SERVER_ERROR;
  return res.status(status).json(err);
};

export default errorHandler;

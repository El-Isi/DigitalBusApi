import { StatusCodes } from 'http-status-codes';

class HTTPError extends Error {
  public statusCode: number;

  constructor(
    message: string = 'Internal Server Error',
    statusCode:number = StatusCodes.INTERNAL_SERVER_ERROR,
    ...args
  ) {
    super(...args);

    this.name = 'HTTPError';
    this.message = message;
    this.statusCode = statusCode;

    if (Error.captureStackTrace) Error.captureStackTrace(this, new.target);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default HTTPError;

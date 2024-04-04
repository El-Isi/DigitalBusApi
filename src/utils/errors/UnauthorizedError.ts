import { StatusCodes } from 'http-status-codes';
import HTTPError from './HTTPError';

class UnauthorizedError extends HTTPError {
  constructor(...args) {
    super(...args);

    this.name = 'UnauthorizedError';
    this.message = this.message  || 'Unauthorized';
    this.statusCode = StatusCodes.UNAUTHORIZED;


    if (Error.captureStackTrace) Error.captureStackTrace(this, new.target);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default UnauthorizedError;

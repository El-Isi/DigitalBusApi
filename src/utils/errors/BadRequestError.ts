import { StatusCodes } from 'http-status-codes';
import HTTPError from './HTTPError';

class BadRequestError extends HTTPError {
  constructor(...args) {
    super(...args);

    this.name = 'BAD_REQUEST_ERROR';
    this.message = this.message  || 'Bad Request';
    this.statusCode = StatusCodes.BAD_REQUEST;


    if (Error.captureStackTrace) Error.captureStackTrace(this, new.target);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default BadRequestError;

import { StatusCodes } from 'http-status-codes';
import HTTPError from './HTTPError';

class NotFoundError extends HTTPError {
  constructor(...args) {
    super(...args);

    this.name = 'NOT_FOUND_ERROR';
    this.message = this.message  || 'Not Found';
    this.statusCode = StatusCodes.NOT_FOUND;


    if (Error.captureStackTrace) Error.captureStackTrace(this, new.target);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default NotFoundError;

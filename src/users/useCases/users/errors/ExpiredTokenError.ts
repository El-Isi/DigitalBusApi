import UnauthorizedError from '../../../../utils/errors/UnauthorizedError';

class ExpiredTokenError extends UnauthorizedError {
  constructor(...args) {
    super(...args);

    this.name = 'ExpiredTokenError';
    this.message = 'Token has expired';

    if (Error.captureStackTrace) Error.captureStackTrace(this, new.target);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default ExpiredTokenError;

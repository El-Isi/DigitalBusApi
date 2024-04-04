import UnauthorizedError from '../../../../utils/errors/UnauthorizedError';

class InvalidTokenError extends UnauthorizedError {
  constructor(...args) {
    super(...args);

    this.name = 'InvalidTokenError';
    this.message = 'Token has invalid';

    if (Error.captureStackTrace) Error.captureStackTrace(this, new.target);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default InvalidTokenError;

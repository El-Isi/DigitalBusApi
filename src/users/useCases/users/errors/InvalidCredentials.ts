import UnauthorizedError from '../../../../utils/errors/UnauthorizedError';

class InvalidCredentials extends UnauthorizedError {
  constructor(...args) {
    super(...args);

    this.name = 'InvalidCredentials';
    this.message = 'Invalid Credentials';

    if (Error.captureStackTrace) Error.captureStackTrace(this, new.target);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default InvalidCredentials;

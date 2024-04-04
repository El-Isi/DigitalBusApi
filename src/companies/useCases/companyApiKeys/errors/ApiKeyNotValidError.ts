import UnauthorizedError from '../../../../utils/errors/UnauthorizedError';

class ApiKeyNotValidError extends UnauthorizedError {
  constructor(...args) {
    super(...args);

    this.name = 'ApiKeyNotValidError';
    this.message = 'Client or ApiKey not valid';

    if (Error.captureStackTrace) Error.captureStackTrace(this, new.target);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default ApiKeyNotValidError;

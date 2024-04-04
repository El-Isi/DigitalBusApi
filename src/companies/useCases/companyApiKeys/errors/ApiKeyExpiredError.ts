import UnauthorizedError from '../../../../utils/errors/UnauthorizedError';

class ApiKeyExpiredError extends UnauthorizedError {
  constructor(...args) {
    super(...args);

    this.name = 'ApiKeyNotValidError';
    this.message = 'ApiKey Expired';

    if (Error.captureStackTrace) Error.captureStackTrace(this, new.target);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default ApiKeyExpiredError;

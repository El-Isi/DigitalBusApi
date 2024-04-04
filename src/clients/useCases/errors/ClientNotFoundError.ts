import NotFoundError from '../../../utils/errors/NotFoundError';

class ClientNotFoundError extends NotFoundError {
  constructor(...args) {
    super(...args);

    this.name = 'ClientNotFoundError';
    this.message = 'Client not found';

    if (Error.captureStackTrace) Error.captureStackTrace(this, new.target);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default ClientNotFoundError;

import NotFoundError from '../../../../utils/errors/NotFoundError';

class UserNotFoundError extends NotFoundError {
  constructor(...args) {
    super(...args);

    this.name = 'UserNotFoundError';
    this.message = 'User not found';

    if (Error.captureStackTrace) Error.captureStackTrace(this, new.target);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default UserNotFoundError;

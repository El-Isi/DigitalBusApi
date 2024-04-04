import normalizeEmail from 'normalize-email';

import UserRepository from '../../repository/UserRepository';
import IUserModel from '../../model/IUserModel';
import UserNotFoundError from './errors/UserNotFoundError';

class FindByEmailUserUseCase {
  async exec(email: string): Promise<IUserModel> {
      const userRepository = new UserRepository();
      const _email = normalizeEmail(email);
      const user = await userRepository.findOne({ email: _email });
      user.password = '';
      if (!user) throw new UserNotFoundError();
      return user;
  }
}

export default FindByEmailUserUseCase;

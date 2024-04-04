import IUserModel from '../../model/IUserModel';
import UserRepository from '../../repository/UserRepository';
import InvalidCredentials from './errors/InvalidCredentials';

import * as bcrypt from '../../../utils/bcrypt';
import UserNotFoundError from './errors/UserNotFoundError';
import { decryptData } from '../../../config/cripto';

export default class LoginUserUseCase {
  private async isPasswordValid(password: string, user: IUserModel): Promise<boolean> {
    const passwordDecrypted = await decryptData(password);
    const isValid = await bcrypt.compare(passwordDecrypted, user.password);
    if (!isValid) throw new InvalidCredentials();
    return isValid;
  }

  async exec(email: string, password: string): Promise<Object> {
    const userRepository = new UserRepository();
    const newEmail = email.toLowerCase();
    const foundUser = await userRepository.findOne({ email: newEmail });

    if (!foundUser) throw new UserNotFoundError();
    await this.isPasswordValid(password, foundUser);

    return foundUser;
  }
}

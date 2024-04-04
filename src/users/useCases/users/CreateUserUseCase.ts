import removeAccents from 'remove-accents';

import IUser from '../../model/interfaces/IUser';
import UserRepository from '../../repository/UserRepository';

import * as bcrypt from '../../../utils/bcrypt';
import { decryptData } from '../../../config/cripto';

class CreateUserUseCase {
  sanitizeString(name) {
    const newString = name
      .toLowerCase()
      .trim()
      .replace(/\s\s+/g, ' ');
    return removeAccents.remove(newString);
  };

  private async hashPassword (password: string): Promise<string> {
    const passwordDecrypted = decryptData(password);
    const hash = await bcrypt.encrypt(passwordDecrypted);
    return hash;
  }

  private async findUser(email: string) {
    const userRepository = new UserRepository();
    const _email = email.toLowerCase();
    const user = await userRepository.findOne({ email: _email });
    return !user;
  }

  async exec(user: IUser) {

    const existUser = await this.findUser(user.email);
    if (!existUser) {
      throw new Error('El usuario ya existe');
    }
    const email = user.email.toLowerCase();
    const password = await this.hashPassword(user.password);
    const firstName = user.firstName;
    const secondName = user.secondName;
    const lastName = user.lastName;
    const secondLastName = user.secondLastName;
    const phone = user.phone;
    const company = user.company;
    const role = user.role;
    const fullName = secondName ? `${firstName} ${secondName} ${lastName} ${secondLastName}` : `${firstName} ${lastName} ${secondLastName}`;
    const normalizedFullName = this.sanitizeString(fullName);
    const userRepository = new UserRepository();

    const _user = {
      email,
      password,
      firstName,
      secondName,
      lastName,
      secondLastName,
      phone,
      role,
      company,
      normalizedFullName,
    } as IUser;

    const userCreated = await userRepository.create(_user);
    userCreated.password = 'Password saved';
    return userCreated;
  }
}

export default CreateUserUseCase;

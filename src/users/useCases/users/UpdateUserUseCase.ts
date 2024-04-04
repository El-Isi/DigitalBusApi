import IUser from '../../model/interfaces/IUser';
import IUserModel from '../../model/IUserModel';
import UserRepository from '../../repository/UserRepository';
import UserNotFoundError from './errors/UserNotFoundError';

export default class UpdateUserUseCase {
  async exec(id: string, user: IUser): Promise<IUserModel> {
    const userRepository = new UserRepository();
    const updatedUser = await userRepository.update(id, user);
    if (!updatedUser) throw new UserNotFoundError();
    return updatedUser;
  }
}

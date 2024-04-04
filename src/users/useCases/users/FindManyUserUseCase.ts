import UserRepository from '../../repository/UserRepository';
import IUserModel from '../../model/IUserModel';

class FindManyUserUseCase {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  async exec(query: Object): Promise<IUserModel[] | null> {
      const users = await this.userRepository.find(query);
      return users;
  }
}

export default FindManyUserUseCase;

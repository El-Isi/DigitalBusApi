import UserRepository from '../../repository/UserRepository';
import IUserModel from '../../model/IUserModel';

class FindOneUserUseCase {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  async exec(query: Object): Promise<IUserModel | null> {
      const user = await this.userRepository.findOne(query);
      return user;
  }
}

export default FindOneUserUseCase;

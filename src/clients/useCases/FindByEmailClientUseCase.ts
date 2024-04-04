import normalizeEmail from 'normalize-email';
import IClientModel from '../model/IClientModel';
import ClientRepository from '../repository/ClientRepository';
import ClientNotFoundError from './errors/ClientNotFoundError';

class FindByEmailClientUseCase {
  async exec(email: string): Promise<IClientModel> {
      const clientRepository = new ClientRepository();
      const _email = normalizeEmail(email);
      const client = await clientRepository.findOne({ email: _email });
      if (!client) throw new ClientNotFoundError();
      return client;
  }
}

export default FindByEmailClientUseCase;

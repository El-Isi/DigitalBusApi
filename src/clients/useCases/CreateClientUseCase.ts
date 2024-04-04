import removeAccents from 'remove-accents';
import IClient from '../model/interfaces/IClient';
import ClientRepository from '../repository/ClientRepository';

class CreateClientUseCase {
  sanitizeString(name) {
    const newString = name
      .toLowerCase()
      .trim()
      .replace(/\s\s+/g, ' ');
    return removeAccents.remove(newString);
  };

  async exec(client: IClient) {
    const clientRepository = new ClientRepository();

    const existUser = await await clientRepository.findOne({ email: client.email });
    if (existUser) return existUser;

    const email = client.email.toLowerCase();
    const firstName = client.firstName;
    const secondName = client?.secondName;
    const lastName = client.lastName;
    const secondLastName = client?.secondLastName;
    const phone = client.phone;
    const fullName = secondName ? `${firstName} ${secondName} ${lastName} ${secondLastName}` : `${firstName} ${lastName} ${secondLastName}`;
    const normalizedFullName = this.sanitizeString(fullName);

    const _client = {
      email,
      firstName,
      secondName,
      lastName,
      secondLastName,
      phone,
      fullName,
      normalizedFullName,
    } as IClient;

    const clientCreated = await clientRepository.create(_client);
    return clientCreated;
  }
}

export default CreateClientUseCase;

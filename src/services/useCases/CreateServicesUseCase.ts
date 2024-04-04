import IService from '../model/interfaces/IService';
import ServiceRepository from '../repository/ServiceRepository';

class CreateServiceUseCase {
  async exec(service: IService) {
    const serviceRepository = new ServiceRepository();
    const serviceCreated = await serviceRepository.create(service);
    return serviceCreated;
  }
}

export default CreateServiceUseCase;

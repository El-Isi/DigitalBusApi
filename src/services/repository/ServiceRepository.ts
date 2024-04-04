import ServicesSchema from '../dataAccess/ServiceSchema';
import IService from '../model/interfaces/IService';
import IServiceModel from '../model/IServiceModel';

export default class ServiceRepository {
  create(service: IService): Promise<IServiceModel> {
    const newService = new ServicesSchema(service);
    return newService.save();
  }

  find(query: object = {}): Promise<IServiceModel[]> {
    return ServicesSchema.find(query).exec();
  }

  findOne(query: object = {}): Promise<IServiceModel | null> {
    return ServicesSchema.findOne(query).exec();
  }

  findById(id: string): Promise<IServiceModel | null> {
    return ServicesSchema.findById(id).exec();
  }

  update(id: string, item: IService): Promise<IServiceModel | null> {
    return ServicesSchema.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  delete(id: string): Promise<IServiceModel | null> {
    return ServicesSchema.findByIdAndDelete(id).exec();
  }
}

import ClientSchema from '../dataAccess/ClientSchema';
import IClientModel from '../model/IClientModel';
import IClient from '../model/interfaces/IClient';

export default class ClientRepository {
  create(client: IClient): Promise<IClientModel> {
    const newTicket = new ClientSchema(client);
    return newTicket.save();
  }

  find(query: object = {}): Promise<IClientModel[]> {
    return ClientSchema.find(query).exec();
  }

  findOne(query: object = {}): Promise<IClientModel | null> {
    return ClientSchema.findOne(query).exec();
  }

  findById(id: string): Promise<IClientModel | null> {
    return ClientSchema.findById(id).exec();
  }

  update(id: string, item: IClient): Promise<IClientModel | null> {
    return ClientSchema.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  delete(id: string): Promise<IClientModel | null> {
    return ClientSchema.findByIdAndDelete(id).exec();
  }
}

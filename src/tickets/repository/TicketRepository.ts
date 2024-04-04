import TicketSchema from '../dataAccess/TicketSchema';
import ITicketModel from '../model/ITicketModel';
import ITicket from '../model/interfaces/ITicket';

export default class TicketRepository {
  create(ticket: ITicket): Promise<ITicketModel> {
    const newTicket = new TicketSchema(ticket);
    return newTicket.save();
  }

  find(query: object = {}): Promise<ITicketModel[]> {
    return TicketSchema.find(query).exec();
  }

  findOne(query: object = {}): Promise<ITicketModel | null> {
    return TicketSchema.findOne(query).exec();
  }

  findById(id: string): Promise<ITicketModel | null> {
    return TicketSchema.findById(id).exec();
  }

  update(id: string, item: ITicket): Promise<ITicketModel | null> {
    return TicketSchema.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  delete(id: string): Promise<ITicketModel | null> {
    return TicketSchema.findByIdAndDelete(id).exec();
  }
}
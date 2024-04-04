import { Document } from 'mongoose';
import ITicket from './interfaces/ITicket';

export default interface ITicketModel extends ITicket, Document {}

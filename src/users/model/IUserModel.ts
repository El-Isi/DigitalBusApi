import { Document } from 'mongoose';
import IUser from './interfaces/IUser';

export default interface IUserModel extends IUser, Document { }

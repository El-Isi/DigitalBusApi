import { Document } from 'mongoose';
import IRole from './interfaces/IRole';

export default interface IRoleModel extends IRole, Document { }

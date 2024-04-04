import { Document } from 'mongoose';
import IService from './interfaces/IService';

export default interface IServiceModel extends IService, Document {}

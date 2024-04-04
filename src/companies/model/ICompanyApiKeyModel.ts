import { Document } from 'mongoose';
import IService from './interfaces/ICompanyApiKey';

export default interface IServiceModel extends IService, Document {}

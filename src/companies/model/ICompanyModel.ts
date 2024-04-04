import { Document } from 'mongoose';
import ICompany from './interfaces/ICompany';

export default interface ICompanyModel extends ICompany, Document {}

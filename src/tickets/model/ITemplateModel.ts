import { Document } from 'mongoose';
import ITemplate from './interfaces/ITemplate';

export default interface ITemplateModel extends ITemplate, Document {}

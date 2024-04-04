import { Document } from 'mongoose';
import IClient from './interfaces/IClient';

export default interface IClientModel extends IClient, Document {}

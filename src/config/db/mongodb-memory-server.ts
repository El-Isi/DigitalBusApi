import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

jest.setTimeout(900000);

const mongod = new MongoMemoryServer();

export const connect = async () => {
  const uri = await mongod.getUri();
  const connection = await mongoose.connect(uri);
  mongoose.set('debug', false);
  return connection;
};

export const connectTest = async () => {
  // Before establishing a new connection close previous
  await mongoose.disconnect();

  const uri = await mongod.getUri();
  const connection = await mongoose.connect(uri);
  mongoose.set('debug', false);
  return connection;
};

export const stop = async () => {
  await mongoose.connection.close();
};

export const dropDatabase = async () => {
  await mongoose.connection.db.dropDatabase();
};

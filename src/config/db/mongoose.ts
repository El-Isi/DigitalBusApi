import mongoose from 'mongoose';

export default () => {
  const { MONGODB_URL } = process.env;

  const config = {
    autoIndex: true,
    connectTimeoutMS: 300000,
    socketTimeoutMS: 30000,
  };  

  mongoose.connect(MONGODB_URL as string, config);
  mongoose.set('debug', false);
  mongoose.Promise = global.Promise;

  const db = mongoose.connection;

  db.on('connected', () => {
    console.log(MONGODB_URL);
    console.log('Mongoose default connection open');
  });

  db.on('reconnected', () => {
    console.log('Mongoose default connection reconnected');
  });

  db.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
  });

  const SIGS = [
    'SIGINT', // Ctrl + C
    'SIGBREAK', // Ctrl + C
    'SIGTERM', // Soft Shutdown
  ] as const;

  SIGS.forEach((SIG) => {
    process.on(SIG, async () => {
      try {
        await mongoose.connection.close();
        console.log(`Mongoose connection closed due to ${SIG}`);
        process.exit(1);
      } catch (err) {
        console.error(`Error closing mongoose connection: ${err}`);
        process.exit(1);
      }
    });
  });
};

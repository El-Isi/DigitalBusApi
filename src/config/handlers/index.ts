import { Application } from 'express';

import errorHandler from './errorHandler';

export default (app: Application) => {
  app.use(errorHandler);
};

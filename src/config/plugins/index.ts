import { Application } from 'express';
import bodyParser from './body-parser';
import urlEncoded from './url-encoded';
import morgan from './morgan';
import cors from './cors';
import helmet from './helmet';
import compression from './compression';

import './dotenv';
import './passport';

export default (app: Application) => {
  app.use(bodyParser);
  app.use(urlEncoded);
  app.use(morgan);
  app.use(cors);
  app.use(helmet);
  app.use(compression);
};

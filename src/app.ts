import express, { Application, Router } from 'express';

import addPlugins from './config/plugins';
import startDB from './config/db/mongoose';
import addHandlers from './config/handlers';

import addRoutes from './routes';

const app: Application  = express();
addPlugins(app);
startDB();
addRoutes(app as Router);
addHandlers(app);

export default app;

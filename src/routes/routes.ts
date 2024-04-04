import IRoute from '../utils/baseInterfaces/IRoute';
import apiRoutes from './apiRoutes';
import Dashboard from './dashboard';

const routes: IRoute[] = [
  {
    path: '/api',
    method: 'use',
    handler: apiRoutes,
  },
  {
    path: '/',
    method: 'use',
    handler: [Dashboard],
  },
];

export default routes;

import IRoute from '../../../utils/baseInterfaces/IRoute';
import * as authMiddleware from '../../../config/middleware/auth';
import ServicesController from '../controllers/ServiceController';

const URL_BASE = '/template';
const servicesController = new ServicesController();

const routes: IRoute[] = [
  {
    path: URL_BASE,
    method: 'post',
    handler: [
      // authMiddleware.auth.required,
      servicesController.store
    ],
  },
];

export default routes;

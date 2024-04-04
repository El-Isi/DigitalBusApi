import IRoute from '../../../utils/baseInterfaces/IRoute';
import AuthController from '../controllers/AuthController';
import * as authMiddleware from '../../../config/middleware/auth';

const URL_BASE = '/auth';
const authController = new AuthController();

const routes: IRoute[] = [
  {
    path: URL_BASE + '/login',
    method: 'post',
    handler: [
       authController.login
    ],
  },

  {
    path: `${URL_BASE}/logout`,
    method: 'post',
    handler: [
      authMiddleware.auth.required,
      authController.logout
    ],
  },
];

export default routes;

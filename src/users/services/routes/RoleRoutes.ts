import IRoute from '../../../utils/baseInterfaces/IRoute';
import * as authMiddleware from '../../../config/middleware/auth';
import RoleController from '../controllers/RoleController';

const URL_BASE = '/role';
const roleController = new RoleController();

const routes: IRoute[] = [
  {
    path: URL_BASE,
    method: 'post',
    handler: [
      // authMiddleware.auth.required,
      roleController.store
    ],
  },
];

export default routes;

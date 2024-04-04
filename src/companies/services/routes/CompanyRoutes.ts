import IRoute from '../../../utils/baseInterfaces/IRoute';
import * as authMiddleware from '../../../config/middleware/auth';
import CompanyController from '../controllers/CompanyController';

const URL_BASE = '/company';
const companyController = new CompanyController();

const routes: IRoute[] = [
  {
    path: URL_BASE,
    method: 'post',
    handler: [
      // authMiddleware.auth.required,
      companyController.store
    ],
  },
];

export default routes;

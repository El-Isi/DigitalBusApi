import CompanyApiKeyController from '../controllers/CompanyApiKeyController';
import IRoute from '../../../utils/baseInterfaces/IRoute';
import * as authMiddleware from '../../../config/middleware/auth';

const URL_BASE = '/companyApiKeys';
const companyApiKeyController = new CompanyApiKeyController();

const routes: IRoute[] = [
  {
    path: URL_BASE,
    method: 'post',
    handler: [
      // authMiddleware.auth.required,
      companyApiKeyController.store
    ],
  },
];

export default routes;

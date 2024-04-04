import IRoute from '../../../utils/baseInterfaces/IRoute';
import * as authMiddleware from '../../../config/middleware/auth';
import TemplateController from '../controllers/TemplateController';

const URL_BASE = '/template';
const templateController = new TemplateController();

const routes: IRoute[] = [
  {
    path: URL_BASE,
    method: 'post',
    handler: [
      // authMiddleware.auth.required,
      templateController.store
    ],
  },
];

export default routes;
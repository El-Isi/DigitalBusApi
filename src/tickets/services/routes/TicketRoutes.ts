import TicketController from '../controllers/TicketController';
import IRoute from '../../../utils/baseInterfaces/IRoute';
import * as authMiddlewareAPI from '../../../config/middleware/authAPI';

const URL_BASE = '/ticket';
const ticketController = new TicketController();

const routes: IRoute[] = [
  {
    path: URL_BASE,
    method: 'post',
    handler: [
      authMiddlewareAPI.authApi(),
      ticketController.store
    ],
  },
];

export default routes;
import { Router } from 'express';
import UserRoutes from '../users/services/routes/UserRoutes';
import TicketsRoutes from '../tickets/services/routes/TicketRoutes';
import TemplatesRoutes from '../tickets/services/routes/TemplateRoutes';
import CompaniesRoutes from '../companies/services/routes/CompanyRoutes';
import CompanyApiKeysRoutes from '../companies/services/routes/CompanyApiKeyRoutes';
import ServicesRoutes from '../services/services/routes/ServiceRoutes';
import RoleRoutes from '../users/services/routes/RoleRoutes';
import AuthRoutes from '../users/services/routes/AuthRoutes';

const apiRoutes = [
  ...AuthRoutes,
  ...UserRoutes,
  ...TicketsRoutes,
  ...TemplatesRoutes,
  ...CompanyApiKeysRoutes,
  ...CompaniesRoutes,
  ...ServicesRoutes,
  ...RoleRoutes,
];

function generateRoutes(_router, _routes) {
  for (const route of _routes) {
    const { method, path, handler } = route;
    _router[method](path, handler);
  }
  return _router;
}

export default generateRoutes(Router(), apiRoutes);

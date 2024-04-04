import { Router } from 'express';
import routes from './routes';

export default (router: Router) => {
  routes.forEach((route) => {
    const { method, path, handler } = route;
    router[method](path, handler);
  });
};

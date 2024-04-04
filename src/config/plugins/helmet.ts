import helmet from 'helmet';

export default helmet({
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      'default-src': ["'self'"],
      'img-src': ["'self'", "data:"],
    }
  }
});

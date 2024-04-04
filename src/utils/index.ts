const { NODE_ENV } = process.env;

export const isTestingEnvironment = (environment = NODE_ENV): boolean => environment === 'test';

export const isDevelopmentEnvironment = (environment = NODE_ENV): boolean => environment === 'development';

export const isProductionEnvironment = (environment = NODE_ENV): boolean => environment === 'production';

export const sleep = (time: number) => (
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })
);

/* eslint-disable no-underscore-dangle */
const { REDISCLOUD_HOST, REDISCLOUD_KEY, REDISCLOUD_PORT, ENV } = process.env;

const redisConfig = {
  port: +REDISCLOUD_PORT, // Redis port
  host: REDISCLOUD_HOST, // Redis host
  username: 'default', // needs Redis >= 6
  password: REDISCLOUD_KEY,
  auth: REDISCLOUD_KEY,
};

/**
 * If you're having connection problems with the default settings, you can try building
 * your own client and passing it as a custom client to the Kue or Bull library.
 * ioredis nedds typescript 4+
 * isaac@fintecimal.com
 */
// import Redis, { RedisOptions } from 'ioredis';
// const createIoRedisClient = () => {
//   if (ENV === 'test') return new Redis();
//   if (!REDISCLOUD_PORT || !REDISCLOUD_HOST || !REDISCLOUD_KEY) return null;
//   // console.log({ REDISCLOUD_PORT });
//   return new Redis(redisConfig);
// };
//
// const redis = {
//   ...redisConfig,
//   // createClient: createIoRedisClient,
// };

const redis = {
  ...redisConfig,
};

Object.freeze(redis);

export default redis;

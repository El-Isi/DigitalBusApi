import blacklist from 'express-jwt-blacklist';
import redis from 'redis';
import redisConfig from './redis/index'
const client = redis.createClient(redisConfig);

client.on('connect', function () {
    blacklist.configure({
        tokenId: 'jti',
        indexBy: 'id',
        store: {
        type: 'redis',
        client
        }
    });
}).on('error', () => {
    blacklist.configure({
        tokenId: 'jti',
        indexBy: 'id'
    });
});

export default blacklist;
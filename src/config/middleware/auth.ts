import { expressjwt as jwt } from 'express-jwt';
require('../../utils/config');
import blacklist from '../blacklist';

/**
 *
 * @param {Object} req
 * @returns {String|null}
 * get an access toke from the header
 */
const getTokenFromHeaders = req => {
    const {
        headers: { authorization }
    } = req;
    console.log({authorization});
    if (authorization && authorization.split(' ')[0] === 'Token') {
        return authorization.split(' ')[1];
    }
    return null;
};

const { JWT_SECRET } = process.env;
export const auth = {
    required: jwt({
        secret: JWT_SECRET,
        requestProperty: 'payload',
        isRevoked: blacklist.isRevoked,
        getToken: getTokenFromHeaders,
        algorithms: ['HS256'],
    }),
    optional: jwt({
        secret: JWT_SECRET,
        requestProperty: 'payload',
        isRevoked: blacklist.isRevoked,
        getToken: getTokenFromHeaders,
        credentialsRequired: false,
        algorithms: ['HS256'],
    })
};
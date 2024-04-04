import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { StatusCodes } from 'http-status-codes';

import JWTUserUseCase from '../../useCases/users/JWTUserUseCase';
import ErrorResponse from '../../../utils/errors/ErrorResponse';
import DataResponse from '../../../utils/responses/DataResponse';
import blacklist from '../../../config/blacklist';

export default class AuthController {
  login(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('local', { session: false }, (err, passportUser, info) => {
      if (err) {
        if (err.statusCode == StatusCodes.UNAUTHORIZED) {
          const returnValue = new ErrorResponse({ message: 'Credenciales incorrectas', error: err });
          return res.status(StatusCodes.OK).json(returnValue);
        }
        return next(err);
      }
      if (passportUser) {
        const jwtUserUseCase = new JWTUserUseCase();
        const user = jwtUserUseCase.exec(passportUser);
        const returnValue = new DataResponse({ ...user });
        return res.status(StatusCodes.OK).json(returnValue);
      } else {
        const returnValue = new ErrorResponse({ message: 'Credenciales incorrectas', error: info.message });
        return res.status(StatusCodes.OK).json(returnValue);
      }
    })(req, res, next);
  }

  async logout(req: any, res: Response, next: NextFunction) {
    try {
      blacklist.revoke(req.payload);
      const returnValue = new DataResponse({ status: 'success' });
      return res.status(StatusCodes.OK).json(returnValue);;
    } catch (err) {
      const returnValue = new ErrorResponse({ message: 'Parametros incorrectos', err });
      return res.status(StatusCodes.UNAUTHORIZED).json(returnValue);
    }
  }
}

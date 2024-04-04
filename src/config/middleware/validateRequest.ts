import { Response, NextFunction } from 'express';
import ErrorResponse from '../../utils/errors/ErrorResponse';
import { StatusCodes } from 'http-status-codes';
require('../../utils/config');

export const validateRequest = (requiredProps: any = {}) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req as any;

      const missingProps = requiredProps.filter(prop => !(prop in body));
      if (missingProps.length > 0) {
        const error = new Error(`Las siguientes propiedades son requeridas: ${missingProps.join(', ')}`);
        const returnValue = new ErrorResponse({ message: error.message, error });
        const statusCode = StatusCodes.BAD_REQUEST;
        return res.status(statusCode).json(returnValue);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

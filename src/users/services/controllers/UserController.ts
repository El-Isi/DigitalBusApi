import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import DataResponse from '../../../utils/responses/DataResponse';
import ErrorResponse from '../../../utils/errors/ErrorResponse';

import IUser from '../../model/interfaces/IUser';
import CreateUserUseCase from '../../useCases/users/CreateUserUseCase';
import FindByEmailUserUseCase from '../../useCases/users/FindByEmailUserUseCase';
import FindOneUserUseCase from '../../useCases/users/FindOneUserUseCase';
import FindManyUserUseCase from '../../useCases/users/FindManyUserUseCase';

export default class UserController {
  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const item: IUser = req.body as IUser;
      const createUserUseCase = new CreateUserUseCase();
      const user = await createUserUseCase.exec(item);
      const returnValue = new DataResponse({ ...user });
      return res.status(StatusCodes.CREATED).json(returnValue);
    }
    catch (e) {
      const returnValue = new ErrorResponse({ message: e.message, error: e });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(returnValue);
    }
  }

  async getUserByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.params;
      const emailNormalize = email.toLowerCase();
      const findByEmailUserUseCase = new FindByEmailUserUseCase();
      const user = await findByEmailUserUseCase.exec(emailNormalize);
      const returnValue = new DataResponse({ ...user });
      return res.status(StatusCodes.OK).json(returnValue);
    } catch (e) {
      const returnValue = new ErrorResponse({ message: e.message, error: e });
      return res.status(StatusCodes.NOT_FOUND).json(returnValue);
    }
  }

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      console.log(id);
      const findOneUserUseCase = new FindOneUserUseCase();
      const user = await findOneUserUseCase.exec({ _id: id });
      console.log(user);
      const returnValue = new DataResponse({ ...user });
      return res.status(StatusCodes.OK).json(returnValue);
    } catch (e) {
      const returnValue = new ErrorResponse({ message: e.message, error: e });
      return res.status(StatusCodes.NOT_FOUND).json(returnValue);
    }
  }

  async getUserByCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const { company } = req.params;
      const findManyUserUseCase = new FindManyUserUseCase();
      const user = await findManyUserUseCase.exec({ company });
      const returnValue = new DataResponse([ ...user ]);
      return res.status(StatusCodes.OK).json(returnValue);
    } catch (e) {
      const returnValue = new ErrorResponse({ message: e.message, error: e });
      return res.status(StatusCodes.NOT_FOUND).json(returnValue);
    }
  }
}

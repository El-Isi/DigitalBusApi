import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import DataResponse from '../../../utils/responses/DataResponse';
import ErrorResponse from '../../../utils/errors/ErrorResponse';

import CreateRoleUseCase from '../../useCases/roles/CreateRoleUseCase';
import IRole from '../../model/interfaces/IRole';

export default class RoleController {
  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const item: IRole = req.body as IRole;
      console.log('item', item);
      const createRoleUseCase = new CreateRoleUseCase();
      const role = await createRoleUseCase.exec(item);
      const returnValue = new DataResponse({ role });
      return res.status(StatusCodes.CREATED).json(returnValue);
    }
    catch (e) {
      const returnValue = new ErrorResponse({ message: e.message, error: e });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(returnValue);
    }
  }
}

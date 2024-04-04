import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import DataResponse from '../../../utils/responses/DataResponse';
import ErrorResponse from '../../../utils/errors/ErrorResponse';
import IService from '../../model/interfaces/IService';
import CreateTemplateUseCase from '../../useCases/CreateServicesUseCase';

export default class ServiceController {
  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const item: IService = req.body as IService;
      const createTemplateUseCase = new CreateTemplateUseCase();
      const service = await createTemplateUseCase.exec(item);
      const returnValue = new DataResponse({ service });
      return res.status(StatusCodes.CREATED).json(returnValue);
    }
    catch (e) {
      const returnValue = new ErrorResponse({ message: e.message, error: e });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(returnValue);
    }
  }
}

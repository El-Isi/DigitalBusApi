import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import DataResponse from '../../../utils/responses/DataResponse';
import ErrorResponse from '../../../utils/errors/ErrorResponse';
import ITemplate from '../../model/interfaces/ITemplate';
import CreateTemplateUseCase from '../../useCases/templates/CreateTemplateUseCase';

export default class TemplateController {
  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const item: ITemplate = req.body as ITemplate;
      const createTemplateUseCase = new CreateTemplateUseCase();
      const template = await createTemplateUseCase.exec(item);
      const returnValue = new DataResponse({ template });
      return res.status(StatusCodes.CREATED).json(returnValue);
    }
    catch (e) {
      const returnValue = new ErrorResponse({ message: e.message, error: e });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(returnValue);
    }
  }

}
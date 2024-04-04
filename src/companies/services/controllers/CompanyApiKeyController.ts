import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import DataResponse from '../../../utils/responses/DataResponse';
import ErrorResponse from '../../../utils/errors/ErrorResponse';

import ICompanyApiKey from '../../model/interfaces/ICompanyApiKey';
import CreateApiKeyUseCase from '../../useCases/companyApiKeys/CreateApiKeyUseCase';

export default class CompanyApiKeyController {
  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const { company, name }: ICompanyApiKey = req.body as ICompanyApiKey;
      const createApiKeyUseCase = new CreateApiKeyUseCase();
      const companyApiKey = await createApiKeyUseCase.exec(company, name);
      const returnValue = new DataResponse({ companyApiKey });
      return res.status(StatusCodes.CREATED).json(returnValue);
    }
    catch (e) {
      const returnValue = new ErrorResponse({ message: e.message, error: e });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(returnValue);
    }
  }
}

import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import DataResponse from '../../../utils/responses/DataResponse';
import ErrorResponse from '../../../utils/errors/ErrorResponse';
import ICompany from '../../model/interfaces/ICompany';
import CreateCompanyUseCase from '../../useCases/companies/CreateCompanyUseCase';

export default class CompanyController {
  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const item: ICompany = req.body as ICompany;
      const createCompanyUseCase = new CreateCompanyUseCase();
      const company = await createCompanyUseCase.exec(item);
      const returnValue = new DataResponse({ company });
      return res.status(StatusCodes.CREATED).json(returnValue);
    }
    catch (e) {
      const returnValue = new ErrorResponse({ message: e.message, error: e });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(returnValue);
    }
  }
}

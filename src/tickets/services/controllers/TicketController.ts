import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import DataResponse from '../../../utils/responses/DataResponse';
import ErrorResponse from '../../../utils/errors/ErrorResponse';

import CreateTicketUseCase from '../../useCases/tickets/CreateTicketUseCase';
import ITicketRequest from '../../model/interfaces/ITicketRequest';

export default class TicketController {
  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const item: ITicketRequest = req.body as ITicketRequest;
      const createTicketUseCase = new CreateTicketUseCase();
      const ticket = await createTicketUseCase.exec(item);
      const returnValue = new DataResponse({ ticket });
      return res.status(StatusCodes.CREATED).json(returnValue);
    }
    catch (e) {
      const returnValue = new ErrorResponse({ message: e.message, error: e });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(returnValue);
    }
  }
}
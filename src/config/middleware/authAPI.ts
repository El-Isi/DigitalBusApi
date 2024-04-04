import { Response, NextFunction } from 'express';
import ApiKeyExpiredError from '../../companies/useCases/companyApiKeys/errors/ApiKeyExpiredError';
import FindByCompanyAndIdUseCase from '../../companies/useCases/companyApiKeys/FindByCompanyAndIdUseCase';
import * as bcrypt from '../../utils/bcrypt';
require('../../utils/config');

export const authApi = () => async (req: any, res: Response, next: NextFunction) => {
  try {
    const findByCompanyAndIdUseCase = new FindByCompanyAndIdUseCase();
    const { headers } = req;
    const {
      'company-id': companyId,
      'company-api-key': clientApiKey,
      'api-key': apiKeyHeader,
    } = headers;
    const { _id: companyApiKeyId, apiKey: apiKeyHash, company: companyData, active } = await findByCompanyAndIdUseCase.exec(companyId, clientApiKey);
    const { _id: companyDataId } = companyData as any;
    req['payload'] = {
      validator: {
        companyId,
        companyApiKey: companyApiKeyId,
      }
    };
    
    if (companyDataId.toString() === companyId.toString() && await bcrypt.compare(apiKeyHeader, apiKeyHash) && active) {
      next();
    } else {
      throw new ApiKeyExpiredError();
    }
  } catch (error) {
    next(error);
  }
};

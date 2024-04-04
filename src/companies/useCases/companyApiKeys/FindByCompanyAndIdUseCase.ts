import CompanyApiKeyRepository from '../../repository/CompanyApiKeyRepository';
import ICompanyApiKeyModel from '../../model/ICompanyApiKeyModel';
import ApiKeyNotFoundError from './errors/ApiKeyNotValidError';

class FindByClientAndIdUseCase {
  async exec(company: string, companyApiKey: string): Promise<ICompanyApiKeyModel> {
      const companyApiKeyRepository = new CompanyApiKeyRepository();
      const companyApiKeyFound = await companyApiKeyRepository.findOne({ company, _id: companyApiKey });
      if(!companyApiKeyFound) throw new ApiKeyNotFoundError();
      return companyApiKeyFound;
  }
}

export default FindByClientAndIdUseCase;

import ICompany from '../../model/interfaces/ICompany';
import CompanyRepository from '../../repository/CompanyRepository';

class CreateCompanyUseCase {
  async exec(company: ICompany) {
    const companyRepository = new CompanyRepository();
    const companyCreated = await companyRepository.create(company);
    return companyCreated;
  }
}

export default CreateCompanyUseCase;

import { v4 as uuidv4 } from 'uuid';
import ICompanyApiKey from '../../model/interfaces/ICompanyApiKey';
import CompanyApiKeyRepository from '../../repository/CompanyApiKeyRepository';
import * as bcrypt from '../../../utils/bcrypt';
import removeAccents from 'remove-accents';

class CreateCompanyApiKeyUseCase {
  private async findCompanyApiKey(company: string) {
    const companyApiKeyRepository = new CompanyApiKeyRepository();
    const companyFounded = await companyApiKeyRepository.findOne({ company });
    return !companyFounded;
  }

  private async hashApiKey (apyKey: string): Promise<string> {
    const hash = await bcrypt.encrypt(apyKey);
    return hash;
  }

  sanitizeString(name) {
    const newString = name
      .toLowerCase()
      .trim()
      .replace(/\s\s+/g, ' ');
    return removeAccents.remove(newString);
  };

  async exec(company: string, name: string) {
    const existCompanyApiKey = await this.findCompanyApiKey(company);
    if (!existCompanyApiKey) {
      throw new Error('Esta compañia ya tiene apikey');
    }

    const uid = uuidv4();
    const dateNextYear = new Date();
    const apiKeyHashed = await this.hashApiKey(uid);
    dateNextYear.setFullYear(dateNextYear.getFullYear() + 1);

    const companyApiKeyRepository = new CompanyApiKeyRepository();
    const _companyApiKey = {
      apiKey: apiKeyHashed,
      apiKeyPrefix: uid.substring(0, 7),
      name,
      normalizedName: this.sanitizeString(name),
      company: company,
      active: true,
      expiration: dateNextYear,
    } as ICompanyApiKey;

    const companyCreated = await companyApiKeyRepository.create(_companyApiKey);
    return {
      _id: companyCreated._id,
      active: companyCreated.active,
      expiration: companyCreated.expiration,
      company: companyCreated.company,
      apiKey: uid
    };
  }
}

export default CreateCompanyApiKeyUseCase;

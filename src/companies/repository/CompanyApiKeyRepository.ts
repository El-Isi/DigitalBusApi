import ICompanyApiKey from '../model/interfaces/ICompanyApiKey';
import ICompanyApiKeyModel from '../model/ICompanyApiKeyModel';
import CompanyApiKeySchema from '../dataAccess/CompanyApiKeySchema';

export default class CompanyApiKeyRepository {
  create(companyApiKey: ICompanyApiKey): Promise<ICompanyApiKeyModel> {
    const companyApiKeySchema = new CompanyApiKeySchema(companyApiKey);
    return companyApiKeySchema.save();
  }

  find(query: object = {}): Promise<ICompanyApiKeyModel[]> {
    return CompanyApiKeySchema.find(query).exec();
  }

  findOne(query: object = {}): Promise<ICompanyApiKeyModel | null> {
    return CompanyApiKeySchema.findOne(query).exec();
  }

  findById(id: string): Promise<ICompanyApiKeyModel | null> {
    return CompanyApiKeySchema.findById(id).exec();
  }

  update(id: string, item: ICompanyApiKey): Promise<ICompanyApiKeyModel | null> {
    return CompanyApiKeySchema.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  delete(id: string): Promise<ICompanyApiKeyModel | null> {
    return CompanyApiKeySchema.findByIdAndDelete(id).exec();
  }
}

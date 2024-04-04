import ICompany from '../model/interfaces/ICompany';
import ICompanyModel from '../model/ICompanyModel';
import CompanySchema from '../dataAccess/CompanySchema';

export default class CompanyRepository {
  create(company: ICompany): Promise<ICompanyModel> {
    const companySchema = new CompanySchema(company);
    return companySchema.save();
  }

  find(query: object = {}): Promise<ICompanyModel[]> {
    return CompanySchema.find(query).exec();
  }

  findOne(query: object = {}): Promise<ICompanyModel | null> {
    return CompanySchema.findOne(query).exec();
  }

  findById(id: string): Promise<ICompanyModel | null> {
    return CompanySchema.findById(id).exec();
  }

  update(id: string, item: ICompany): Promise<ICompanyModel | null> {
    return CompanySchema.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  delete(id: string): Promise<ICompanyModel | null> {
    return CompanySchema.findByIdAndDelete(id).exec();
  }
}

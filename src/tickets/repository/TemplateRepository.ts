import TemplateSchema from '../dataAccess/TemplateSchema';
import ITemplateModel from '../model/ITemplateModel';
import ITemplate from '../model/interfaces/ITemplate';

export default class TemplateRepository {
  create(template: ITemplate): Promise<ITemplateModel> {
    const newTicket = new TemplateSchema(template);
    return newTicket.save();
  }

  find(query: object = {}): Promise<ITemplateModel[]> {
    return TemplateSchema.find(query).exec();
  }

  findOne(query: object = {}): Promise<ITemplateModel | null> {
    return TemplateSchema.findOne(query).exec();
  }

  findById(id: string): Promise<ITemplateModel | null> {
    return TemplateSchema.findById(id).exec();
  }

  update(id: string, item: ITemplate): Promise<ITemplateModel | null> {
    return TemplateSchema.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  delete(id: string): Promise<ITemplateModel | null> {
    return TemplateSchema.findByIdAndDelete(id).exec();
  }
}
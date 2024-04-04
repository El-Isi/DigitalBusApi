import ITemplate from '../../model/interfaces/ITemplate';
import TemplateRepository from '../../repository/TemplateRepository';

class CreateTemplateUseCase {
  async exec(template: ITemplate) {
    const templateRepository = new TemplateRepository();
    const bufferFromBase64 = Buffer.from(template.pdf, 'base64');
    const templateCreated = await templateRepository.create({ ...template, pdf: bufferFromBase64 });
    return templateCreated;
  }
}

export default CreateTemplateUseCase;

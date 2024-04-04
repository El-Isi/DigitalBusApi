import TemplateRepository from '../../repository/TemplateRepository';

class GetActiveTemplateUseCase {
  async exec() {
    const templateRepository = new TemplateRepository();
    const templateCreated = await templateRepository.findOne({ active: true });
    return templateCreated;
  }
}

export default GetActiveTemplateUseCase;

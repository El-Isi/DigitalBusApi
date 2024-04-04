import Joi from 'joi';
import EmailStrategy from './EmailStrategy';

class SendEmail {
  private async validateInput(input): Promise<any> {
    const AttachmentSchema = Joi.object({
      filename: Joi.string().required(),
      content: Joi.string().required(),
      type: Joi.string().required(),
      disposition: Joi.string().optional(),
    });

    const SchemaValidator = Joi.object({
      to: Joi.string().email().required(),
      from: Joi.string().email().required(),
      subject: Joi.string().required(),
      text: Joi.string().optional(),
      html: Joi.string().optional(),
      attachments: Joi.array().items(AttachmentSchema).optional(),
    });

    const request = await SchemaValidator.validateAsync(input);
    return request;
  }
  
  async exec(params): Promise<any> {
    const input = await this.validateInput(params);
    const emailStrategy = new EmailStrategy();
    const response = await emailStrategy.exec(input);
    return response;
  }
}

export default SendEmail;

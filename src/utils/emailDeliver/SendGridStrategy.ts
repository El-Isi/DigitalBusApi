import sgMail from '@sendgrid/mail';
import IEmail from './intefaces/IEmail';
import IEmailStrategy from './intefaces/IEmailStrategy';

class SendGridStrategy implements IEmailStrategy {
  private opts = {};

  constructor(private readonly sendgridApiKey: string) {
    sgMail.setApiKey(sendgridApiKey);

    const opts = {};

    this.opts = opts;
  }
  async sendEmail(email: IEmail): Promise<any> {
    const response = await sgMail.send({ ...email, ...this.opts });
    return response;
  }
}

export default SendGridStrategy;
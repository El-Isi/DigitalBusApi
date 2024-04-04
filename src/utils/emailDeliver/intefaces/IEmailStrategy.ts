import IEmail from './IEmail';

interface IEmailStrategy {
  sendEmail(email: IEmail): Promise<any>;
}

export default IEmailStrategy;

import IEmail from './intefaces/IEmail';
import IEmailStrategy from './intefaces/IEmailStrategy';

class EmailContext {
  private strategy: IEmailStrategy;

  constructor(strategy?: IEmailStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: IEmailStrategy) {
    this.strategy = strategy;
  }

  async execStrategy(email: IEmail): Promise<any> {
    const response = await this.strategy.sendEmail(email);
    return response;
  }
}

export default EmailContext;

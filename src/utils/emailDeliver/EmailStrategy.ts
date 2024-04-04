import normalizeEmail from 'normalize-email';
import IEmail from './intefaces/IEmail';
import EmailContext from './EmailContext';
import SendGridStrategy  from './SendGridStrategy';
import getEmailDomain from './GetEmailDomain';

class EmailStrategy {
  exec(emailParams: IEmail): Promise<any> {
    const EmailFrom = normalizeEmail(emailParams.from);
    const emailDomain = getEmailDomain(EmailFrom);
    const emailContext = new EmailContext();

    switch (emailDomain) {    
      case 'gmail':
      default:
        emailContext.setStrategy(new SendGridStrategy(process.env.DEFAULT_SENDGRID_API_KEY))
        break;
    }

    return emailContext.execStrategy(emailParams);
  }
}

export default EmailStrategy;

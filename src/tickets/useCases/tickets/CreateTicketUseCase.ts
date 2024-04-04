import IClientModel from '../../../clients/model/IClientModel';
import CreateClientUseCase from '../../../clients/useCases/CreateClientUseCase';
import SendEmail from '../../../utils/emailDeliver/SendEmail';
import FillPdfUseCase from '../../../utils/pdfGenerator/FillPdfUseCase';
import IOSPassGenerator from '../../../utils/ticketGenerator/IOS/ticketIOS';
import ITicket from '../../model/interfaces/ITicket';
import ITicketRequest from '../../model/interfaces/ITicketRequest';
import TicketRepository from '../../repository/TicketRepository';
import fs from 'fs';

class CreateTicketUseCase {
  async getClient(ticket: ITicketRequest): Promise<IClientModel> {
    const createClientUseCase = new CreateClientUseCase();
    const { firstName, secondName, lastName, secondLastName, email, phone } = ticket;
    const client = await createClientUseCase.exec({
      firstName,
      secondName,
      lastName,
      secondLastName,
      email,
      phone,
    });
    return client;
  }

  async getPdf(ticket: ITicketRequest, client: IClientModel): Promise<any> {
    const { fullName } = client;
    const fillPdfUseCase = new FillPdfUseCase();
    const pdf = await fillPdfUseCase.exec({ ...ticket, fullName });
    return pdf;
  }

  getExternalId(ticket: ITicketRequest): string {
    return ticket.externalId;
  }

  async getData(ticket: ITicketRequest) {
    return ticket;
  }

  async getIosPKPass(ticket: ITicketRequest): Promise<any> {
    const { externalId } = ticket;
    const iosPassGenerator = new IOSPassGenerator();
    return await iosPassGenerator.generatePass({ externalId });
  }

  async getGooglePass(ticket: ITicketRequest): Promise<any> {
    const { externalId } = ticket;
    // return await createGooglePass(externalId);
  }

  async formatData(ticket: ITicketRequest) {
    const client = await this.getClient(ticket);
    const pdf = await this.getPdf(ticket, client);
    const externalId = this.getExternalId(ticket);
    const travelData = await this.getData(ticket);
    const iosTicket = await this.getIosPKPass(ticket);
    return {
      client: client._id,
      pdf,
      iosTicket,
      data: travelData,
      externalId,
    }
  }

  async sendTicketByEmail(ticket: ITicket, email: string, iosPass: string) {
    const sendEmail = new SendEmail();
    const { pdf } = ticket;
    const TEMPLATE_PATH = `${__dirname}/templates/sendTicketTemplate.html`;
    const html = fs.readFileSync(TEMPLATE_PATH, 'utf8');


    const pdfBuffer: Buffer = Buffer.from(pdf, 'base64');
    const iosPassBuffer: Buffer = Buffer.from(iosPass, 'base64');
    const attachments = [{
      filename: `paseDeAbordar.pdf`,
      content: pdfBuffer.toString('base64'),
      type: 'application/pdf',
      disposition: 'attachment'
    },
    {
      filename: 'pase.pkpass',
      content: iosPassBuffer.toString('base64'),
      type: 'application/vnd.apple.pkpass',
      disposition: 'attachment'
    }];
    
    const htmlReplaced = html.replace('${URL_PARA_APPLE_WALLET}', './pase.pkpass');
    const emailData = {
      to: email,
      from: 'isidro.f.gonzalez@gmail.com',
      subject: 'Pase de abordar',
      text: "and easy to do anywhere, even with Node.js",
      html: htmlReplaced,
      attachments,
    };
    await sendEmail.exec(emailData);
  };

  async exec(ticket: ITicketRequest) {
    const { client, pdf, iosTicket, data, externalId } = await this.formatData(ticket);
    const ticketRepository = new TicketRepository();
    const _ticket = {
      client,
      pdf,
      iosTicket,
      data,
      externalId,
    } as ITicket;
    const ticketCreated = await ticketRepository.create(_ticket);
    await this.sendTicketByEmail(ticketCreated, ticket.email, iosTicket);
    return ticketCreated;
  }
}

export default CreateTicketUseCase;

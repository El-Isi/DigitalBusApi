interface ITicketRequest {
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  email: string;
  phone: string;
  origin: string;
  destination: string;
  gate: string;
  seat: string;
  service: string;
  class: string;
  departureDate: string;
  departureTime: string;
  externalId: string;
}

export default ITicketRequest;

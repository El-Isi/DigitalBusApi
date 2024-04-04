interface IClient {
  firstName: string;
  secondName?: string;
  lastName: string;
  secondLastName: string;
  fullName?: string;
  email: string;
  phone: string;
  normalizedFullName?: string;
}

export default IClient;

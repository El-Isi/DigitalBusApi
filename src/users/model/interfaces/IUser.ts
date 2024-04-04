interface IUser {
  email: string;
  firstName: string;
  secondName?: string;
  lastName: string;
  secondLastName: string;
  company: string;
  phone: string;
  password: string;
  role: string;
  active: boolean;
  normalizedFullName: string;
}

export default IUser;

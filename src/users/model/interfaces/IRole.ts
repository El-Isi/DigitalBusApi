interface IRole {
  name: string;
  permissions: Array<Object>;
  company: string;
  use?: string;
}

export default IRole;

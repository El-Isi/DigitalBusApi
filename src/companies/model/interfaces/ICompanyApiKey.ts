interface IService {
  name: string;
  normalizedName: string;
  company: string;
  active: boolean;
  apiKey: string;
  apiKeyPrefix: string;
  expiration: Date;
}

export default IService;

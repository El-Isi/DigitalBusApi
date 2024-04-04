interface ITemplateRequest {
  pdf: Buffer;
  version: string;
  coordinates: Array<any>;
  config: any;
  active: boolean;
}

export default ITemplateRequest;

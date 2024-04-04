export default interface IPayload {
  jti: string;
  id: string;
  exp: number;
  iat?: number;
}

import IUserModel from '../../model/IUserModel';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import IUserLogged from '../../model/interfaces/IUserLogged';

const DAYS = 30;
const SCALE = 1000;
const BASE = 10;

export default class JWTUserUseCase {
  private generateExpirationDate(days = DAYS): Number {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + days);
    return parseInt(String(expirationDate.getTime() / SCALE), BASE);
  }

  generateJWT(user: IUserModel, days: number = DAYS): Object {
    const expirationDate = this.generateExpirationDate(days);
    const { JWT_SECRET } = process.env;
    const { _id: id, email, firstName, lastName, company } = user;
    const { _id: companyId } = company as any;
    const uid = uuidv4();

    return jwt.sign(
      {
        jti: `${id}:${uid}`,
        id,
        exp: expirationDate,
        validator: {
          id,
          company: companyId,
          email,
          firstName,
          lastName
        }
      },
      JWT_SECRET
    );
  }


  private toAuthJSON(user: IUserModel): IUserLogged {
    return {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      company: user.company,
      role: user.role,
      token: this.generateJWT(user)
    };
  }

  exec(user: IUserModel): IUserLogged {
    return this.toAuthJSON(user);
  }
}

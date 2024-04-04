import IRoleModel from '../model/IRoleModel';
import IRole from '../model/interfaces/IRole';
import RoleSchema from '../dataAccess/RoleSchema';

export default class RoleRepository {
  create(role: IRole): Promise<IRoleModel> {
    const newRole = new RoleSchema(role);
    return newRole.save();
  }

  find(query: object = {}): Promise<IRoleModel[]> {
    return RoleSchema.find(query).exec();
  }

  findOne(query: object = {}): Promise<IRoleModel | null> {
    return RoleSchema.findOne(query).exec();
  }

  findById(id: string): Promise<IRoleModel | null> {
    return RoleSchema.findById(id).exec();
  }

  update(id: string, item: IRole): Promise<IRoleModel | null> {
    return RoleSchema.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  delete(id: string): Promise<IRoleModel | null> {
    return RoleSchema.findByIdAndDelete(id).exec();
  }
}

import RoleRepository from '../../repository/RoleRepository';
import IRole from '../../model/interfaces/IRole';

class CreateRoleUseCase {
  async exec(role: IRole) {
    const name = role.name;
    const permissions = role.permissions;
    const company = role.company;
    const use = role.use;
    const roleRepository = new RoleRepository();

    const _role = {
      name,
      permissions,
      company,
      use,
    } as IRole;

    const roleCreated = await roleRepository.create(_role);
    return roleCreated;
  }
}

export default CreateRoleUseCase;

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("The user does not exist.");
    }

    if (!user.admin) {
      throw new Error("The user does not have access to this operation.");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };

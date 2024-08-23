import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private repo: typeof User,
  ) {}

  async add(dto: CreateUserDto): Promise<User> {
    // encrypt
    dto.password = dto.password;

    return this.repo.create(dto as any);
  }

  async get(id: string): Promise<User> {
    return this.repo.findByPk(id);
  }

  async getByName(name: string): Promise<User> {
    return this.repo.findOne({ where: { name } });
  }
}

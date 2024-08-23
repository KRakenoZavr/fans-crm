import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn({
    name,
    password,
  }: SignInDto): Promise<{ access_token: string }> {
    const user = await this.usersService.getByName(name);

    if (user.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, name: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

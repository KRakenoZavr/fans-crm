import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { cfg } from 'src/cfg/constants';
import { User } from 'src/users/entities/users.entity';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    User,
    JwtModule.register({
      global: true,
      secret: cfg.jwtSecret,
      signOptions: { expiresIn: '30m' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}

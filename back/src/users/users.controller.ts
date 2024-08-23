import { Body, Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post('add')
  create(@Body() dto: CreateUserDto) {
    return this.service.add(dto);
  }

  @UseGuards(AuthGuard)
  @Get('get/:id')
  get(@Param() id: string) {
    return this.service.get(id);
  }
}

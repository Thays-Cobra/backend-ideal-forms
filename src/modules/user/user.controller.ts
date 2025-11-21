import { Controller, Get, Inject } from '@nestjs/common';
import type { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    @Inject('UserService')
    private userService: UserService,
  ) {}

  @Get('/findById')
  findById() {
    return this.userService.findById();
  }
}

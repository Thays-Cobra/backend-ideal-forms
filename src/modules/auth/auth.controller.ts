import { Controller, Inject, Post } from '@nestjs/common';
import type { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AuthService')
    private authService: AuthService,
  ) {}

  @Post('/login')
  getLogin(): string {
    return this.authService.getLogin();
  }
}

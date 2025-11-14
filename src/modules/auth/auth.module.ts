import { Module } from '@nestjs/common';
import { AuthController } from 'src/modules/auth/auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [{ provide: 'AuthService', useClass: AuthService }],
})
export class AuthModule {}

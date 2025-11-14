import { Controller, Get, Inject } from '@nestjs/common';
import type { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('AppService')
    private appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getTest(): string {
    return 'Olá mundo';
  }
}

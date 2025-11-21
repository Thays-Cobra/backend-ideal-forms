import { Injectable } from '@nestjs/common';

//@Injectable() = decorator que marca a classe AppService como "injetável", que significa que pode ser usada pelo sistema de injeção de dependências do Nestjs
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

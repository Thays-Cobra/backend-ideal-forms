import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findById(): { name: string; email: string } {
    return {
      name: 'Jade',
      email: 'jade@dev.com',
    };
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(numer: number): any {
    const users: Array<number> = [];
    for (let i = 0; i < numer; i++) {
      users.push(i);
    }
    return {
      code: 0,
      users: users,
      message: 'success',
    };
  }
}

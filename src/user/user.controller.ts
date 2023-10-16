import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get(':id')
  getUsers(@Param('id') id: number): any {
    return this.userService.getUsers(id);
  }
}

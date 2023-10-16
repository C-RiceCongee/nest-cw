import {Controller, Get, Param} from '@nestjs/common';
import {UserService} from './user.service';
import {ConfigService} from '@nestjs/config';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
        private configService: ConfigService,
    ) {
    }

    @Get(":num")
    getUsers(@Param() num: number): any {
        console.log(this.configService.get('db'));
        console.log(this.configService.get('app'));
        return this.userService.getUsers(num);
    }
}

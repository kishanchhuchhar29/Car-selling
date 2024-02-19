import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {
    @Post('/singup')
      CreateUser(@Body() body:CreateUserDto){
         console.log(body)
      }
      
}

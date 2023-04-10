import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from 'src/dtos/user.dto';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(
    @Body()
    body: UserDto,
  ) {
    return this.authService.signup(body);
  }

  @Post('login')
  login(
    @Body()
    body: UserDto,
  ) {
    return this.authService.signin(body);
  }
}

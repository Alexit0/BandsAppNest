import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

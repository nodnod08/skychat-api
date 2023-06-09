import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class AuthUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class AuthReturnDto {
  accessToken: string;
  refreshToken: string;
}

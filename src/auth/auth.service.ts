import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

interface User {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  async signup({ email, password }: User) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const userExists = await this.userRepository.findOneBy({ email });

    if (userExists) {
      throw new BadRequestException('User with this email already registered.');
    }
    const user = this.userRepository.create({
      email,
      password: hashedPassword,
    });

    const payload = {
      userEmail: user.email,
      userId: user.id,
    };

    await this.userRepository.save(user);
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signin({ email, password }: User) {
    const user = await this.userRepository.findOneBy({ email });
    if (!user) {
      throw new BadRequestException('Please check your email or password');
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Please check your email or password');
    }

    const payload = {
      userEmail: user.email,
      userId: user.id,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

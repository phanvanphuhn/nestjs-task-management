// auth.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: UserRepository,
      inject: [getDataSourceToken()],
      useFactory: (dataSource: DataSource) => {
        const repo = dataSource.getRepository(User);
        return new UserRepository(repo);
      },
    },
  ],
})
export class AuthModule {}

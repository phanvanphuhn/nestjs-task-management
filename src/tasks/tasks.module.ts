import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { TaskService } from './tasks.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Task]), AuthModule],
  controllers: [TasksController],
  providers: [TaskService, TaskRepository],
  exports: [TaskRepository],
})
export class TasksModule {}

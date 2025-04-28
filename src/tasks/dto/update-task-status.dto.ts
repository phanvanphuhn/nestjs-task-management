/* eslint-disable @typescript-eslint/no-unsafe-call */
import { TaskStatus } from '../task-status.enum';
import { IsEnum } from 'class-validator';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}

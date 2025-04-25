/* eslint-disable @typescript-eslint/no-unsafe-call */
import 'reflect-metadata';

import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}

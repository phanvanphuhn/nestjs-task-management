import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';
export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().geRequest();
    return req.user;
  },
);

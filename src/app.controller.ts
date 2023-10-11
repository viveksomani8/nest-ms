import { Controller } from '@nestjs/common';
import { MessagePattern , Payload, Ctx, RedisContext } from '@nestjs/microservices';
import { from, Observable } from 'rxjs';
@Controller()
export class AppController {
  @MessagePattern('"greeting"_ack')
  getHello( @Payload() name: string, @Ctx() context: RedisContext): string {
	return `Hello ${name}!`;
  }
  @MessagePattern('"observable"_res' )
  getObservable( @Ctx() context: RedisContext): Observable<number> {
	return from([1, 2, 3]);
  }
}

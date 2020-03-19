import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!!';
  }

  getConta(): number{
    return 3 + 3;
  }

}

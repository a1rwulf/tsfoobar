import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly catsService: CatsService) {}

  @Get()
  async getHello(): Promise<string> {
    const test = await this.catsService.findAll();
    console.log(test);
    return this.appService.getHello();
  }
}

import { AppService } from './app.service';

import { Controller, Get } from '@nestjs/common';

@Controller()
export class TestController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): { name: string } {
    return { name: 'alexandre' };
  }
}

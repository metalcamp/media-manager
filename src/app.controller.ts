import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
import { ImportService } from './import.service';

@Controller()
export class AppController {
  constructor(private readonly importService: ImportService) {}

  @Get()
  async getHello(): Promise<string> {
    return JSON.stringify(await this.importService.importFromFile());
  }
}

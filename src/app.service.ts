import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from './config/database.config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    const dbConfig = this.configService.get<DatabaseConfig>('database');
    console.log(dbConfig);
    return 'Hello World!';
  }
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotEnvExtended from 'dotenv-extended';

dotEnvExtended.load({
  encoding: 'utf8',
  silent: true,
  path: '.env',
  // defaults: '.env.defaults',
  schema: '.env.schema',
  errorOnMissing: true,
  errorOnExtra: true,
  errorOnRegex: false,
  includeProcessEnv: false,
  assignToProcessEnv: true,
  overrideProcessEnv: false,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();

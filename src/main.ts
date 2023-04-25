import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('SERVER_PORT', 4000);

  app.enableCors({
    origin: true,
    credentials: true,
  });

  await app.listen(port);
  console.log(`Check out the app at http://localhost:${port}`);
}
bootstrap();

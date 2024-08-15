import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import MercuriusGQLUpload from 'mercurius-upload';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  await app.register(MercuriusGQLUpload, { maxFiles: 10 });
  const port = process.env.PORT || 3000;
  await app.listen(port, "0.0.0.0");
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}`
  );
}

bootstrap();

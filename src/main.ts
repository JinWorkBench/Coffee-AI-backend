import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Next.js(3000)에서 호출 허용
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // 3001 포트로 변경
  await app.listen(3001);
  console.log('Nest API on http://localhost:3001');
}
bootstrap();

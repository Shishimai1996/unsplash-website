import { Module } from '@nestjs/common';
import { PhotosModule } from './photos/photos.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PhotosModule,
  ],
})
export class AppModule {}

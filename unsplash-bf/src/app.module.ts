import { Module } from '@nestjs/common';
import { PhotosModule } from './photos/photos.module';
import { ConfigModule } from '@nestjs/config';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PhotosModule,
    SearchModule,
  ],
})
export class AppModule {}

import { Controller, Get, Param, Query } from '@nestjs/common';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}
  @Get()
  async getPhotos(
    @Query('page') page: number = 1,
    @Query('perPage') perPage: number = 10,
  ) {
    return this.photosService.getPhotoList(page, perPage);
  }

  @Get(':id/statistics')
  async getPhotosStatistics(@Param('id') id: string) {
    return this.photosService.getPhotoStatistics(id);
  }
}

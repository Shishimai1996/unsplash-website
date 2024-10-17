import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('collections')
  async getSearchPhotoList(
    @Query('query') query: string,
    @Query('page') page: number,
    @Query('perPage') perPage: number,
  ) {
    return this.searchService.getSearchPhotoList(query, page, perPage);
  }
}

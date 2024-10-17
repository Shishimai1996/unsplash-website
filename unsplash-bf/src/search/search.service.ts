import { Injectable } from '@nestjs/common';
import { createApi } from 'unsplash-js';
import fetch from 'node-fetch';

@Injectable()
export class SearchService {
  private unsplash;
  constructor() {
    this.initUnsplash();
  }
  private initUnsplash() {
    this.unsplash = createApi({
      accessKey: process.env.UNSPLASH_ACCESS_KEY,
      fetch: fetch as any,
    });
  }

  async getSearchPhotoList(query: string, page: number, perPage: number) {
    const result = await this.unsplash.search.getCollections({
      query,
      page,
      perPage,
    });

    if (result.errors) {
      throw new Error(result.errors.join(','));
    }
    console.log('response', result.response.result);
    return result.response.results;
  }
}

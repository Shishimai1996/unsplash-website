import { Injectable } from '@nestjs/common';
import { createApi } from 'unsplash-js';
import fetch from 'node-fetch';

@Injectable()
export class PhotosService {
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

  async getPhotoList(page: number, perPage: number) {
    const result = await this.unsplash.photos.list({ page, perPage });

    if (result.errors) {
      throw new Error(result.errors.join(','));
    }
    console.log('response', result.response.results);
    return result.response.results;
  }

  async getPhotoStatistics(id: string) {
    const result = await this.unsplash.photos.getStats({ photoId: id });

    if (result.errors) {
      throw new Error(result.errors.join(','));
    }
    console.log('response', result.response);
    return result.response;
  }
}

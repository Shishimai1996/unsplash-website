import axios from "axios";
import { makeAutoObservable } from "mobx";

type TImageUrls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

type TPhotoItem = {
  id: string;
  urls: TImageUrls;
  alt_description: string;
  width: number;
  height: number;
};

class PhotoStore {
  photo: TPhotoItem[] = [];
  page: number = 1;
  hasMore: boolean = true;
  photoAPI: string = `http://localhost:3001/photos`;
  searchPhoto: TPhotoItem[] = [];
  searchAPI: string = `http://localhost:3001/search/collections`;
  searchQuery: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  async getAllPhotos() {
    try {
      const response = await axios.get(this.photoAPI, {
        params: {
          page: this.page,
          perPage: 10,
        },
      });
      const newPhotos = response.data;

      if (newPhotos.length > 0) {
        this.photo = [...this.photo, ...newPhotos];
        this.page += 1;
      } else {
        //conform if the data from API is ended. if so, make it false. otherwise infinite load.
        this.hasMore = false;
      }
    } catch (error) {
      console.error("Error get all photos", error);
    }
  }

  async getSearchPhotos() {
    if (this.searchQuery === "") {
      this.searchPhoto = [];
      return;
    }
    try {
      const response = await axios.get(this.searchAPI, {
        params: {
          query: this.searchQuery,
          page: this.page,
          perPage: 10,
        },
      });
      const newSearchPhotos = response.data.map(
        (photo: {
          id: any;
          cover_photo: {
            urls: any;
            alt_description: any;
            width: any;
            height: any;
          };
        }) => ({
          id: photo.id,

          urls: photo.cover_photo.urls,
          alt_description: photo.cover_photo.alt_description,
          width: photo.cover_photo.width,
          height: photo.cover_photo.height,
        })
      );
      if (newSearchPhotos.length > 0) {
        this.searchPhoto = [...this.searchPhoto, ...newSearchPhotos];
        this.page += 1;
      } else {
        //conform if the data from API is ended. if so, make it false. otherwise infinite load.
        this.hasMore = false;
      }
    } catch (error) {
      console.error("Error get search photos", error);
    }
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
    this.page = 1;
    this.searchPhoto = [];
    this.hasMore = true;

    if (this.searchQuery === "") {
      this.getAllPhotos();
    } else {
      this.getSearchPhotos();
    }
  }

  get photosToShow() {
    return this.searchPhoto.length > 0 ? this.searchPhoto : this.photo;
  }
}

export const photoStore = new PhotoStore();

"use client";

import { Box } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import { Basic } from "unsplash-js/dist/methods/photos/types";

export const PhotoLibrary = () => {
  const [photos, setPhotos] = useState<Basic[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getPhotoList();
  }, []);
  const backend = `http://localhost:3001/photos`;
  const getPhotoList = async () => {
    try {
      const response = await axios.get(backend, {
        params: {
          page: page,
          perPage: 10,
        },
      });
      console.log("get photos", response.data);

      const newPhotos = response.data;
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
      setPage((prevPage) => prevPage + 1);

      //conform if the data is ended. if so, make it false
      if (newPhotos.length === 0 || newPhotos.length < 10) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error get photos", error);
    }
  };

  const breakpointColumnsObj = {
    default: 3, //normal display size: 3 columns
    1100: 2, // window width is less than 1100px
    700: 1,
  };
  return (
    <>
      <InfiniteScroll
        dataLength={photos.length}
        next={getPhotoList}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {photos.map((photo) => (
            <Box key={photo.id}>
              <Image
                src={photo.urls.small}
                alt={photo.alt_description || "Unsplash Image"}
                width={photo.width}
                height={photo.height}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Box>
          ))}
        </Masonry>
      </InfiniteScroll>
    </>
  );
};

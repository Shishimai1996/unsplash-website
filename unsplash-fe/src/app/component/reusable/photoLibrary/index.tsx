"use client";

import { photoStore } from "@/store/photoStore";
import { Box } from "@mui/material";
import { observer } from "mobx-react";
import Image from "next/image";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";

export const PhotoLibrary = observer(() => {
  useEffect(() => {
    photoStore.getAllPhotos();
  }, []);

  const breakpointColumnsObj = {
    default: 3, //normal display size: 3 columns
    1100: 2, // window width is less than 1100px
    700: 1,
  };
  return (
    <>
      <InfiniteScroll
        dataLength={photoStore.photosToShow.length}
        next={() =>
          photoStore.searchQuery === ""
            ? photoStore.getAllPhotos()
            : photoStore.getSearchPhotos()
        }
        hasMore={photoStore.hasMore}
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
          {photoStore.photosToShow.map((photo) => (
            <Box key={photo.id}>
              <Image
                src={photo.urls.regular}
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
});

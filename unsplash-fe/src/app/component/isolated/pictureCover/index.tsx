"useClient";

import { ActionButton } from "@/component/reusable/actionButton";
import { UserInfo } from "@/component/reusable/userInfo";
import { TPhotoItem, photoStore } from "@/store/photoStore";
import AddIcon from "@mui/icons-material/Add";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import { useState } from "react";
import { PhotoDetail } from "../photoDetail";
import { observer } from "mobx-react";

export const PictureCover: React.FC<{ photo: TPhotoItem }> = observer(
  ({ photo }) => {
    const [openDetail, setOpenDetail] = useState<boolean>(false);

    const handleOpenDetail = () => {
      const result = photoStore.getPhotosStatistics(photo.id);
      console.log(result);
      setOpenDetail(true);
    };

    const handleCloseDetail = () => {
      setOpenDetail(false);
    };

    const liked = photoStore.isLiked(photo.id || "");

    const handleLikeToggle = () => {
      photoStore.toggleLike(photo.id || "");
    };

    return (
      <>
        {openDetail && (
          <PhotoDetail
            openDetail={openDetail}
            handleCloseDetail={handleCloseDetail}
            photo={photo}
          />
        )}
        <Box
          className="hoverButton"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",

            opacity: 0,
            transition: "opacity 0.3s ease",
            bgcolor: "rgba(0, 0, 0, 0.163)",
            zIndex: 2,
            "&:hover": {
              opacity: 1,
            },
          }}
          onClick={handleOpenDetail}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              m: "3%",
            }}
          >
            <ActionButton
              icon={FavoriteIcon}
              title={"Like this image"}
              variant="text"
              liked={liked}
              activeFunction={handleLikeToggle}
            />
            <ActionButton
              icon={AddIcon}
              variant="text"
              title={"Add this image to the collection"}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              m: "3%",
            }}
          >
            <UserInfo
              photo={photo}
              color="#ffffff70"
              hoverColor="secondary.main"
            />
            <ActionButton icon={ArrowDownwardIcon} />
          </Box>
        </Box>
      </>
    );
  }
);

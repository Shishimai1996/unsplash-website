"use client";

import { ActionButton } from "@/component/reusable/actionButton";
import { UserInfo } from "@/component/reusable/userInfo";
import { TPhotoItem, photoStore } from "@/store/photoStore";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { observer } from "mobx-react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

export const PhotoDetail: React.FC<{
  openDetail: boolean;
  handleCloseDetail: () => void;
  photo: TPhotoItem;
}> = observer(({ openDetail, handleCloseDetail, photo }) => {
  useEffect(() => {
    if (photo.id) {
      photoStore.getPhotosStatistics(photo.id);
      photoStore.getPhoto(photo.id);
    }
  }, [photo.id]);

  const imageNumber = {
    Views: photoStore.photoStatistics?.views || 0,
    Downloads: photoStore.photoStatistics?.downloads || 0,
  };

  const liked = photoStore.isLiked(photo.id || "");

  const handleLikeToggle = () => {
    photoStore.toggleLike(photo.id || "");
  };

  return (
    <Dialog
      open={openDetail}
      onClose={handleCloseDetail}
      scroll={"body"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      sx={{ "& .MuiDialog-paper": { minWidth: "80%", minHeight: "90%" } }}
    >
      <DialogTitle id="scroll-dialog-title">
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <UserInfo
            photo={photo}
            color="primary.main"
            hoverColor="primary.main"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ActionButton
              icon={FavoriteIcon}
              borderColor={true}
              variant="outlined"
              liked={liked}
              activeFunction={handleLikeToggle}
            />
            <ActionButton
              icon={AddIcon}
              borderColor={true}
              variant="outlined"
            />
            <Button variant="outlined">Download</Button>
          </Box>
        </Stack>
      </DialogTitle>
      <DialogContent
        dividers={true}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Image
          src={photo.urls.regular}
          alt={photo.alt_description}
          width={1500}
          height={1500}
          style={{ width: "40%", height: "40%" }}
        />
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          {Object.entries(imageNumber).map(([key, value]) => (
            <Box
              key={key}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body2" color="secondary.dark">
                {key}
              </Typography>
              <Typography variant="h6">{value}</Typography>
            </Box>
          ))}
        </Box>
        <Box>
          <Button variant="outlined" onClick={handleCloseDetail}>
            <svg
              class="rb3jX"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              version="1.1"
              aria-hidden="false"
              style="flex-shrink: 0;"
            >
              <desc lang="en-US">A forward-right arrow</desc>
              <path d="M13 20v-5.5c-5.556 0-8.222 1-11 5.5C2 13.25 5.222 8.625 13 7.5V2l9 9-9 9Z"></path>
            </svg>
            <span>Share</span>
          </Button>
          <Button variant="outlined" onClick={handleCloseDetail}>
            Info
          </Button>
        </Box>
      </DialogActions>
      <LocationOnOutlinedIcon color="action" fontSize="small" />
      <CalendarTodayIcon color="action" fontSize="small" />
      <VerifiedUserOutlinedIcon color="action" fontSize="small" />
    </Dialog>
  );
});

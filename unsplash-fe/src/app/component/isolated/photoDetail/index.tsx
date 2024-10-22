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

export const PhotoDetail: React.FC<{
  openDetail: boolean;
  handleCloseDetail: () => void;
  photo: TPhotoItem;
}> = observer(({ openDetail, handleCloseDetail, photo }) => {
  useEffect(() => {
    if (photo.id) {
      photoStore.getPhotosStatistics(photo.id); // 修正
    }
  }, [photo.id]);

  const imageNumber = {
    Views: photoStore.photoStatistics?.views || 0, // デフォルト値
    Downloads: photoStore.photoStatistics?.downloads || 0, // デフォルト値
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
          style={{ width: "50%", height: "50%" }}
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
            Share
          </Button>
          <Button variant="outlined" onClick={handleCloseDetail}>
            Info
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
});

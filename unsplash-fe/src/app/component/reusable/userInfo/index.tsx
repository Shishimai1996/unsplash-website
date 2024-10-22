"useClient";

import { TPhotoItem } from "@/store/photoStore";
import { Avatar, Box, Typography } from "@mui/material";

export const UserInfo: React.FC<{
  photo: TPhotoItem;
  color: string;
  hoverColor: string;
}> = ({ photo, color, hoverColor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Avatar alt={photo.user.name} src={photo.user.profile_image.medium} />
      <Typography
        variant="h6"
        sx={{
          color: color,
          "&:hover": { color: hoverColor },
          transition: "color 0.3s ease",
        }}
      >
        {photo.user.name}
      </Typography>
    </Box>
  );
};

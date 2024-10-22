"useClient";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { photoStore } from "@/store/photoStore";
import { observer } from "mobx-react";

interface ActionButtonProps {
  icon: React.ElementType | string;
  title?: string;
  borderColor?: boolean;
  variant?: "text" | "outlined" | "contained";
  liked?: boolean;
  activeFunction?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ActionButton: React.FC<ActionButtonProps> = observer(
  ({ icon: Icon, title, borderColor, variant, liked, activeFunction }) => {
    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.preventDefault(); // Prevent default behavior if necessary
      e.stopPropagation(); // Prevent the event from bubbling up to the parent element
      if (activeFunction) {
        activeFunction(e); // Trigger the active function (e.g., handleLikeToggle)
      }
    };

    return (
      <Tooltip title={title} placement="bottom-end">
        <Button
          variant={variant}
          style={{
            backgroundColor:
              Icon === FavoriteIcon && liked ? "#e04c4c" : "#fff",
            borderColor: borderColor ? "#d1d1d1" : "transparent",
            borderStyle: borderColor ? "solid 1px" : "none",
            margin: "1%",
            width: 40,
            height: 32,
            paddingLeft: 0,
            paddingRight: 0,
            zIndex: 3,
            minWidth: "45px",
            opacity: 1,
            transition: "opacity 0.3s ease",
          }}
          className="ActionButton-root"
          sx={
            {
              // bgcolor:
              //   Icon === FavoriteIcon && liked
              //     ? "error.main !important"
              //     : "secondary.main ",
              // "&:hover": {
              // bgcolor:
              //   Icon === FavoriteIcon && liked
              //     ? "error.main !important"
              //     : "secondary.main !important",
              // },
            }
          }
          onClick={handleClick}
        >
          <Icon
            style={{
              fontSize: 18,
              color: Icon === FavoriteIcon && liked ? "#fff" : "#111",
            }}
          />
        </Button>
      </Tooltip>
    );
  }
);

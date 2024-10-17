"use client";

import { Box, Card, Grid2, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import cardImage from "@public/image/cardImage.avif";
import Image from "next/image";
import { SearchBar } from "../../reusable/searchBar";
import { AwardImage } from "../awardImage";

export const TitleCard = () => {
  const theme = useTheme();

  return (
    <Grid2 container spacing={2} alignItems={"flex-end"} m={5}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Box sx={{ width: 600 }}>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            sx={{
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                alignItems: "flex-start",
              },
            }}
          >
            <Box>
              <Typography variant="h1"> Unsplash</Typography>
              <Typography variant="body1">
                The internet's source for visuals.
              </Typography>
              <Typography variant="body1">
                Powered by creators everywhere.
              </Typography>
            </Box>

            <Typography variant="body2">Supported by SQUARESPACE</Typography>
            <SearchBar borderRadius={"10px"} height={"50px"} width={"100%"} />
          </Stack>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <Card
          sx={{
            bgcolor: "primary.main",
            width: "300px",
            height: "300px",
            position: "relative",
            [theme.breakpoints.down(1300)]: {
              display: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: 1,
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                overflow: "visible",
                width: "250px",
                height: "250px",
              }}
            >
              <AwardImage />
            </Box>
            <Box
              sx={{
                zIndex: 2,
                position: "absolute",
                minWidth: "240px",
              }}
            >
              <Typography variant="h6" color="secondary.main">
                Unsplash Awards 2024
              </Typography>
              <Typography variant="body1" color="secondary.main">
                Now accepting submissions to the 8th edition of the unsplash
                Awards 🏆
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <Card
          sx={{
            bgcolor: "primary.main",
            width: "300px",
            height: "300px",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          <Image src={cardImage} alt={"cardImage"} width={300} height={300} />
        </Card>
      </Grid2>
    </Grid2>
  );
};

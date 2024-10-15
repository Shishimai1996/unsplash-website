"use client";

import { SearchBar } from "../../reusable/searchBar";
import { Box, Card, Grid2, Stack, Typography } from "@mui/material";

export const TitleCard = () => {
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
            p: "30px",
          }}
        >
          <Typography variant="h6" color="secondary.main">
            Unsplash Awards 2024
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Now accepting submissions to the 8th edition of the unsplash Awards
          </Typography>
        </Card>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <Card
          sx={{
            bgcolor: "primary.main",
            width: "300px",
            height: "300px",
            p: "30px",
          }}
        />
      </Grid2>
    </Grid2>
  );
};

"use client";

import { photoStore } from "@/store/photoStore";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import debounce from "lodash/debounce";
import { observer } from "mobx-react";

export const SearchBar: React.FC<{
  borderRadius: string;
  height: string;
  width: string;
}> = observer(({ borderRadius, height, width }) => {
  const theme = useTheme();

  const debouncedSearch = debounce((query: string) => {
    photoStore.setSearchQuery(query);
  }, 100);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    debouncedSearch(query);
  };

  return (
    <Box
      sx={{
        bgcolor: "rgba(0, 0, 0, .05)",
        borderRadius: borderRadius,
        height: height,
        width: width,
        display: "flex",
        alignItems: "center",
        px: 2,
        [theme.breakpoints.down(650)]: {
          width: "60%",
        },
      }}
    >
      <IconButton sx={{ color: "secondary.dark" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search photos and illustrations"
        value={photoStore.searchQuery}
        onChange={handleSearchChange}
        sx={{ flex: 1, color: "secondary.dark" }}
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
});

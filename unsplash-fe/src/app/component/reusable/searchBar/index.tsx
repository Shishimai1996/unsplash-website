"use client";

import { Box, IconButton, InputBase, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const SearchBar: React.FC<{
  borderRadius: string;
  height: string;
  width: string;
}> = ({ borderRadius, height, width }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    console.log("Searching for:", searchQuery);
    // Perform the search or redirect to a search page with the query
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
      }}
    >
      <IconButton
        onClick={handleSearchSubmit}
        sx={{ color: "secondary.dark" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search photos and illustrations"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ flex: 1, color: "secondary.dark" }}
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
};

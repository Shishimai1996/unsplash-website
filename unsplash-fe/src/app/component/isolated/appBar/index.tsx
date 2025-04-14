"use client";

import { SearchBar } from "../../reusable/searchBar";
import { Box, Toolbar } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";

export const AppBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }} position="static">
      <Toolbar>
        <WidgetsIcon fontSize="large" sx={{ mr: "1%" }} />
        <SearchBar borderRadius={"50px"} height={"40px"} width={"60%"} />
      </Toolbar>
    </Box>
  );
};

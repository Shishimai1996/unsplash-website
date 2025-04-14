import { Box } from "@mui/material";
import { TitleCard } from "./component/isolated/titleCard";
import { PhotoLibrary } from "./component/reusable/photoLibrary";

export default function Home() {
  return (
    <Box>
      <main>
        <TitleCard />
        <PhotoLibrary />
      </main>
    </Box>
  );
}

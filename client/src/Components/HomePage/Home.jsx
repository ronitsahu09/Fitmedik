import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import { Stack, Box, Typography } from "@mui/material";
import { graphCanvas, homePage, middle } from "./Styles";
import ActiveUsers from "../ActiveUsers/ActiveUsers";

export default function Home() {
  return (
    <Stack sx={{ ...homePage }} direction="row">
      <LeftSidebar />

      <Stack sx={{ ...middle }}>
        <Typography variant="h3" component="div">
          Dashboard
        </Typography>
        Searchbar
        <Box sx={{ ...graphCanvas }}>
          <ActiveUsers />
        </Box>
      </Stack>

      <RightSidebar />
    </Stack>
  );
}

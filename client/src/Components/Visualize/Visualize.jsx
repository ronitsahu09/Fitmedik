import { Box, Stack, Typography } from "@mui/material";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import { middle, visualizeStyles } from "./Styles";

export default function Visualize() {
  return (
    <Stack sx={{ ...visualizeStyles }} direction="row">
      <LeftSidebar />

      <Stack sx={{ ...middle }}>
        <Typography variant="h3" component="div">
          Visualize
        </Typography>
      </Stack>

      <RightSidebar />
    </Stack>
  );
}

import { Box, Stack, Typography } from "@mui/material";
import { dot } from "./Styles";

export function Legend({ props }) {
  const { title, color } = props;

  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Box sx={{ ...dot, bgcolor: color }}></Box>
      <Typography
        component="div"
        sx={{
          color,
          fontSize: { xs: "0.9rem", lg: "1.2rem" },
          fontWeight: "500",
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
}

import { Box } from "@mui/material";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function ActiveUsers() {
  const [progress, setProgress] = useState(90);

  return (
    <Box
      sx={{
        width: "1.3in",
      }}
    >
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        circleRatio={0.75}
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          textColor: "#06b58c",
          trailColor: "#eee",
          pathColor: "#06b58c",
        })}
      />
    </Box>
  );
}

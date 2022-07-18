import { Box } from "@mui/material";
import ReactSpeedometer from "react-d3-speedometer";

export default function Speedometer() {
  return (
    <Box sx={{ width: "3in", height: "100%" }}>
      <ReactSpeedometer
        className="speedometer"
        fluidWidth={true}
        needleTransition="easeElastic"
        needleTransitionDuration={1500}
        needleColor="#34495E"
        ringWidth={20}
        value={21}
        currentValueText="21%"
        minValue={0}
        maxValue={100}
        customSegmentStops={[0, 40, 60, 75, 90, 100]}
        segmentColors={[
          "hsl(166, 94%, 37%)",
          "hsl(218, 53%, 71%)",
          "hsl(45, 99%, 70%)",
          "hsl(29, 87%, 54%)",
          "hsl(7, 89%, 63%)",
        ]}
        forceRender
      />
    </Box>
  );
}

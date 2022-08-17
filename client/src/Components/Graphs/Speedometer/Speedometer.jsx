import { Box } from "@mui/material";
import GaugeChart from "react-gauge-chart";

export default function Speedometer() {
  return (
    <Box position="relative" height="1.4in"   width="100%">
      <GaugeChart
        id="gauge-chart"
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "100%",
        }}
        textColor="transparent"
        nrOfLevels={5}
        colors={["#06b58c", "#8fabdd", "#fed966", "#f08725", "#f55f4b"]}
        arcWidth={0.2}
        arcPadding={0}
        cornerRadius={0}
        marginInPercent={0.05}
      />
    </Box>
  );
}

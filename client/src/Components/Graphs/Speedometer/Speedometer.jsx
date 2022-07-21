import ReactSpeedometer from "react-d3-speedometer";

export default function Speedometer() {
  return (
    <ReactSpeedometer
      className="speedometer"
      height={200}
      needleTransition="easeElastic"
      needleTransitionDuration={1500}
      needleColor="#34495E"
      ringWidth={20}
      value={21}
      currentValueText="21%"
      minValue={0}
      maxValue={100}
      paddingHorizontal={1}
      paddingVertical={1}
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
  );
}

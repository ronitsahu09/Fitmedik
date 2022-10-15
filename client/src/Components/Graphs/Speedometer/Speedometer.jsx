import GaugeChart from "react-gauge-chart";

export default function Speedometer() {
  return (
    <GaugeChart
      id="gauge-chart"
      style={{
        width: 200,
      }}
      textColor="transparent"
      nrOfLevels={5}
      colors={["#06b58c", "#8fabdd", "#fed966", "#f08725", "#f55f4b"]}
      arcWidth={0.2}
      arcPadding={0}
      cornerRadius={0}
      marginInPercent={0.01}
    />
  );
}

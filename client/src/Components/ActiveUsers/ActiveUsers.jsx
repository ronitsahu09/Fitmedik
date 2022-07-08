import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "./Styles.css";

export default function ActiveUsers() {
  const [progress, setProgress] = useState(90);

  return (
    <div className="activeUsers">
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
      />{" "}
    </div>
  );
}

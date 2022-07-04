import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import "./styles/home.css";

export default function Home() {
  return (
    <div className="homepage">
      <div className="left">
        <Left />
      </div>

      <div className="middle">
        <Middle />
      </div>

      <div className="right">
        <Right />
      </div>
    </div>
  );
}

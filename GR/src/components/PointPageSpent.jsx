import "./pointPageSpent.module.css";
import Header from "./pointPageSpent/Header";
import LeftSide from "./pointPageSpent/LeftSide";
import Summary from "./pointPageSpent/Summary";
import History from "./pointPageSpent/History";
import RightSide from "./pointPageSpent/RightSide";

function PointPageSpent() {
  return (
    <>
      <Header />
      <div className="flex">
        <LeftSide />
        <div className="flex-1">
          <Summary />
          <History />
        </div>
        <RightSide />
      </div>
    </>
  );
}

export default PointPageSpent;

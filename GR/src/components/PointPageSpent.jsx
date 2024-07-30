import styles from "./pointPageSpent.module.css";
import Header from "./pointPageSpent/Header";
import LeftSide from "./pointPageSpent/LeftSide";
import Main from "./pointPageSpent/Main";
import RightSide from "./pointPageSpent/RightSide";

function PointPageSpent() {
  return (
    <>
      <Header />
      <div className="flex">
        <LeftSide />
        <div className="flex-1 border-x border-[#21262D] py-0 pr-[6px] pl-[10px]">
          <Main />
        </div>
        <RightSide />
      </div>
    </>
  );
}

export default PointPageSpent;

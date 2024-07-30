import styles from "./PointPageSpent.module.css";
import Header from "../../components/Header/Header";
import LeftSide from "../../components/LeftSide/LeftSide";
import Main from "./components/Main/Main";
import RightSide from "../../components/RightSide/RightSide";

function PointPageSpent() {
  return (
    <>
      <Header />
      <main className="flex">
        <LeftSide />
        <section className="flex-1 border-x border-[#21262D] py-0 pr-[6px] pl-[10px]">
          <Main />
        </section>
        <RightSide />
      </main>
    </>
  );
}

export default PointPageSpent;

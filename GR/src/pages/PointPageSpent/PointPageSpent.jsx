import styles from "./PointPageSpent.module.css";
import Header from "../../components/Header/Header";
import LeftSide from "../../components/LeftSide/LeftSide";
import Center from "./components/Main/Center";
import RightSide from "../../components/RightSide/RightSide";

function PointPageSpent() {
  return (
    <>
      <Header />
      <main className="flex">
        <LeftSide />
        <section className="border-x border-[#21262D]">
          <Center />
        </section>
        <RightSide />
      </main>
    </>
  );
}

export default PointPageSpent;

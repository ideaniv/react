import React from "react";
import styles from "./leftSide.module.css";
import userIcon from "../../assets/images/leftSide/bigUserPic.svg";
import Coin from "../../assets/images/leftSide/coin.svg";
import Tier from "../../assets/images/leftSide/supportTier.svg";
import Grass from "../../assets/images/leftSide/contributions.svg";

export default function LeftSide() {
  return (
    <div className={styles["container"]}>
      <div
        className={styles["sub-container"]}
        style={{
          // borderRight: "1px solid #21262D",
          padding: "0 17px 0 17px",
          display: "flex",
          flexBasis: "350px",
        }}
      >
        {/* <div className=="flex " */}

        <div className="section">
          <h5 style={{ color: "white", margin: "22px 0" }}>Profile</h5>
          <div
            className="sub-section"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={userIcon} style={{ width: "169px", height: "169px" }} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <p style={{ color: "#C9D1D9", fontSize: "23px" }}>권혁원</p>
              <p style={{ color: "#8B949E", fontSize: "18px" }}>
                ambition-kwon
              </p>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <p
                style={{
                  color: "#C9D1D9",
                  fontSize: "12px",
                }}
              >
                15.9 / 30.8
              </p>
              <img src={Coin} style={{ margin: "-6px 3px" }} />
            </div>
          </div>
        </div>
        <div className="section">
          <h5 style={{ color: "white", margin: "22px 0" }}>Support Tier</h5>
          <div
            className="sub-section"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={Tier}
              style={{
                width: "251.27px",
                height: "148px",
                paddingBottom: "36px",
                borderBottom: "1px solid #21262D",
              }}
            />
          </div>
        </div>
        <div className="section">
          <h5 style={{ color: "white", margin: "22px 0" }}>Contributions</h5>
          <div
            className="sub-section"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={Grass} style={{ width: "320px", height: "123.89px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

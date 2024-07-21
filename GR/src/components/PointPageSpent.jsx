import React from "react";
import styles from "./PointPageSpent.module.css";
import userIcon from "../images/common/Frame.svg";
import Coin from "../images/PointPageSpent/Profile/image_16.svg";
import Tier from "../images/PointPageSpent/supportTier/Group_8.svg";
import Grass from "../images/PointPageSpent/Contributions/Group_9.svg";

export default function PointPageSpent() {
  return (
    <div class={styles["container"]}>
      <div
        class={styles["sub-container"]}
        style={{
          borderRight: "1px solid #21262D",
          padding: "0 17px 0 17px",
        }}
      >
        <div class="section">
          <h5 style={{ color: "white", margin: "22px 0" }}>Profile</h5>
          <div
            class="sub-section"
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
        <div class="section">
          <h5 style={{ color: "white", margin: "22px 0" }}>Support Tier</h5>
          <div
            class="sub-section"
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
        <div class="section">
          <h5 style={{ color: "white", margin: "22px 0" }}>Contributions</h5>
          <div
            class="sub-section"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={Grass} style={{ width: "320px", height: "123.89px" }} />
          </div>
        </div>
      </div>
      <div class={styles["sub-container"]}>
        <div class="section">
          <h3 style={{ color: "white", margin: "47px 10px" }}>Summary</h3>
          <div class="sub-section"></div>
        </div>
        <div class="section">
          <h3 style={{ color: "white", margin: "47px 10px" }}>History</h3>
          <div class="sub-section"></div>
        </div>
      </div>
      <div class={styles["sub-container"]}>
        <h4 style={{ color: "#FFFFFFB8" }}>Your profile</h4>
        <h4 style={{ color: "#FFFFFFB8" }}>Your Repositories</h4>
        <h4 style={{ color: "#FFFFFFB8" }}>Your Links</h4>
        <h4 style={{ color: "#FFFFFFB8" }}>Your Points</h4>
        <h4 style={{ color: "#FFFFFFB8" }}>Your Ranks</h4>
        <h4 style={{ color: "#FFFFFFB8" }}>Opensource Licenses</h4>
        <h4 style={{ color: "#FF000087" }}>Log out</h4>
      </div>
    </div>
  );
}

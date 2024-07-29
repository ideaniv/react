import React from "react";
import styles from "./rightSide.module.css";
import Home from "../../assets/images/rightSide/home.svg";
import Book from "../../assets/images/rightSide/book.svg";
import Globe from "../../assets/images/rightSide/globe.svg";
import Package from "../../assets/images/rightSide/package.svg";
import Star from "../../assets/images/rightSide/star.svg";

export default function rightSide() {
  return (
    <div
      class={styles["sub-container"]}
      style={{
        cursor: "pointer",
        fontSize: "20px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        // flexBasis: "326px",
        marginLeft: "44px",
      }}
    >
      <h4 style={{ color: "#FFFFFFB8" }}>
        <img src={Home} style={{}} />
        Your profile
      </h4>
      <h4 style={{ color: "#FFFFFFB8" }}>
        <img src={Book} style={{ marginTop: "90px" }} />
        Your Repositories
      </h4>
      <h4 style={{ color: "#FFFFFFB8" }}>
        <img src={Globe} style={{ marginTop: "90px" }} />
        Your Links
      </h4>
      <h4 style={{ color: "#FFFFFFB8" }}>
        <img src={Package} style={{ marginTop: "90px" }} />
        Your Points
      </h4>
      <h4
        style={{
          color: "#FFFFFFB8",
          borderBottom: "1px solid #21262D",
          paddingBottom: "45px",
        }}
      >
        <img src={Star} style={{ marginTop: "90px" }} />
        Your Ranks
      </h4>
      <h4
        style={{
          color: "#FFFFFFB8",
          borderBottom: "1px solid #21262D",
          paddingBottom: "45px",
        }}
      >
        <img src={Home} style={{ marginTop: "45px" }} />
        Opensource Licenses
      </h4>
      <h4 style={{ color: "#FF000087", marginTop: "90px" }}>Log out</h4>
    </div>
  );
}

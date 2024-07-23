import React from "react";
import logo from "../../images/Header/image_19_1.svg";
import userIcon from "../../images/Header/Frame.svg";

export default function Header() {
  return (
    <header
      className="test"
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#161B22",
        justifyContent: "space-between",
        padding: "11px 24px 11px 24px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} />
        <p
          style={{
            color: "white",
            marginLeft: "10px",
          }}
        >
          OpenSource Suppoter
        </p>
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
        <img src={userIcon} width={20} />
        <div
          style={{
            backgroundColor: "#006EED",
            width: "10px",
            height: "10px",
            border: "2px solid #161B22",
            borderRadius: "50%",
            position: "absolute",
            top: 0,
            right: 0,
            transform: "translateX(7px) translateY(-4px)",
          }}
        ></div>
      </div>
    </header>
  );
}

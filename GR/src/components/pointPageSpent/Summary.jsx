import React, { useState, useEffect } from "react";
import styles from "./summary.module.css";
import Git from "../../assets/images/summary/gitLogo.svg";
import PayPal from "../../assets/images/summary/payPalLogo.svg";
import Ad from "../../assets/images/summary/AdLogo.svg";
import Hand from "../../assets/images/summary/hand.svg";
// import summary from "../../../../gr/src/components/PointPageSpent/Summary";

export default function Summary() {
  const [summaryData, setSummaryData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.219.132:8080/api/history")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSummaryData(data);
      });
  }, []);
  // const summaryData = [
  //   {
  //     imgSrc: Git,
  //     title: "Spent Points",
  //     description: "Supporting by Repository",
  //     points: "11301P",
  //     lastMonth: "last month",
  //     button: {
  //       backgroundColor: "#FFE5D7",
  //       color: "#FF0000",
  //       text: "↑ 2.5%",
  //     },
  //   },
  //   {
  //     imgSrc: PayPal,
  //     title: "Earned Points",
  //     description: "Gained By Paypal",
  //     points: "24034P",
  //     lastMonth: "last month",
  //     button: {
  //       backgroundColor: "#A1A6AB",
  //       color: "white",
  //       text: "- 0.0%",
  //     },
  //   },
  //   {
  //     imgSrc: Ad,
  //     title: "Earned Points",
  //     description: "Gained By Ads",
  //     points: "102P",
  //     lastMonth: "last month",
  //     button: {
  //       backgroundColor: "#C8E2FF",
  //       color: "#0000FF",
  //       text: "↓ 1.7%",
  //     },
  //   },
  //   {
  //     imgSrc: Hand,
  //     title: "Earned Points",
  //     description: "Gained By Sponsor",
  //     points: "1203P",
  //     lastMonth: "last month",
  //     button: {
  //       backgroundColor: "#FFE5D7",
  //       color: "#F4221F",
  //       text: "↑ 10.5%",
  //     },
  //   },
  // ];

  return (
    <div className={"flex border-x border-[#21262D] py-0 pr-[6px] pl-[10px]"}>
      <div className="section">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 style={{ color: "white", margin: "47px 10px" }}>Summary</h3>
          <button
            style={{
              backgroundColor: "#c94c4c",
              color: "white",
              fontSize: "14px",
              padding: "6px 10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            <p>PayPal Charge</p>
          </button>
        </div>
        <div className="sub-section">
          <table>
            <tbody>
              <tr>
                {summaryData.map((item, index) => (
                  <td
                    key={item.id}
                    style={{
                      backgroundColor: "#303641",
                      padding: "21px 15px 14px 17px",
                    }}
                  >
                    <img
                      src={`http://192.168.219.132:8080` + item.logo}
                      alt={item.title}
                    />
                    <p style={{ color: item.titleColor, fontSize: "18px" }}>
                      {item.title}
                    </p>
                    <p style={{ color: "white", fontSize: "11px" }}>
                      {item.summary}
                    </p>
                    <p style={{ color: "white", fontSize: "20px" }}>
                      {item.point}
                    </p>
                    <p style={{ color: "#FFFFFF80", fontSize: "14px" }}>
                      {item.updated}
                    </p>
                    <button
                      style={{
                        backgroundColor:
                          item.percent > 0
                            ? "#FFE5D7"
                            : item.percent < 0
                            ? "#C8E2FF"
                            : "#A1A6AB",
                        color:
                          item.percent > 0
                            ? "#F4221F"
                            : item.percent < 0
                            ? "#0000FF"
                            : "white",
                        fontSize: "12px",
                        padding: "3px 10px",
                        border: "none",
                        borderRadius: "10px",
                      }}
                    >
                      {item.percent}%
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import styles from "./main.module.css";
import git from "../../assets/images/summary/gitLogo.svg";
import payPal from "../../assets/images/summary/payPalLogo.svg";
import ad from "../../assets/images/summary/AdLogo.svg";
import hand from "../../assets/images/summary/hand.svg";

export default function Main() {
  const [summary, setSummaryData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.219.132:8080/api/summary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSummaryData(data);
      });
  }, []);

  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.219.132:8080/api/history")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHistoryData(data);
      });
  }, []);

  const summaryData = [
    {
      imgSrc: git,
      title: "Spent Points",
      description: "Supporting by Repository",
      points: "11301P",
      lastMonth: "last month",
      button: {
        backgroundColor: "#FFE5D7",
        color: "#FF0000",
        text: "↑ 2.5%",
      },
    },
    {
      imgSrc: payPal,
      title: "Earned Points",
      description: "Gained By Paypal",
      points: "24034P",
      lastMonth: "last month",
      button: {
        backgroundColor: "#A1A6AB",
        color: "white",
        text: "- 0.0%",
      },
    },
    {
      imgSrc: ad,
      title: "Earned Points",
      description: "Gained By Ads",
      points: "102P",
      lastMonth: "last month",
      button: {
        backgroundColor: "#C8E2FF",
        color: "#0000FF",
        text: "↓ 1.7%",
      },
    },
    {
      imgSrc: hand,
      title: "Earned Points",
      description: "Gained By Sponsor",
      points: "1203P",
      lastMonth: "last month",
      button: {
        backgroundColor: "#FFE5D7",
        color: "#F4221F",
        text: "↑ 10.5%",
      },
    },
  ];

  //   const historyData = [
  //     {
  //       date: "2024.06.03 22:48:18",
  //       points: "-213 P",
  //       repository: "ambition-kwon / PreFlightCheck",
  //       status: "IN PROGRESS",
  //       statusColor: "#6DB1FF",
  //       rowBgColor: "#21262D",
  //     },
  //     {
  //       date: "2024.06.02 20:38:12",
  //       points: "-323 P",
  //       repository: "ambition-kwon / AI-TUTOR",
  //       status: "Completed",
  //       statusColor: "#47A54B",
  //     },
  //     {
  //       date: "2024.06.01 23:58:57",
  //       points: "-2312 P",
  //       repository: "ambition-kwon / Design-Branch",
  //       status: "Completed",
  //       statusColor: "#47A54B",
  //       rowBgColor: "#21262D",
  //     },
  //     {
  //       date: "2024.05.31 16:43:12",
  //       points: "-4342 P",
  //       repository: "ambition-kwon / Please-Helpme",
  //       status: "Completed",
  //       statusColor: "#47A54B",
  //     },
  //     {
  //       date: "2024.05.25 21:12:15",
  //       points: "-665 P",
  //       repository: "ambition-kwon / PointBlock",
  //       status: "Completed",
  //       statusColor: "#47A54B",
  //       rowBgColor: "#21262D",
  //     },
  //     {
  //       date: "2024.05.21 02:43:18",
  //       points: "-12 P",
  //       repository: "ambition-kwon / ambition-kwon.github.io",
  //       status: "Completed",
  //       statusColor: "#47A54B",
  //     },
  //     {
  //       date: "2024.05.14 04:06:24",
  //       points: "-578 P",
  //       repository: "ambition-kwon / RealDesignBusy",
  //       status: "Completed",
  //       statusColor: "#47A54B",
  //       rowBgColor: "#21262D",
  //     },
  //     {
  //       date: "2024.05.11 07:31:25",
  //       points: "-64 P",
  //       repository: "ambition-kwon / PreHotelCheck",
  //       status: "Completed",
  //       statusColor: "#47A54B",
  //     },
  //   ];

  return (
    <container className="">
      <section1 className="flex justify-between text-white ml-[10px] mt-[47px] mr-[6px]">
        <div className="text-[24px]">Summary</div>
        <button className="text-[14px] rounded-md bg-[#c94c4c] py-[6px] px-[10px] border border-[#363B42]">
          PayPal Charge
        </button>
      </section1>
      <boxes className="flex justify-between mt-[26px]">
        <box className="border-0 ml-[10px] w-[252px] h-[155px] bg-[#303641]">
          <img className="size-[39px] ml-[4px]" src={git} alt="git" />
          <div className="text-white">Spent Points</div>
          <div className="text-[#58A6FF]">Supporting by Repository</div>
          <div className="text-white">11301P</div>
          <div className="text-[#FFFFFF80]">last month</div>
          <div className="flex justify-center text-[#FF0000] bg-[#FFE5D7]">
            ↑ 2.5%
          </div>
        </box>
        <box className="border-0 w-[252px] h-[155px] bg-[#303641]">
          <img className="size-[39px]" src={payPal} alt="payPal" />
          <div className="text-white">Earned Points</div>
          <div className="text-[#58A6FF]">Gained By Paypal</div>
          <div className="text-white">24034P</div>
          <div className="text-[#FFFFFF80]">last month</div>
          <div className="flex justify-center text-white bg-[#A1A6AB] my-[3px] mx-[10px]">
            ↑ 2.5%
          </div>
        </box>
        <box className="border-0 w-[252px] h-[155px] bg-[#303641]">
          <img className="size-[39px] mr-[4px]" src={ad} alt="ad" />
          <div className="text-white">Earned Points</div>
          <div className="text-[#58A6FF]">Gained By Ads</div>
          <div className="text-white">102P</div>
          <div className="text-[#FFFFFF80]">last month</div>
          <div className="flex justify-center text-[#0000FF] bg-[#C8E2FF]">
            0%
          </div>
        </box>
        <box className="border-0 mr-[6px] w-[252px] h-[155px] bg-[#303641]">
          <img className="size-[39px] mr-[4px]" src={hand} alt="hand" />
          <div className="text-white">Earned Points</div>
          <div className="text-[#58A6FF]">Gained By Sponsor</div>
          <div className="text-white">1203P</div>
          <div className="text-[#FFFFFF80]">last month</div>
          <div className="flex justify-center text-[#FF0000] bg-[#FFE5D7]">
            ↑ 2.5%
          </div>
        </box>
      </boxes>
      {/* <table>
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
        </table> */}
      <section3 className="flex justify-between text-white ml-[10px] mr-[6px] mt-[53px]">
        <div className="text-[23px]">History</div>
        <buttons className="text-white text-[14px]">
          <button className="rounded-md bg-[#58A6FF] py-[6px] px-[18px] border border-[#363B42] mr-[5px]">
            Spent
          </button>
          <button className="rounded-md bg-[#21262D] py-[6px] px-[18px] border border-[#363B42]">
            Earned
          </button>
        </buttons>
      </section3>
      <table className="">
        <thead className="">
          <tr className=" text-[11px] p-[3px] text-[#A1AAB4]">
            <th>DATE</th>
            <th>POINTS</th>
            <th>USERNAME / REPOSITORY</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody className="w-[1048px] h-[552px]"></tbody>
        {/* <tbody style={{ width: "1048px", height: "552px" }}>
          {historyData.map((item, index) => (
            <tr
              key={index}
              style={{ backgroundColor: item.rowBgColor || "transparent" }}
            >
              <td
                style={{
                  padding: "8px",
                  fontSize: "15px",
                  color: "#C9D1D9",
                  textAlign: "center",
                }}
              >
                {item.date}
              </td>
              <td
                style={{
                  padding: "8px",
                  fontSize: "17px",
                  color: "#C33D3D",
                  textAlign: "center",
                }}
              >
                {item.points}
              </td>
              <td
                style={{
                  padding: "8px",
                  fontSize: "13px",
                  color: "#C9D1D9",
                  textAlign: "center",
                }}
              >
                {item.repository}
              </td>
              <td
                style={{
                  padding: "8px",
                  fontSize: "14px",
                  color: item.statusColor,
                  textAlign: "center",
                }}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
      <a className="text-[#58A6FF] flex justify-center items-center cursor-pointer">
        Show more results
      </a>
    </container>
  );
}

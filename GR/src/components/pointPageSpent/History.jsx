import React from "react";
import styles from "./history.module.css";

export default function History() {
  const historyData = [
    {
      date: "2024.06.03 22:48:18",
      points: "-213 P",
      repository: "ambition-kwon / PreFlightCheck",
      status: "IN PROGRESS",
      statusColor: "#6DB1FF",
      rowBgColor: "#21262D",
    },
    {
      date: "2024.06.02 20:38:12",
      points: "-323 P",
      repository: "ambition-kwon / AI-TUTOR",
      status: "Completed",
      statusColor: "#47A54B",
    },
    {
      date: "2024.06.01 23:58:57",
      points: "-2312 P",
      repository: "ambition-kwon / Design-Branch",
      status: "Completed",
      statusColor: "#47A54B",
      rowBgColor: "#21262D",
    },
    {
      date: "2024.05.31 16:43:12",
      points: "-4342 P",
      repository: "ambition-kwon / Please-Helpme",
      status: "Completed",
      statusColor: "#47A54B",
    },
    {
      date: "2024.05.25 21:12:15",
      points: "-665 P",
      repository: "ambition-kwon / PointBlock",
      status: "Completed",
      statusColor: "#47A54B",
      rowBgColor: "#21262D",
    },
    {
      date: "2024.05.21 02:43:18",
      points: "-12 P",
      repository: "ambition-kwon / ambition-kwon.github.io",
      status: "Completed",
      statusColor: "#47A54B",
    },
    {
      date: "2024.05.14 04:06:24",
      points: "-578 P",
      repository: "ambition-kwon / RealDesignBusy",
      status: "Completed",
      statusColor: "#47A54B",
      rowBgColor: "#21262D",
    },
    {
      date: "2024.05.11 07:31:25",
      points: "-64 P",
      repository: "ambition-kwon / PreHotelCheck",
      status: "Completed",
      statusColor: "#47A54B",
    },
  ];

  return (
    <div className="section">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "53px",
        }}
      >
        <h3 style={{ color: "white", margin: "47px 10px" }}>History</h3>
        <div style={{ marginTop: "53px" }}>
          <button
            style={{
              backgroundColor: "#58A6FF",
              color: "white",
              fontSize: "14px",
              padding: "6px 18px",
              border: "1.5px solid #363B42",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Spent
          </button>
          <button
            style={{
              backgroundColor: "#21262D",
              color: "white",
              fontSize: "14px",
              padding: "6px 14px",
              border: "1.5px solid #363B42",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Earned
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr style={{ fontSize: "11px", padding: "3px", color: "#A1AAB4" }}>
            <th>DATE</th>
            <th>POINTS</th>
            <th>USERNAME / REPOSITORY</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody style={{ width: "1048px", height: "552px" }}>
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
        </tbody>
      </table>
      <p style={{ color: "#58A6FF", fontSize: "14px", textAlign: "center" }}>
        Show more results
      </p>
      <div className="sub-section"></div>
    </div>
  );
}

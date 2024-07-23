import React from "react";
import styles from "./PointPageSpent.module.css";
import userIcon from "../images/Left/Profile/Frame.svg";
import Coin from "../images/Left/Profile/image_16.svg";
import Tier from "../images/Left/supportTier/Group_8.svg";
import Grass from "../images/Left/Contributions/Group_9.svg";
import Home from "../images/Right/home.svg";
import Book from "../images/Right/book.svg";
import Globe from "../images/Right/globe.svg";
import Package from "../images/Right/package.svg";
import Star from "../images/Right/star.svg";
import Git from "../images/Middle/github-mark_1.svg";
import PayPal from "../images/Middle/174861_1.svg";
import Ad from "../images/Middle/Vector.svg";
import Hand from "../images/Middle/Vector2.svg";

export default function PointPageSpent() {
  return (
    <main class={styles["container"]}>
      {/* left section */}
      <section
        class={styles["sub-container"]}
        style={{
          // borderRight: "1px solid #21262D",
          padding: "0 17px 0 17px",
          display: "flex",
          flexBasis: "350px",
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
      </section>
      {/* center section */}
      <section
        class={styles["sub-container"]}
        style={{
          borderLeft: "1px solid #21262D",
          borderRight: "1px solid #21262D",
          padding: "0 6px 0 10px",
          display: "flex",
          // flexBasis: "1048px",
          flex: 1, // flex : 1 -> flex 부모요소의 남은 공간을 최대한 차지
        }}
      >
        <article class="section">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "47px 10px",
            }}
          >
            <h3 style={{ color: "white" }}>Summary</h3>
            <button
              style={{
                backgroundColor: "#c94c4c",
                color: "white",
                fontSize: "14px",
                padding: "6px 10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                // marginBottom: "20px",
              }}
            >
              <p>PayPal Charge</p>
            </button>
          </div>
          <div
            class="sub-section"
            style={{
              display: "flex",
            }}
          >
            <table
              style={{
                flex: 1,
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#303641",
                      padding: " 21px 15px 14px 17px",
                    }}
                  >
                    <img src={Git} style={{}} />
                    <p
                      style={{
                        color: "#58A6FF",
                        fontSize: "18px",
                      }}
                    >
                      Spent Points
                    </p>
                    <p style={{ color: "white", fontSize: "11px" }}>
                      Supporting by Repository
                    </p>
                    <p style={{ color: "white", fontSize: "20px" }}>11301P</p>
                    <p style={{ color: "#FFFFFF80", fontSize: "14px" }}>
                      last month
                    </p>
                    <button
                      style={{
                        backgroundColor: "#FFE5D7",
                        color: "#FF0000",
                        fontSize: "12px",
                        padding: "3px 10px",
                        border: "none",
                        borderRadius: "10px",
                      }}
                    >
                      ↑ 2.5%
                    </button>
                  </td>
                  <td
                    style={{
                      backgroundColor: "#303641",
                      padding: " 21px 15px 14px 17px",
                    }}
                  >
                    <img src={PayPal} style={{}} />
                    <p
                      style={{
                        color: "#6CD064",
                        fontSize: "18px",
                      }}
                    >
                      Earned Points
                    </p>
                    <p style={{ color: "white", fontSize: "11px" }}>
                      Gained By Paypal
                    </p>
                    <p style={{ color: "white", fontSize: "20px" }}>24034P</p>
                    <p style={{ color: "#FFFFFF80", fontSize: "14px" }}>
                      last month
                    </p>
                    <button
                      style={{
                        backgroundColor: "#A1A6AB",
                        color: "white",
                        fontSize: "12px",
                        padding: "3px 10px",
                        border: "none",
                        borderRadius: "10px",
                      }}
                    >
                      - 0.0%
                    </button>
                  </td>
                  <td
                    style={{
                      backgroundColor: "#303641",
                      padding: " 21px 15px 14px 17px",
                    }}
                  >
                    <img src={Ad} style={{}} />
                    <p
                      style={{
                        color: "#6CD064",
                        fontSize: "18px",
                      }}
                    >
                      Earned Points
                    </p>
                    <p style={{ color: "white", fontSize: "11px" }}>
                      Gained By Ads
                    </p>
                    <p style={{ color: "white", fontSize: "20px" }}>102P</p>
                    <p style={{ color: "#FFFFFF80", fontSize: "14px" }}>
                      last month
                    </p>
                    <button
                      style={{
                        backgroundColor: "#C8E2FF",
                        color: "#0000FF",
                        fontSize: "12px",
                        padding: "3px 10px",
                        border: "none",
                        borderRadius: "10px",
                      }}
                    >
                      ↓ 1.7%
                    </button>
                  </td>
                  <td
                    style={{
                      backgroundColor: "#303641",
                      padding: " 21px 15px 14px 17px",
                    }}
                  >
                    <img src={Hand} style={{}} />
                    <p
                      style={{
                        color: "#6CD064",
                        fontSize: "18px",
                      }}
                    >
                      Earned Points
                    </p>
                    <p style={{ color: "white", fontSize: "11px" }}>
                      Gained By Sponsor
                    </p>
                    <p
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontStyle: "bold",
                      }}
                    >
                      1203P
                    </p>
                    <p style={{ color: "#FFFFFF80", fontSize: "14px" }}>
                      last month
                    </p>
                    <button
                      style={{
                        backgroundColor: "#FFE5D7",
                        color: "#F4221F",
                        fontSize: "12px",
                        padding: "3px 10px",
                        border: "none",
                        borderRadius: "10px",
                      }}
                    >
                      ↑ 10.5%
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
        <article
          class="section"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // marginTop: "53px",
              margin: "47px 10px",
            }}
          >
            <h3 style={{ color: "white" }}>History</h3>
            <div>
              <button
                style={{
                  backgroundColor: "#58A6FF",
                  color: "white",
                  fontSize: "14px",
                  padding: "6px 18px",
                  border: "1.5px solid #363B42",
                  borderRadius: "5px",
                  cursor: "pointer",
                  // marginBottom: "8px",
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
              <tr
                style={{ fontSize: "11px", padding: "3px", color: "#A1AAB4" }}
              >
                <th>DATE</th>
                <th>POINTS</th>
                <th>USERNAME / REPOSITORY</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody
              style={{
                // width: "1048px",
                height: "552px",
              }}
            >
              <tr>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "15px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  2024.06.03 22:48:18
                </td>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "17px",
                    color: "#C33D3D",
                    textAlign: "center",
                  }}
                >
                  -213 P
                </td>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "13px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  ambition-kwon / PreFlightCheck
                </td>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "14px",
                    color: "#6DB1FF",
                    textAlign: "center",
                  }}
                >
                  IN PROGRESS
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "15px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  2024.06.02 20:38:12
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "17px",
                    color: "#C33D3D",
                    textAlign: "center",
                  }}
                >
                  -323 P
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "13px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  ambition-kwon / AI-TUTOR
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "14px",
                    color: "#47A54B",
                    textAlign: "center",
                  }}
                >
                  Completed
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "15px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  2024.06.01 23:58:57
                </td>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "17px",
                    color: "#C33D3D",
                    textAlign: "center",
                  }}
                >
                  -2312 P
                </td>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "13px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  ambition-kwon / Design-Branch
                </td>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "14px",
                    color: "#47A54B",
                    textAlign: "center",
                  }}
                >
                  Completed
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "15px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  2024.05.31 16:43:12
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "17px",
                    color: "#C33D3D",
                    textAlign: "center",
                  }}
                >
                  -4342 P
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "13px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  ambition-kwon / Please-Helpme
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "14px",
                    color: "#47A54B",
                    textAlign: "center",
                  }}
                >
                  Completed
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "15px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  2024.05.25 21:12:15
                </td>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "17px",
                    color: "#C33D3D",
                    textAlign: "center",
                  }}
                >
                  -665 P
                </td>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "13px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  ambition-kwon / PointBlock
                </td>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "14px",
                    color: "#47A54B",
                    textAlign: "center",
                  }}
                >
                  Completed
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "15px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  2024.05.21 02:43:18
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "17px",
                    color: "#C33D3D",
                    textAlign: "center",
                  }}
                >
                  -12 P
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "13px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  ambition-kwon / ambition-kwon.github.io
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "14px",
                    color: "#47A54B",
                    textAlign: "center",
                  }}
                >
                  Completed
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "15px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  2024.05.14 04:06:24
                </td>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "17px",
                    color: "#C33D3D",
                    textAlign: "center",
                  }}
                >
                  -578 P
                </td>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "13px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  ambition-kwon / RealDesignBusy
                </td>
                <td
                  style={{
                    backgroundColor: "#21262D",
                    padding: "8px",
                    fontSize: "14px",
                    color: "#47A54B",
                    textAlign: "center",
                  }}
                >
                  Completed
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "15px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  2024.05.11 07:31:25
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "17px",
                    color: "#C33D3D",
                    textAlign: "center",
                  }}
                >
                  -64 P
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "13px",
                    color: "#C9D1D9",
                    textAlign: "center",
                  }}
                >
                  ambition-kwon / PreHotelCheck
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "14px",
                    color: "#47A54B",
                    textAlign: "center",
                  }}
                >
                  Completed
                </td>
              </tr>
            </tbody>
          </table>

          <p
            style={{
              color: "#58A6FF",
              fontSize: "14px",
              textAlign: "center",
              padding: "",
            }}
          >
            Show more results
          </p>
          <div class="sub-section"></div>
        </article>
      </section>
      {/* right section */}
      <section
        class={styles["sub-container"]}
        style={{
          cursor: "pointer",
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
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
      </section>
    </main>
  );
}

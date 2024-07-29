import styles from "../assets/css/left-aside.module.css";
import userIconImg from "../assets/img/user_icon.png";
import supportTierCard from "../assets/img/support_tier_card.png";
import contributionCalendar from "../assets/img/contribution_calendar.png";
import coinImg from "../assets/img/coin_img.png";

export default function LeftAside() {
  return (
    <>
      <div className={styles["left-aside-container"]}>
        <div className={styles["profile-container"]}>
          <div className={styles["title-text"]}>Profile</div>
          <div className={styles["profile-box"]}>
            <div className={styles["user-icon-img"]}>
              <img src={userIconImg} alt="user icon img" />
            </div>
            <div className={styles["user-info-box"]}>
              <div className={styles["user-info"]}>
                <div className={styles["username"]}>권혁원</div>
                <div className={styles["userid"]}>ambition-kwon</div>
              </div>
              <div className={styles["point-box"]}>
                <div className={styles["point-text"]}>15.9 / 30.8 </div>
                <img className={styles["coin-img"]} src={coinImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["support-tier-container"]}>
          <div className={styles["title-text"]}>Support Tier</div>
          <div className={styles["support-card"]}>
            <img src={supportTierCard} alt="support tier card img" />
          </div>
        </div>
        <div className={styles["contribution-container"]}>
          <div className={styles["title-text"]}>Contribution</div>
          <div className={styles["contribution-calendar"]}>
            <img src={contributionCalendar} alt="contribution calendar img" />
          </div>
        </div>
      </div>
    </>
  );
}

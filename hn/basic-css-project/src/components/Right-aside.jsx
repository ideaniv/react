import styles from "../assets/css/right-aside.module.css"

import homeIcon from "../assets/img/home.svg"
import globeIcon from "../assets/img/globe.svg"
import bookIcon from "../assets/img/book.svg"
import packageIcon from "../assets/img/package.svg"
import starIcon from "../assets/img/star.svg"

export default function RightAside() {
    return (
            <div className={styles['right-aside-container']}>
                <div className={styles['menu-item']}><img src={homeIcon} alt="" />Your profile</div>
                <div className={styles['menu-item']}><img src={bookIcon} alt="" />Your Repositories</div>
                <div className={styles['menu-item']}><img src={globeIcon} alt="" />Your Links</div>
                <div className={styles['menu-item']}><img src={packageIcon} alt="" />Your Points</div>
                <div className={styles['menu-item']}><img src={starIcon} alt="" />Your Ranks</div>
                <div className={`${styles['menu-item']} ${styles['licenses-box']}`}><div className={styles.licenses}>Opensource Licenses</div></div>
                <div className={`${styles['menu-item']} ${styles.red}`}>Log out</div>
            </div>
    )
}
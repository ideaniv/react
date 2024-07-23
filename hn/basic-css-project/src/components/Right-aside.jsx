import styles from "../assets/css/right-aside.module.css"

import homeIcon from "../assets/img/home.svg"
import globeIcon from "../assets/img/globe.svg"
import bookIcon from "../assets/img/book.svg"
import packageIcon from "../assets/img/package.svg"
import starIcon from "../assets/img/star.svg"

export default function RightAside() {
    return (
            <section className={styles['right-aside-container']}>
                <nav className={styles['menu-item']}><img src={homeIcon} alt="" />Your profile</nav>
                <nav className={styles['menu-item']}><img src={bookIcon} alt="" />Your Repositories</nav>
                <nav className={styles['menu-item']}><img src={globeIcon} alt="" />Your Links</nav>
                <nav className={styles['menu-item']}><img src={packageIcon} alt="" />Your Points</nav>
                <nav className={styles['menu-item']}><img src={starIcon} alt="" />Your Ranks</nav>
                <nav className={`${styles['menu-item']} ${styles['licenses-box']} ${styles.licenses}`}>Opensource Licenses</nav>
                <nav className={`${styles['menu-item']} ${styles.red}`}>Log out</nav>
            </section>
    )
}
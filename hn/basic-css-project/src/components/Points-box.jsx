import styles from '../assets/css/points-box.module.css'

export default function PointBox({img, title, content, point, profitRate}) {
    return(
        <>
            <div className={styles['point-box-container']}>
                <div className={styles['header']}>
                    <img src={img} alt="" />
                    <div className={styles['header-text']}>
                        <div className={title.includes("Spent") ? `${styles.spent}` : `${styles.earned}`}>{title}</div>
                        <div className={styles['content']}>{content}</div>
                    </div>
                </div>
                <div className={styles['body']}>
                    <div className={styles['body-left']}>
                        <div className={styles['point']}>{point}P</div>
                        <div className={styles['last']}>last month</div>
                    </div>
                    <div className={styles['body-right']}>
                        <div className={`${styles['rate-box']} ${profitRate === 0 ? styles.zero : profitRate > 0 ? styles.plus : styles.minus}`}>
                            {profitRate === 0 ? '-' : profitRate > 0 ? '↑' : '↓'}{'\u00A0\u00A0'}{profitRate === 0 ? `0.0` : Math.abs(profitRate)}%
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
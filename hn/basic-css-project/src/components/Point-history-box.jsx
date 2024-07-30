import styles from '../assets/css/point-history-box.module.css'

export default function PointHistoryBox({ date, points, username, repository, status, background }) {
    return (
        <li className={styles['point-history-box-container']} style={{ background }}>
            <div style={{ flex: 1, padding:'5px' }} className={styles['date']}>{date}</div>
            <div style={{ flex: 2 }} className={styles['points']}> {points}P</div>
            <div style={{ flex: 2 }} className={styles['content']}>{username} / {repository}</div>
            <div style={{ flex: 1 }} className={`${styles['status']} ${status === 'IN PROGRESS' ? styles.progress : styles.complete}`}>{status}</div>
        </div>
    )
}
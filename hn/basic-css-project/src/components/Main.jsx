import styles from '../assets/css/main.module.css'
import githubImg from '../assets/img/github.svg'
import paypalImg from '../assets/img/paypal.svg'
import adImg from '../assets/img/ad.svg'
import earnImg from '../assets/img/earn.svg'
import PointBox from './Points-box'
import PointHistoryBox from './Point-history-box'

export default function Main() {
    const pointBoxObj = [
        {
            img: githubImg,
            title: 'Spent Points',
            content: 'Supporting by Repository',
            point: 1113,
            profitRate: 2.5
        },
        {
            img: paypalImg,
            title: 'Earned Points',
            content: 'Gained By Paypal',
            point: 2132,
            profitRate: 0.0
        },
        {
            img: adImg,
            title: 'Earned Points',
            content: 'Gained By Ads',
            point: 2132,
            profitRate: -1.7
        },        {
            img: earnImg,
            title: 'Earned Points',
            content: 'Gained By Sponsor',
            point: 2132,
            profitRate: 10.5
        },
    ];

    const pointHistoryObj = [
        {
            DATE: '2024.06.03 22:48:18',
            POINTS: -213,
            USERNAME:'ambition-kwon',
            REPOSITORY: 'PreFlightCheck',
            STATUS: 'IN PROGRESS'
        },
        {
            DATE: '2024.06.03 22:48:18',
            POINTS: -213,
            USERNAME:'ambition-kwon',
            REPOSITORY: 'PreFlightCheck',
            STATUS: 'Completed'
        },
        {
            DATE: '2024.06.03 22:48:18',
            POINTS: -213,
            USERNAME:'ambition-kwon',
            REPOSITORY: 'PreFlightCheck',
            STATUS: 'Completed'
        },
        {
            DATE: '2024.06.03 22:48:18',
            POINTS: -213,
            USERNAME:'ambition-kwon',
            REPOSITORY: 'PreFlightCheck',
            STATUS: 'IN PROGRESS'
        },
        {
            DATE: '2024.06.03 22:48:18',
            POINTS: -213,
            USERNAME:'ambition-kwon',
            REPOSITORY: 'PreFlightCheck',
            STATUS: 'Completed'
        },
        {
            DATE: '2024.06.03 22:48:18',
            POINTS: -213,
            USERNAME:'ambition-kwon',
            REPOSITORY: 'PreFlightCheck',
            STATUS: 'Completed'
        },
    ]

    return (
        <section className={styles['main-container']}>
            <article className={styles['summary-container']}>
                <div className={styles['header-container']}>
                    <div className={styles['header-text']}>Summary</div>
                    <div>
                        <div className={styles['charge-btn']}>PayPal Charge</div>
                    </div>
                </div>
                <div className={styles['point-box']}>{pointBoxObj.map((obj, index) => (<PointBox key={index} img={obj.img} title={obj.title} content={obj.content} point={obj.point} profitRate={obj.profitRate} />))}
                </div>
            </article>
            <article className={styles['history-container']}>
                <div className={styles['history-header']}>
                    <div className={styles['header-text']}>History</div>
                    <div className={styles['btn-container']}>
                        <div className={`${styles['btn']} ${styles['spent']}`}>Spent</div>
                        <div className={`${styles['btn']} ${styles['earned']}`}>Earned</div>
                    </div>
                </div>
                <div className={styles['history-table']}>
                    <div className={styles['table-header']}>
                        <div style={{flex: 1}}>Date</div>
                        <div style={{flex: 2}}>POINTS</div>
                        <div style={{flex: 2}}>USERNAME / REPOSITORY</div>
                        <div style={{flex: 1}}>STATUS</div>
                    </div>
                    <ul className={styles['table-body']}>
                        {pointHistoryObj.map((obj, index) => (<PointHistoryBox key={index} date={obj.DATE} points={obj.POINTS} username={obj.USERNAME} repository={obj.REPOSITORY} status={obj.STATUS} background={index % 2 === 0? '#161B22' : '#0E1116'}/> ))}
                    </ul>
                    <div className={styles['table-footer']}>
                        <p className={styles['show-more-btn']}>Show more results</p>
                    </div>
                </div>
            </article>
        </section>
    )
}
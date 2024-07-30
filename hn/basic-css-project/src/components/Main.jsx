import styles from '../assets/css/main.module.css'
import githubImg from '../assets/img/github.svg'
import paypalImg from '../assets/img/paypal.svg'
import adImg from '../assets/img/ad.svg'
import earnImg from '../assets/img/earn.svg'
import PointBox from './Points-box'
import PointHistoryBox from './Point-history-box'
import { useEffect, useState } from 'react'

export default function Main() {
    const [summaryList, setSummaryList] = useState([]);
    const [historyList, setHistoryList] = useState([]);
    const [isFetch, setIsFetch] = useState(false);

    const pointBoxObj = [
        {
            logo: githubImg,
            title: 'Spent Points',
            summary: 'Supporting by Repository',
            point: 1113,
            percent: 2.5
        },
        {
            logo: paypalImg,
            title: 'Earned Points',
            summary: 'Gained By Paypal',
            point: 2132,
            percent: 0.0
        },
        {
            logo: adImg,
            title: 'Earned Points',
            summary: 'Gained By Ads',
            point: 2132,
            percent: -1.7
        },        {
            logo: earnImg,
            title: 'Earned Points',
            summary: 'Gained By Sponsor',
            point: 2132,
            percent: 10.5
        },
    ];
    const pointHistoryObj = [
        {
            date: '2024.06.03 22:48:18',
            point: -213,
            username:'ambition-kwon',
            repository: 'PreFlightCheck',
            status: 'IN PROGRESS'
        },
        {
            date: '2024.06.03 22:48:18',
            point: -213,
            username:'ambition-kwon',
            repository: 'PreFlightCheck',
            status: 'Completed'
        },
        {
            date: '2024.06.03 22:48:18',
            point: -213,
            username:'ambition-kwon',
            repository: 'PreFlightCheck',
            status: 'Completed'
        },
        {
            date: '2024.06.03 22:48:18',
            point: -213,
            username:'ambition-kwon',
            repository: 'PreFlightCheck',
            status: 'IN PROGRESS'
        },
        {
            date: '2024.06.03 22:48:18',
            point: -213,
            username:'ambition-kwon',
            repository: 'PreFlightCheck',
            status: 'Completed'
        },
        {
            date: '2024.06.03 22:48:18',
            point: -213,
            username:'ambition-kwon',
            repository: 'PreFlightCheck',
            status: 'Completed'
        },
    ]

    useEffect(() => {
            fetch(`${process.env.REACT_APP_FETCH_URL}/api/history`, {method: 'GET'})
                .then(response => response.json())
                .then(json => {
                    setIsFetch(true)
                    setSummaryList(json)
                })
                .catch(error => {
                    setSummaryList(pointBoxObj)
                });
            fetch(`${process.env.REACT_APP_FETCH_URL}/api/summary`, {method: 'GET'})
                .then(response => response.json())
                .then(json => {
                    setIsFetch(true)
                    setHistoryList(json)
                })
                .catch(error => {
                    setHistoryList(pointHistoryObj)
                });
    }, [])

    return (
        <div className={styles['main-container']}>
            <div className={styles['summary-container']}>
                <div className={styles['header-container']}>
                    <div className={styles['header-text']}>Summary</div>
                    <div>
                        <div className={styles['charge-btn']}>PayPal Charge</div>
                    </div>
                </div>
                {/*<div className={styles['point-box']}>{pointBoxObj.map((obj, index) => (<PointBox key={index} img={obj.img} title={obj.title} content={obj.content} point={obj.point} profitRate={obj.profitRate} />))}*/}
                <div className={styles['point-box']}>{summaryList.map((value, index) => (<PointBox key={value.id} img={isFetch ? `${process.env.REACT_APP_FETCH_URL}${value.logo}` : `${value.logo}`} title={value.title} content={value.summary} point={value.point} profitRate={value.percent} />))}
                </div>
            </div>
            <div className={styles['history-container']}>
                <div className={styles['history-header']}>
                    <div className={styles['header-text']}>History</div>
                    <div className={styles['btn-container']}>
                        <div className={`${styles['btn']} ${styles['spent']}`}>Spent</div>
                        <div className={`${styles['btn']} ${styles['earned']}`}>Earned</div>
                    </div>
                </div>
                <div className={styles['history-table']}>
                    <div className={styles['table-header']}>
                        <div style={{ flex: 1 }}>DATE</div>
                        <div style={{ flex: 2 }}>POINTS</div>
                        <div style={{ flex: 2 }}>USERNAME / REPOSITORY</div>
                        <div style={{ flex: 1 }}>STATUS</div>
                    </div>
                    {/*<ul className={styles['table-body']}>*/}
                    {/*    {pointHistoryObj.map((obj, index) => (<PointHistoryBox key={index} date={obj.date} points={obj.points} username={obj.username} repository={obj.repository} status={obj.status} background={index % 2 === 0? '#161B22' : '#0E1116'}/> ))}*/}
                    {/*</ul>*/}
                    <ul className={styles['table-body']}>
                        {historyList.map((value, index) => (
                            <PointHistoryBox key={value.id} date={value.date} points={value.point} username={value.username}
                                             repository={value.repository} status={value.status}
                                             background={index % 2 === 0 ? '#161B22' : '#0E1116'} />))}
                    </ul>

                    <div className={styles['table-footer']}>
                        <div className={styles['show-more-btn']}>Show more results</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
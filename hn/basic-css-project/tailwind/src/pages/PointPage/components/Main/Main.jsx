import { useEffect, useState } from 'react'
import githubImg from '../../../../assets/img/github.svg'
import paypalImg from '../../../../assets/img/paypal.svg'
import adImg from '../../../../assets/img/ad.svg'
import earnImg from '../../../../assets/img/earn.svg'
import PointBox from '../Points-box/Points-box'
import PointHistoryBox from '../Point-history-box/Point-history-box'

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
        <section className='flex-1 bg-[#0d1117]'>
            <article className='summary-container flex flex-col py-12 px-2.5'>
                <div className='header-container flex justify-between'>
                    <div className='header-text text-2xl font-semibold text-white mb-4'>Summary</div>
                    <div>
                        <div className='charge-btn bg-[#C33D3D] text-white text-sm font-bold text-center py-1.5 px-2.5 border border-solid border-[#363B42] rounded-[5px] cursor-pointer'>PayPal Charge</div>
                    </div>
                </div>
                {/*<div className={styles['point-box']}>{pointBoxObj.map((obj, index) => (<PointBox key={index} img={obj.img} title={obj.title} content={obj.content} point={obj.point} profitRate={obj.profitRate} />))}*/}
                <div className='point-box flex justify-around'>{summaryList.map((value, index) => (<PointBox key={value.id} img={isFetch ? `${process.env.REACT_APP_FETCH_URL}${value.logo}` : `${value.logo}`} title={value.title} content={value.summary} point={value.point} profitRate={value.percent} />))}
                </div>
            </article>
            <article className='history-container text-white'>
                <div className='history-header flex justify-between px-2.5 pb-2.5'>
                    <div className='header-text text-2xl font-semibold text-white mb-4'>History</div>
                    <div className='btn-container flex items-center'>
                        <div className='bg-[#58A6FF] text-white/[0.7] rounded-md border border-solid border-[#363B42] py-1.5 px-5 mr-1.5 cursor-pointer'>Spent</div>
                        <div className='bg-[#21262D] text-white/[0.7] rounded-md border border-solid border-[#363B42] py-1.5 px-5 cursor-pointer'>Earned</div>
                    </div>
                </div>
                <div className='history-table'>
                    <div className='table-header flex text-[#A1AAB4] text-xs font-semibold text-center py-1'>
                        <div className="basis-[calc(100%/6*1)]">DATE</div>
                        <div className="basis-[calc(100%/6*2)]">POINTS</div>
                        <div className="basis-[calc(100%/6*2)]">USERNAME / REPOSITORY</div>
                        <div className="basis-[calc(100%/6*1)]">STATUS</div>
                    </div>
                    {/*<ul className={styles['table-body']}>*/}
                    {/*    {pointHistoryObj.map((obj, index) => (<PointHistoryBox key={index} date={obj.date} points={obj.points} username={obj.username} repository={obj.repository} status={obj.status} background={index % 2 === 0? '#161B22' : '#0E1116'}/> ))}*/}
                    {/*</ul>*/}
                    <ul className='table-body'>
                        {historyList.map((value, index) => (
                            <PointHistoryBox key={value.id} date={value.date} points={value.point} username={value.username}
                                             repository={value.repository} status={value.status}
                                             background={index % 2 === 0 ? '#161B22' : '#0E1116'} />))}
                    </ul>
                    <div className='table-footer flex justify-center'>
                        <p className='show-more-btn text-[#58A6FF] text-xs font-medium px-1.5 py-2.5'>Show more results</p>
                    </div>
                </div>
            </article>
        </section>
    )
}
import '../assets/css/left-aside.css'
import userIconImg from '../assets/img/user_icon.png'
import supportTierCard from '../assets/img/support_tier_card.png'
import contributionCalendar from '../assets/img/contribution_calendar.png'
import coinImg from '../assets/img/coin_img.png'

export default function LeftAside() {
	return (
		<>
			<div className="left-aside-container">
				<div className="profile-container">
					<div className="title-text">
						Profile
					</div>
					<div className="profile-box">

					<div className="user-icon-img">
						<img src={userIconImg} alt="user icon img"/>
					</div>
					<div className="user-info-box">
						<div className="user-info">
							<div className="username">
								권혁원
							</div>
							<div className="userid">
								ambition-kwon
							</div>
						</div>
						<div className="point-box">
							<div className="point-text">15.9 / 30.8 </div>
							<img className="coin-img" src={coinImg} alt=""/>
						</div>
					</div>
					</div>
				</div>
				<div className="divide-line"></div>
				<div className="support-tier-container">
					<div className="title-text">
						Support Tier
					</div>
					<div className="support-card">
						<img src={supportTierCard} alt="support tier card img"/>
					</div>
				</div>
				<div className="divide-line"></div>
				<div className="contribution-container">
					<div className="title-text">
						Contribution
					</div>
					<div className="contribution-calendar">
						<img src={contributionCalendar} alt="contribution calendar img"/>
					</div>
				</div>
			</div>
		</>
	)
}


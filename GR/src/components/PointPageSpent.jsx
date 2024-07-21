import React from "react";
import './PointPageSpent.css';
import userIcon from "../images/common/Frame.svg";
import Coin from "../images/PointPageSpent/Profile/image_16.svg"
import Tier from "../images/PointPageSpent/supportTier/Group_8.svg"
import Grass from "../images/PointPageSpent/Contributions/Group_9.svg"

export default function PointPageSpent() {
    return (
        <div class="container">
            <div class="sub-container">
                <div class="section">
                    <h5 style={{ color: 'white', margin: '22px 17px' }}>Profile</h5>
                        <div class="sub-section">
                            <img src={userIcon} style={{ width: '169px', height: '169px', margin: '0px 90px' }} />
                        </div>
                        <div class="sub-section">
                            <p style={{ color: '#C9D1D9', margin: '0px 49px', fontSize: '23px' }}>권혁원</p>
                            <p style={{ color: '#8B949E', margin: '0px 49px', fontSize: '18px' }}>ambition-kwon</p>
                        </div>
                        <div class="sub-section">
                            <p style={{ color: '#C9D1D9', margin: '0px 218px', fontSize: '12px' }}>15.9 / 30.8
                            <img src={Coin} style={{ margin: '-6px 3px' }} />
                            </p>
                        </div>
                </div>
                <div class="section">
                    <h5 style={{ color: 'white', margin: '22px 17px' }}>Support Tier</h5>
                        <div class="sub-section">
                            <img src={Tier} style={{ width: '251.27px', height: '148px', margin: '0px 49px' }} />
                        </div>
                </div>
                <div class="section">
                    <h5 style={{ color: 'white', margin: '22px 17px' }}>Contributions</h5>
                        <div class="sub-section">
                            <img src={Grass} style={{ width: '320px', height: '123.89px', margin: '0px 14px' }} />
                        </div>
                </div>
            </div>
            <div class="sub-container">
                <div class="section">
                    <h3 style={{ color: 'white', margin: '47px 10px' }}>Summary</h3>
                        <div class="sub-section">

                        </div>
                </div>
                <div class="section">
                    <h3 style={{ color: 'white', margin: '47px 10px' }}>History</h3>
                        <div class="sub-section">
                            
                        </div>
                </div>
            </div>
            <div class="sub-container">
                <h4 style={{ color: '#FFFFFFB8' }}>Your profile</h4>
                <h4 style={{ color: '#FFFFFFB8' }}>Your Repositories</h4>
                <h4 style={{ color: '#FFFFFFB8' }}>Your Links</h4>
                <h4 style={{ color: '#FFFFFFB8' }}>Your Points</h4>
                <h4 style={{ color: '#FFFFFFB8' }}>Your Ranks</h4>
                <h4 style={{ color: '#FFFFFFB8' }}>Opensource Licenses</h4>
                <h4 style={{ color: '#FF000087' }}>Log out</h4>
            </div>
        </div>
    );
}

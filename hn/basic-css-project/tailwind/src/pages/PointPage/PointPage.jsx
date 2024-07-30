// import './App.css';
import React from 'react';
import Header from '../../components/Header'
import LeftAside from '../../components/Left-aside'
import Main from './components/Main/Main'
import RightAside from '../../components/Right-aside'

function PointPage() {
    return (
            <>
            <Header />
            <main className="body-container flex">
                <LeftAside />
                <Main />
                <RightAside />
            </main>
            </>
    );
}

export default PointPage;

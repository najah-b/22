import { Link } from 'react-router';
import { useEffect, useRef } from 'react';

// Components
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Numbers() {

    const voiceHandle = (eve) => {
        let clickedID = eve.target.id;
        console.log(clickedID)
        const audio = new Audio(`${process.env.PUBLIC_URL}/Audio/Numbers/${clickedID}.mp3`)
        audio.play()
    }

    return (
        <div className="learn">
            <Header />

            <div className='subjects'>
                <div className='container' onClick={voiceHandle}>
                    <img src={require('../../Images/Voices/Numbers/number-1.png')} id='1' />
                    <img src={require('../../Images/Voices/Numbers/number-2.png')} id='2' />
                    <img src={require('../../Images/Voices/Numbers/number-3.png')} id='3' />
                    <img src={require('../../Images/Voices/Numbers/number-4.png')} id='4' />
                    <img src={require('../../Images/Voices/Numbers/number-5.png')} id='5' />
                    <img src={require('../../Images/Voices/Numbers/number-6.png')} id='6' />
                    <img src={require('../../Images/Voices/Numbers/number-7.png')} id='7' />
                    <img src={require('../../Images/Voices/Numbers/number-8.png')} id='8' />
                    <img src={require('../../Images/Voices/Numbers/number-9.png')} id='9' />
                    <img src={require('../../Images/Voices/Numbers/number-10.png')} id='10' />
                    <img src={require('../../Images/Voices/Numbers/number-11.png')} id='11' />
                    <img src={require('../../Images/Voices/Numbers/number-12.png')} id='12' />
                    <img src={require('../../Images/Voices/Numbers/number-13.png')} id='13' />
                    <img src={require('../../Images/Voices/Numbers/number-14.png')} id='14' />
                    <img src={require('../../Images/Voices/Numbers/number-15.png')} id='15' />
                    <img src={require('../../Images/Voices/Numbers/number-16.png')} id='16' />
                    <img src={require('../../Images/Voices/Numbers/number-17.png')} id='17' />
                    <img src={require('../../Images/Voices/Numbers/number-18.png')} id='18' />
                    <img src={require('../../Images/Voices/Numbers/number-19.png')} id='19' />
                    <img src={require('../../Images/Voices/Numbers/number-20.png')} id='20' />
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Numbers;
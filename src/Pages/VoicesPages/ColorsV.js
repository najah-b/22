import { Link } from 'react-router';
import { useEffect, useRef } from 'react';

// Components
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Colors() {

    const voiceHandle = (eve) => {
        let clickedID = eve.target.id;
        console.log(clickedID)
        const audio = new Audio(`${process.env.PUBLIC_URL}/Audio/Colors/${clickedID}.mp3`)
        audio.play()
    }

    return (
        <div className="learn">
            <Header />

            <div className='subjects colors'>
                <div className='container' id='con' onClick={voiceHandle}>
                    <img src={require('../../Images/Voices/Colors/red.png')} id='red'  />
                    <img src={require('../../Images/Voices/Colors/blue.png')} id='blue' />
                    <img src={require('../../Images/Voices/Colors/yellow.png')} id='yellow' />
                    <img src={require('../../Images/Voices/Colors/green.png')} id='green' />
                    <img src={require('../../Images/Voices/Colors/orange.png')} id='orange' />
                    <img src={require('../../Images/Voices/Colors/pink.png')} id='pink' />
                    <img src={require('../../Images/Voices/Colors/purple.png')} id='purple' />
                    <img src={require('../../Images/Voices/Colors/white.png')} id='white' />
                    <img src={require('../../Images/Voices/Colors/black.png')} id='black' />
                    <img src={require('../../Images/Voices/Colors/brown.png')} id='brown' />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Colors;
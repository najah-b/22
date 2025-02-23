import { Link } from 'react-router';
import { useEffect, useRef } from 'react';

// Components
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Verbs() {

    const voiceHandle = (eve) => {
        let clickedID = eve.target.id;
        console.log(clickedID)
        const audio = new Audio(`${process.env.PUBLIC_URL}/Audio/Verbs/${clickedID}.mp3`)
        audio.play()
    }

    return (
        <div className="learn">
            <Header />

            <div className='subjects verbs'>
                <div className='container' id='con' onClick={voiceHandle}>
                    <img src={require('../../Images/Voices/Verbs/drink.png')} id='drink'  />
                    <img src={require('../../Images/Voices/Verbs/eat.png')} id='eat'  />
                    <img src={require('../../Images/Voices/Verbs/jump.png')} id='jump'  />
                    <img src={require('../../Images/Voices/Verbs/walk.png')} id='walk'  />
                    <img src={require('../../Images/Voices/Verbs/run.png')} id='run'  />
                    <img src={require('../../Images/Voices/Verbs/cry.png')} id='cry'  />
                    <img src={require('../../Images/Voices/Verbs/laugh.png')} id='laugh'  />
                    <img src={require('../../Images/Voices/Verbs/sing.png')} id='sing'  />
                    <img src={require('../../Images/Voices/Verbs/sleep.png')} id='sleep'  />
                    <img src={require('../../Images/Voices/Verbs/swim.png')} id='swim'  />
                    <img src={require('../../Images/Voices/Verbs/whistle.png')} id='whistle'  />
                    <img src={require('../../Images/Voices/Verbs/read.png')} id='read'  />
                    <img src={require('../../Images/Voices/Verbs/sitdown.png')} id='sitdown'  />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Verbs;
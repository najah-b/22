import { Link } from 'react-router';
import { useEffect, useRef } from 'react';

// Components
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function AdjectivesV() {

    const voiceHandle = (eve) => {
        let clickedID = eve.target.id;
        console.log(clickedID)
        const audio = new Audio(`${process.env.PUBLIC_URL}/Audio/Adjectives/${clickedID}.mp3`)
        audio.play()
    }

    return (
        <div className="learn">
            <Header />

            <div className='subjects adjectives'>
                <div className='container' id='con' onClick={voiceHandle}>
                    <img src={require('../../Images/Voices/Adjectives/big.png')} id='big'  />
                    <img src={require('../../Images/Voices/Adjectives/small.png')} id='small'  />
                    <img src={require('../../Images/Voices/Adjectives/funny.png')} id='funny'  />
                    <img src={require('../../Images/Voices/Adjectives/happy.png')} id='happy'  />
                    <img src={require('../../Images/Voices/Adjectives/sad.png')} id='sad'  />
                    <img src={require('../../Images/Voices/Adjectives/clever.png')} id='clever'  />
                    <img src={require('../../Images/Voices/Adjectives/kind.png')} id='kind'  />
                    <img src={require('../../Images/Voices/Adjectives/brave.png')} id='brave'  />
                    <img src={require('../../Images/Voices/Adjectives/short.png')} id='short'  />
                    <img src={require('../../Images/Voices/Adjectives/tall.png')} id='tall'  />
                    <img src={require('../../Images/Voices/Adjectives/young.png')} id='young'  />
                    <img src={require('../../Images/Voices/Adjectives/old.png')} id='old'  />
                    <img src={require('../../Images/Voices/Adjectives/ugly.png')} id='ugly'  />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AdjectivesV;
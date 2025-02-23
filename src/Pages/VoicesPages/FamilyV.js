import { Link } from 'react-router';
import { useEffect, useRef } from 'react';

// Components
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Family() {

    const voiceHandle = (eve) => {
        let clickedID = eve.target.id;
        console.log(clickedID)
        const audio = new Audio(`${process.env.PUBLIC_URL}/Audio/Family/${clickedID}.mp3`)
        audio.play()
    }

    return (
        <div className="learn">
            <Header />

            <div className='subjects family'>
                <div className='container' id='con' onClick={voiceHandle}>
                    <img src={require('../../Images/Voices/Family/family.png')} id='family'  />
                    <img src={require('../../Images/Voices/Family/mom.png')} id='mom'  />
                    <img src={require('../../Images/Voices/Family/dad.png')} id='dad'  />
                    <img src={require('../../Images/Voices/Family/baby.png')} id='baby'  />
                    <img src={require('../../Images/Voices/Family/twins.png')} id='twins'  />
                    <img src={require('../../Images/Voices/Family/sister.png')} id='sister'  />
                    <img src={require('../../Images/Voices/Family/brother.png')} id='brother'  />
                    <img src={require('../../Images/Voices/Family/grandpa.png')} id='grandpa'  />
                    <img src={require('../../Images/Voices/Family/grandma.png')} id='grandma'  />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Family;
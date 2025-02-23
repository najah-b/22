import { Link } from 'react-router';
import { useEffect, useRef } from 'react';

// Components
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Fruits() {

    const voiceHandle = (eve) => {
        let clickedID = eve.target.id;
        console.log(clickedID)
        const audio = new Audio(`${process.env.PUBLIC_URL}/Audio/Fruit/${clickedID}.mp3`)
        audio.play()
    }

    return (
        <div className="learn">
            <Header />

            <div className='subjects Fruit'>
                <div className='container' id='con' onClick={voiceHandle}>
                    <img src={require('../../Images/Voices/Fruit/apple.png')} id='apple'  />
                    <img src={require('../../Images/Voices/Fruit/banana.png')} id='banana'  />
                    <img src={require('../../Images/Voices/Fruit/peach.png')} id='peach'  />
                    <img src={require('../../Images/Voices/Fruit/orange.png')} id='orange'  />
                    <img src={require('../../Images/Voices/Fruit/pear.png')} id='pear'  />
                    <img src={require('../../Images/Voices/Fruit/pineapple.png')} id='pineapple'  />
                    <img src={require('../../Images/Voices/Fruit/cherry.png')} id='cherry'  />
                    <img src={require('../../Images/Voices/Fruit/grape.png')} id='grape'  />
                    <img src={require('../../Images/Voices/Fruit/avocado.png')} id='avocado'  />
                    <img src={require('../../Images/Voices/Fruit/lemon.png')} id='lemon'  />
                    <img src={require('../../Images/Voices/Fruit/lime.png')} id='lime'  />
                    <img src={require('../../Images/Voices/Fruit/strawberry.png')} id='strawberry'  />
                    <img src={require('../../Images/Voices/Fruit/watermelon.png')} id='watermelon'  />
                    <img src={require('../../Images/Voices/Fruit/kiwi.png')} id='kiwi'  />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Fruits;
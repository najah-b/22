import { Link } from 'react-router';
import { useEffect, useRef } from 'react';

// Components
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Animals() {

    const voiceHandle = (eve) => {
        let clickedID = eve.target.id;
        console.log(clickedID)
        const audio = new Audio(`${process.env.PUBLIC_URL}/Audio/Animals/${clickedID}.mp3`)
        audio.play()
    }

    return (
        <div className="learn">
            <Header />

            <div className='subjects animals'>
                <div className='container' id='con' onClick={voiceHandle}>
                    <img src={require('../../Images/Voices/Animals/dog.png')} id='dog'  />
                    <img src={require('../../Images/Voices/Animals/cat.png')} id='cat'  />
                    <img src={require('../../Images/Voices/Animals/cow.png')} id='cow'  />
                    <img src={require('../../Images/Voices/Animals/sheep.png')} id='sheep'  />
                    <img src={require('../../Images/Voices/Animals/donkey.png')} id='donkey'  />
                    <img src={require('../../Images/Voices/Animals/giraffe.png')} id='giraffe'  />
                    <img src={require('../../Images/Voices/Animals/monkey.png')} id='monkey'  />
                    <img src={require('../../Images/Voices/Animals/horse.png')} id='horse'  />
                    <img src={require('../../Images/Voices/Animals/camel.png')} id='camel'  />
                    <img src={require('../../Images/Voices/Animals/bird.png')} id='bird'  />
                    <img src={require('../../Images/Voices/Animals/parrot.png')} id='parrot'  />
                    <img src={require('../../Images/Voices/Animals/lion.png')} id='lion'  />
                    <img src={require('../../Images/Voices/Animals/bear.png')} id='bear'  />
                    <img src={require('../../Images/Voices/Animals/pig.png')} id='pig'  />
                    <img src={require('../../Images/Voices/Animals/crocodile.png')} id='crocodile'  />
                    <img src={require('../../Images/Voices/Animals/ant.png')} id='ant'  />
                    <img src={require('../../Images/Voices/Animals/bee.png')} id='bee'  />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Animals;
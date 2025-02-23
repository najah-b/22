import { Link } from 'react-router';
import { useEffect, useRef } from 'react';

// Components
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Letters() {

    const voiceHandle = (eve) => {
        let clickedID = eve.target.id;
        console.log(clickedID)
        const audio = new Audio(`${process.env.PUBLIC_URL}/Audio/Letters/${clickedID}.mp3`)
        audio.play()
    }

    return (
        <div className="learn">
            <Header />

            <div className='subjects'>
                <div className='container' id='con' onClick={voiceHandle}>
                    <img src={require('../../Images/Voices/Letters/letter-a.png')} id='a' />
                    <img src={require('../../Images/Voices/Letters/letter-b.png')} id='b' />
                    <img src={require('../../Images/Voices/Letters/letter-c.png')} id='c' />
                    <img src={require('../../Images/Voices/Letters/letter-d.png')} id='d' />
                    <img src={require('../../Images/Voices/Letters/letter-e.png')} id='e' />
                    <img src={require('../../Images/Voices/Letters/letter-f.png')} id='f' />
                    <img src={require('../../Images/Voices/Letters/letter-g.png')} id='g' />
                    <img src={require('../../Images/Voices/Letters/letter-h.png')} id='h' />
                    <img src={require('../../Images/Voices/Letters/letter-i.png')} id='i' />
                    <img src={require('../../Images/Voices/Letters/letter-j.png')} id='j' />
                    <img src={require('../../Images/Voices/Letters/letter-k.png')} id='k' />
                    <img src={require('../../Images/Voices/Letters/letter-l.png')} id='l' />
                    <img src={require('../../Images/Voices/Letters/letter-m.png')} id='m' />
                    <img src={require('../../Images/Voices/Letters/letter-n.png')} id='n' />
                    <img src={require('../../Images/Voices/Letters/letter-o.png')} id='o' />
                    <img src={require('../../Images/Voices/Letters/letter-p.png')} id='p' />
                    <img src={require('../../Images/Voices/Letters/letter-q.png')} id='q' />
                    <img src={require('../../Images/Voices/Letters/letter-r.png')} id='r' />
                    <img src={require('../../Images/Voices/Letters/letter-s.png')} id='s' />
                    <img src={require('../../Images/Voices/Letters/letter-t.png')} id='t' />
                    <img src={require('../../Images/Voices/Letters/letter-u.png')} id='u' />
                    <img src={require('../../Images/Voices/Letters/letter-v.png')} id='v' />
                    <img src={require('../../Images/Voices/Letters/letter-w.png')} id='w' />
                    <img src={require('../../Images/Voices/Letters/letter-x.png')} id='x' />
                    <img src={require('../../Images/Voices/Letters/letter-y.png')} id='y' />
                    <img src={require('../../Images/Voices/Letters/letter-z.png')} id='z' />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Letters;
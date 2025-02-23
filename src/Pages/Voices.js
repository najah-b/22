
// Components
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Voices() {
    return (
        <div className="voicesPage">
            <Header />

            <h1>What you want to learn today ?</h1>
            <div className='subjects'>
                <div className='container'>
                    <Link to={"/LettersV"}>
                        <div className='box'>
                            <h3>Letters</h3>
                            <img src={require('../Images/Voices/letters.png')} />
                        </div>
                    </Link>

                    <Link to={"/NumbersV"}>
                        <div className='box'>
                            <h3>Numbers</h3>
                            <img src={require('../Images/Voices/numbers.png')} />
                        </div>
                    </Link>

                    <Link to={"/ColorsV"}>
                        <div className='box'>
                            <h3>Colors</h3>
                            <img src={require('../Images/Voices/colors.png')} />
                        </div>
                    </Link>

                    <Link to={"/VerbsV"}>
                        <div className='box'>
                            <h3>Verbs</h3>
                            <img src={require('../Images/Voices/verbs.png')} />
                        </div>
                    </Link>

                    <Link to={"/AdjectivesV"}>
                        <div className='box'>
                            <h3>Adjectives</h3>
                            <img src={require('../Images/Voices/adjectives.png')} />
                        </div>
                    </Link>

                    <Link to={"/AnimalsV"}>
                        <div className='box'>
                            <h3>Animals</h3>
                            <img src={require('../Images/Voices/animal.png')} />
                        </div>
                    </Link>

                    <Link to={"/FamilyV"}>
                        <div className='box'>
                            <h3>Family</h3>
                            <img src={require('../Images/Voices/family.png')} />
                        </div>
                    </Link>

                    <Link to={"/FruitsV"}>
                        <div className='box'>
                            <h3> Fruits</h3>
                            <img src={require('../Images/Voices/fruits.png')} />
                        </div>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Voices;
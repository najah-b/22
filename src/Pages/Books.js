
// Components
import { Link } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


function Books() {
    return (
        <div className="books">
            <Header />

            <div className='container'>
            <div className='books-list'>
                <div className='book'>
                    <a href="https://pdf.usaid.gov/pdf_docs/PA00M87J.pdf" target="_blank">
                        <img src={require('../Images/Books/book1.png')} />
                    </a>
                </div>

                <div className='book'>
                    <a href="https://readastory.org.in/1st.pdf" target="_blank">
                        <img src={require('../Images/Books/book2.png')} />
                    </a>
                </div>

                <div className='book'>
                    <a href="https://teach.starfall.com/materials/books/learn-to-read/3-TinMan-by-Starfall.pdf" target="_blank">
                        <img src={require('../Images/Books/book3.png')} />
                    </a>
                </div>

                <div className='book'>
                    <a href="https://teach.starfall.com/materials/books/learn-to-read/13-Glory-by-Starfall.pdf" target="_blank">
                        <img src={require('../Images/Books/book4.png')} />
                    </a>
                </div>

                <div className='book'>
                    <a href="https://teach.starfall.com/materials/books/im-reading/Penguin-by-Starfall.pdf" target="_blank">
                        <img src={require('../Images/Books/book5.png')} />
                    </a>
                </div>

                <div className='book'>
                    <a href="https://teach.starfall.com/materials/books/im-reading/3Plays-by-Starfall.pdf" target="_blank">
                        <img src={require('../Images/Books/book6.png')} />
                    </a>
                </div>

                <div className='book'>
                    <a href="hhttps://teach.starfall.com/materials/books/grade23/sb1346_sun-and-moon.pdf" target="_blank">
                        <img src={require('../Images/Books/book7.png')} />
                    </a>
                </div>
            </div>
            </div>

            <Footer />
        </div>
    )
}

export default Books;
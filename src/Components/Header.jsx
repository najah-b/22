import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className='logo'>
                <img src={require('../Images/Logo/Logo1.png')} />
            </div>

            <div className="links">
                <ul>
                    <Link to={'/'}><li>الرئيسية</li></Link>
                </ul>

                <Link to={"/Login"} className="profile">
                    <img src={require('../Images/Icons/user.png')} />
                </Link>
            </div>
        </header>
    )
}

export default Header;
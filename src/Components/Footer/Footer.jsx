import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return <footer>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
        </nav>
    </footer>
}

export default Footer;
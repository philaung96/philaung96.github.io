import './Header.css';
import { Link } from 'react-router-dom';
import Home from '../Body/Home/Home';
import Projects from '../Body/Projects/Projects';
import About from '../Body/About/About';
import Resume from '../Body/Resume/Resume';

const Header = (props) => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to='/' element={<Home />}>
                        <li>HOME</li>
                    </Link>
                    <Link to='/projects' element={<Projects />}>
                        <li>PROJECTS</li>
                    </Link>
                    <Link to='/about' element={<About />}>
                        <li>ABOUT</li>
                    </Link>
                    {/* <Link to='/resume' element={<Resume />}>
                        <li>resume</li>
                    </Link> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

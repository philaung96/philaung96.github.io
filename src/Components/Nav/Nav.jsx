import './Nav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../Body/Home/Home';
import About from '../Body/About/About';
import Projects from '../Body/Projects/Projects';
import Resume from '../Body/Resume/Resume';

const Nav = () => {
    const [props, setIcon] = useState({
        icon: 'fas fa-bars fa-2x',
        display: 'none',
    });

    const toggleIcon = (icon) => {
        if (icon === 'fas fa-bars fa-2x')
            setIcon({
                icon: 'fas fa-times fa-2x',
                display: 'block',
            });
        else
            setIcon({
                icon: 'fas fa-bars fa-2x',
                display: 'none',
            });
    };

    return (
        <nav>
            <button id='nav-toggle' onClick={() => toggleIcon(props.icon)}>
                <i class={props.icon}></i>
            </button>
            <div id='nav-link' style={{ display: props.display }}>
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
                    <Link to='/resume' element={<Resume />}>
                        <li>RESUME</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;

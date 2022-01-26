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
                    <li>
                        <Link
                            to='/'
                            element={<Home />}
                            onClick={() => toggleIcon(props.icon)}
                        >
                            <h2>HOME</h2>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/projects'
                            element={<Projects />}
                            onClick={() => toggleIcon(props.icon)}
                        >
                            <h2>PROJECTS</h2>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/about'
                            element={<About />}
                            onClick={() => toggleIcon(props.icon)}
                        >
                            <h2>ABOUT</h2>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/resume'
                            element={<Resume />}
                            onClick={() => toggleIcon(props.icon)}
                        >
                            <h2>RESUME</h2>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;

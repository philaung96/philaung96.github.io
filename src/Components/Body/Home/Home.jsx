import './Home.css';
import { Link } from 'react-router-dom';
import Background from './Background/Background';

const Home = () => {
    return (
        <div>
            <Background />
            <div id='home-info'>
                <h1>Phil Aung</h1>
                <div id='ufo'></div>
                <p id='title'>Full Stack Developer</p>
                <button id='projects-link'>
                    <Link to='/projects'>
                        <p>projects</p>
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Home;

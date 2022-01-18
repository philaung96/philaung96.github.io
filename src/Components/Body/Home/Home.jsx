import './Home.css';
import { Link } from 'react-router-dom';
import Background from './Background/Background';

const Home = () => {
    return (
        <>
            <Background />
            <main id='home-info'>
                <h1>Phil Aung</h1>
                <div id='ufo'></div>
                <p>Full Stack Developer</p>
                <Link to='/projects'>
                    <button id='projects-link'>
                        <p>projects</p>
                    </button>
                </Link>
            </main>
        </>
    );
};

export default Home;

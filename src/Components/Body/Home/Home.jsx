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
                <button id='projects-link'>
                    <Link to='/projects'>
                        <p>projects</p>
                    </Link>
                </button>
            </main>
        </>
    );
};

export default Home;

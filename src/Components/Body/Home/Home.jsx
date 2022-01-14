import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <main>
            <section id='home-info'>
                <h1>Phil Aung</h1>
                <p>Full Stack Developer</p>
                <Link to='/projects'>
                    <button id='projects-link'>
                        <p>projects</p>
                    </button>
                </Link>
            </section>
        </main>
    );
};

export default Home;

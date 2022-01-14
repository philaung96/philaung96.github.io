import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const shootingStarsJsx = (num) => {
        return [...Array(num)].map((item, i) => (
            <span className='shooting_star' key={i}></span>
        ));
    };
    return (
        <main>
            <section id='space'>
                <div className='star'></div>
            </section>
            <section className='night'>{shootingStarsJsx(10)}</section>
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

import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    const shootingStarsJsx = (num) => {
        return [...Array(num)].map(item => <span class='shooting_star'></span>)
    }
    return <main>
        <section class='night'>
            {shootingStarsJsx(10)}
        </section>
        <div id='info'>
            <h1>PHIL AUNG</h1>
            <p>Full Stack Developer</p>
            <Link to='/projects'>
                <button id='projects-link'>PROJECTS</button>
            </Link>
        </div>
    </main>
}

export default Home
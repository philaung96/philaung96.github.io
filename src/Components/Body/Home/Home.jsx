import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return <main>
        <h1>PHIL AUNG</h1>
        <p>Full Stack Developer</p>
        <Link to='/projects'>
            <button id='projects-link'>PROJECTS</button>
        </Link>
    </main>
}

export default Home
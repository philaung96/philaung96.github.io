import './Body.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';

const Body = () => {
    return <body>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
        </Routes>
    </body>
}

export default Body;
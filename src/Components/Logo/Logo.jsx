import './Logo.css'
import Home from '../Body/Home/Home';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/' element={<Home />}>
            <div id='logo'></div>
        </Link>
    );
}

export default Logo
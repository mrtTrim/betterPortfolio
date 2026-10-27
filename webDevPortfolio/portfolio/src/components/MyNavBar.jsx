import {Link} from 'react-router-dom';

function MyNavBar() {
    return (
        <nav className='navBar' id="top">        
            <ul>
                <li>
                    <Link to='/' className='navLink'>Home</Link>
                </li>
                <li>
                    <Link to='/resume' className='navLink'>Resume</Link>
                </li>
                <li>
                    <Link to='/projects' className='navLink'>Projects</Link>
                </li>
                <li>
                     <Link to='/themes' className='navLink'>Themes</Link>
                </li>
            </ul>         
        </nav>
    )
}
export default MyNavBar;
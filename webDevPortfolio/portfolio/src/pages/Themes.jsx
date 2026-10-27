import MyNavBar from '../components/MyNavBar';
import Socials from '../components/Socials.jsx'



function Themes () {
    return (
        <div>
            <MyNavBar/>
            <h1>This feature is currently not available</h1>
            <p>and this is my personal website so its resource dump ground for the moment</p>
            <p>It's not meant to be pretty here</p>
            <a href='https://reactbits.dev/c/components/option-wheel?spacing=1.5&side=right&loop=true'>
                Wheel thing</a>
            <a href='https://www.youtube.com/watch?v=qi32YwjoN2U'>
                Route thing
            </a>
            <h1>to do list:</h1>
            <ul className='themesList'>
                <li></li>
                <li>Themes</li>
                <li>Look into bootstrap library for cards</li>
                <li>make cards run from an array or an actual db and for loop their creation</li>
                <li>do some more projects</li>
                <li>have main just be it's own component</li>
                <li>footer with socials links</li>
                <li>404 page</li>
                <li>preloaders?</li>
                <li>csssssss</li>
                <li>decide color scheme</li>
                <li>pick an acceptable palette</li>
                <li>flavicon</li>
                <li>socials would rather meet god than function as i want</li>
            </ul>


            <Socials/>
        </div>
    )
}
export default Themes;
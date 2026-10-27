import '../App.css'
import {Link} from 'react-router-dom';

//import BGTest from './BGTest.jsx'
import GhostFibers from '../component/GhostFibers';


function Hero() {
    return (
            <header className='heroSpace'>
                <div className='heroBox'>
                    <h1>Madelyn's Portfolio</h1>
                    <Link to='/resume' className='heroLink'>Resume &gt;&gt;</Link>
                </div>
                

                <div>
                    <div style={ {width: '100%', height: '600px', position: 'relative' }}>
                    <GhostFibers
                        glowColor="#f7eed2"
                        layers={3}
                        twist={1.2}
                        threads={72}
                        fiberStyle="dots"
                        depthOfField={0.85}
                        hoverEffect="focus"
                        intro
                        mouseInteraction={false}
                        lineColor="#ffffff"
                        secondaryColor="#bcdbff"
                        gradient="depth"
                        waves={1}
                        volume={0.7}
                        spread={1}
                        scale={1}
                        rotation={18}
                        perspective={0.65}
                        density={1}
                        thickness={1}
                        tips={0}
                        foldGlow={1}
                        speed={0.5}
                        flow={0.4}
                        rollSpeed={0.11}
                        focusDepth={0.05}
                        particles={0.5}
                        sparkle={0.5}
                        glow={0.8}
                        brightness={1}
                        vignette={0.3}
                        grain={0.06}
                        mouseStrength={1}
                        pulseOnClick
                        lightMode={false}
                        />
                    </div>
                </div>

            </header>
    )
}
export default Hero;
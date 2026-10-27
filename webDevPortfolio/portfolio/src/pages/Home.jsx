//import { useState } from 'react'
//import heroImg from './assets/hero.png'
import Hero from '../components/Hero.jsx'
import MyNavBar from '../components/MyNavBar.jsx'
import Card from '../components/Card.jsx'
import MyFooter from '../components/MyFooter.jsx'



function Home () {
    return (
        <div>
            <MyNavBar />
            <section> 
                <Hero />

            

            </section>
            <section id="spacer"></section>
            <main>
                <h2>Favorite Projects &gt; &gt;</h2>
                <div className='cardContainer'>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>    
            </main>
            <MyFooter/>
            

        </div>
    )
}
export default Home;
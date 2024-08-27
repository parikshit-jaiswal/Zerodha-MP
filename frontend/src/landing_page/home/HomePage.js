import React from 'react'
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Pricing from './Pricing';
import Education from './Education';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Ecosystem from './Ecosystem';
import Awards from './Awards';
function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Awards />
            <Ecosystem />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </>
    );
}

export default HomePage;
import React from 'react'
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Pricing from './Pricing';
import Education from './Education';

import Ecosystem from './Ecosystem';
import Awards from './Awards';
function HomePage() {
    return (
        <>
            <Hero />
            <Awards />
            <Ecosystem />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default HomePage;
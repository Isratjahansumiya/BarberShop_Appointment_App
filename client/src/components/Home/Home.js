import React from 'react';
import Cards from './Cards';
import Intro from './Intro';
import Services from './Services';
import Reviews from './Reviews';
import Footer from '../Shared/Footer';


const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <Cards></Cards>
            <Services></Services>
            <Reviews></Reviews>
            <Footer></Footer>

        </div>
    );
};

export default Home;
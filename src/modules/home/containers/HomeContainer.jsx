import React from 'react';
import HeroSection from "../components/HeroSection.jsx";
import AboutFastrackids from "../components/AboutFastrackids.jsx";
import HomeCards from "../components/HomeCards.jsx";

const HomeContainer = () => {
    return (
        <>
            <section>
                <HeroSection />
            </section>
            <section className='py-16'>
                <AboutFastrackids />
            </section>
            <section className='py-16 bg-gray-100'>
                <HomeCards />
            </section>
        </>
    );
};

export default HomeContainer;
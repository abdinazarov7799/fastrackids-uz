import React from 'react';
import HeroSection from "../components/HeroSection.jsx";
import AboutFastrackids from "../components/AboutFastrackids.jsx";
import HomeCards from "../components/HomeCards.jsx";
import LocationSection from "../components/LocationSection.jsx";
import Carousel from "../components/Carousel.jsx";
import OnlineCourses from "../components/OnlineCourses.jsx";

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
            <section className='py-16'>
                <LocationSection />
            </section>
            <section>
                <Carousel />
            </section>
            <section className='py-16'>
                <OnlineCourses />
            </section>
        </>
    );
};

export default HomeContainer;
import React from 'react';
import HeroSection from "../components/HeroSection.jsx";
import AboutFastrackids from "../components/AboutFastrackids.jsx";
import HomeCards from "../components/HomeCards.jsx";
import LocationSection from "../components/LocationSection.jsx";
import Carousel from "../components/Carousel.jsx";
import OnlineCourses from "../components/OnlineCourses.jsx";
import WhatIsFastrackids from "../components/WhatIsFastrackids.jsx";
import Container from "../../../components/Container.jsx";
import {useTranslation} from "react-i18next";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {Link} from "react-router-dom";
import bgImg from "../../../assets/images/FTK-Block5-1.webp";
import ProgramsSection from "../components/ProgramsSection.jsx";

const HomeContainer = () => {
    const { t } = useTranslation();
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
            <Container>
                <section className='border-t py-16'>
                    <WhatIsFastrackids/>
                </section>
            </Container>
            <section className='py-8 bg-orange text-white'>
                <Container>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-[26px] font-bold'>{t("Biz franchayzing bo'yicha hamkorlarni qidirmoqdamiz")}</h1>
                        <Link to={'/'}
                              className="flex items-center py-4 px-8 rounded-lg bg-purple hover:bg-white hover:text-purple transition">
                            <span className="mr-6">{t("Batafsil ma'lumot")}</span>
                            <FaArrowAltCircleRight />
                        </Link>
                    </div>
                </Container>
            </section>
            <section style={{backgroundImage: `url(${bgImg})`}} className='py-16 bg-cover bg-center'>
                <ProgramsSection />
            </section>
        </>
    );
};

export default HomeContainer;
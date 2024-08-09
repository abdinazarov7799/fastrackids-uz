import React from 'react';
import banner from '../../../assets/images/banner.jpg'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {FaArrowAltCircleRight} from "react-icons/fa";

const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <div
            className='min-h-[890px] w-full bg-cover bg-center flex items-end justify-center align-bottom space-x-4 pb-32'
            style={{ backgroundImage: `url(${banner})` }}
        >
            <Link to='/contact'
                  className='flex items-center justify-between bg-orange text-white hover:bg-white hover:text-purple p-4 rounded-lg transition'
            >
                <span className='mr-14'>{t("Farzandingizni ro'yxatdan o'tkazing")}</span>
                <FaArrowAltCircleRight/>
            </Link>
            <Link to='/locations'
                  className='flex items-center justify-between bg-white text-purple hover:bg-purple hover:text-white p-4 rounded-lg transition'
            >
                <span className='mr-14'>{t("Joylar")}</span>
                <FaArrowAltCircleRight/>
            </Link>
        </div>
    );
};

export default HeroSection;
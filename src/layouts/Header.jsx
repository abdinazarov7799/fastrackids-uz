import React from 'react';
import logo from '../assets/images/logo.png';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";
import {FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhoneAlt, FaYoutube} from "react-icons/fa";
import {Link} from "react-router-dom";

const Header = () => {
    const { t } = useTranslation();

    return (
        <header>
            <div className='bg-purple text-white'>
                <Container>
                    <div className="flex justify-between items-center">
                        <ul className="flex items-center divide-x divide-gray-500">
                            <li>
                                <button className="hover:bg-orange p-3 cursor-pointer">
                                    <FaFacebook style={{fontSize: 20}} />
                                </button>
                            </li>
                            <li>
                                <button className="hover:bg-orange p-3 cursor-pointer">
                                    <FaInstagram style={{fontSize: 20}} />
                                </button>
                            </li>
                            <li>
                                <button className="hover:bg-orange p-3 cursor-pointer">
                                    <FaYoutube style={{fontSize: 20}} />
                                </button>
                            </li>
                        </ul>
                        <div>
                            <ul className="flex items-center divide-x divide-gray-500">
                                <li>
                                    <button className="hover:bg-orange p-3 cursor-pointer flex items-center">
                                        <FaLocationArrow  style={{fontSize: 20}}/>
                                        <span className="ml-3">{t("Joylar")}</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:bg-orange p-3 cursor-pointer flex items-center">
                                        <FaEnvelope   style={{fontSize: 20}}/>
                                        <span className="ml-3">{t("contact@fastrackids.uz")}</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:bg-orange p-3 cursor-pointer flex items-center">
                                        <FaPhoneAlt style={{fontSize: 20}}/>
                                        <span className="ml-3">{t("+998 555 083 777")}</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='border-b-2 border-gray-50'>
                <Container>
                    <div className="flex justify-between items-center py-4">
                        <Link to="/">
                            <img src={logo} alt="logo" width={170} height={40}/>
                        </Link>
                        <div className='flex items-center space-x-8'>
                            <ul className='flex items-center space-x-6 font-medium'>
                                <li>
                                    <Link to="/about-us" className='border-b-2 border-transparent hover:border-b-2 hover:border-orange py-3 cursor-pointer'>
                                        {t("Biz haqimizda")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/courses" className='border-b-2 border-transparent hover:border-b-2 hover:border-orange py-3 cursor-pointer'>
                                        {t("kurslar")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className='border-b-2 border-transparent hover:border-b-2 hover:border-orange py-3 cursor-pointer'>
                                        {t("Joylar")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className='border-b-2 border-transparent hover:border-b-2 hover:border-orange py-3 cursor-pointer'>
                                        {t("Bloglar")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className='border-b-2 border-transparent hover:border-b-2 hover:border-orange py-3 cursor-pointer'>
                                        {t("Franshiza")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className='border-b-2 border-transparent hover:border-b-2 hover:border-orange py-3 cursor-pointer'>
                                        {t("Karyera")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className='border-b-2 border-transparent hover:border-b-2 hover:border-orange py-3 cursor-pointer'>
                                        {t("Aloqa")}
                                    </Link>
                                </li>
                            </ul>
                            <button className='bg-orange text-white rounded-lg p-4'>
                                {t("EPIF baholash")}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
}

export default Header;

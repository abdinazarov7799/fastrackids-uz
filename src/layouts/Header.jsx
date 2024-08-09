import React from 'react';
import logo from '../assets/images/logo.png';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";
import {FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhoneAlt, FaTelegram, FaYoutube} from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const { t } = useTranslation();
    const location = useLocation();

    const items = [
        {
            id: 1,
            label: "Biz haqimizda",
            url: "/about-us",
        },
        {
            id: 2,
            label: "Kurslar",
            url: "/courses",
        },
        {
            id: 3,
            label: "Joylar",
            url: "/locations",
        },
        {
            id: 4,
            label: "Bloglar",
            url: "/blogs",
        },
        {
            id: 5,
            label: "Franshiza",
            url: "/franchise",
        },
        {
            id: 6,
            label: "Karyera",
            url: "/careers",
        },
        {
            id: 7,
            label: "Aloqa",
            url: "/contact",
        }
    ]
    return (
        <header>
            <div className='bg-purple text-white'>
                <Container>
                    <div className="flex justify-between items-center">
                        <ul className="flex items-center divide-x divide-gray-500">
                            <li>
                                <button className="hover:bg-orange p-3">
                                    <FaFacebook style={{fontSize: 20}} />
                                </button>
                            </li>
                            <li>
                                <button className="hover:bg-orange p-3">
                                    <FaInstagram style={{fontSize: 20}} />
                                </button>
                            </li>
                            <li>
                                <button className="hover:bg-orange p-3">
                                    <FaTelegram style={{fontSize: 20}} />
                                </button>
                            </li>
                            <li>
                                <button className="hover:bg-orange p-3">
                                    <FaYoutube style={{fontSize: 20}} />
                                </button>
                            </li>
                        </ul>
                        <div>
                            <ul className="flex items-center divide-x divide-gray-500">
                                <li>
                                    <Link to="/locations" className="hover:bg-orange p-3 cursor-pointer flex items-center">
                                        <FaLocationArrow  style={{fontSize: 20}}/>
                                        <span className="ml-3">{t("Joylar")}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='mailto:contact@fastrackids.uz' className="hover:bg-orange p-3 cursor-pointer flex items-center">
                                        <FaEnvelope   style={{fontSize: 20}}/>
                                        <span className="ml-3">{t("contact@fastrackids.uz")}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='tel:+998555083777' className="hover:bg-orange p-3 cursor-pointer flex items-center">
                                        <FaPhoneAlt style={{fontSize: 20}}/>
                                        <span className="ml-3">{t("+998 555 083 777")}</span>
                                    </Link>
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
                                {
                                    items?.map(item => {
                                        return (
                                            <li key={item?.id}>
                                                <Link to={item?.url}
                                                      className={`border-b-2 ${location?.pathname === item?.url ? 'border-orange text-orange' : 'border-transparent'} hover:border-b-2 hover:border-orange hover:text-orange transition py-3 cursor-pointer`}>
                                                    {t(item?.label)}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <Link to='/test-your-child' className='bg-orange text-white rounded-lg p-4'>
                                {t("EPIF baholash")}
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
}

export default Header;

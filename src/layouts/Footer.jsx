import React from 'react';
import {useTranslation} from "react-i18next";
import Container from "../components/Container.jsx";
import {FaAngleDoubleRight, FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import {Link} from "react-router-dom";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="w-full bg-purple py-6 text-white">
            <Container>
                <div className='divide-y divide-gray-700 mt-5'>
                    <div className='grid grid-cols-12 mb-8'>
                        <h1 className='font-bold text-[39px] col-span-4'>{t("Axborot byulleteni")}</h1>
                        <form className="flex items-center col-span-8 space-x-3">
                            <input
                                type="email"
                                alt="e-mail-input"
                                placeholder={t("E-mail")}
                                className='outline-none p-4 rounded-lg w-full text-black'
                            />
                            <button className='bg-orange rounded-lg p-4 w-4/12' type={"submit"}>
                                {t("obuna bo'ldim")}
                            </button>
                        </form>
                    </div>
                    <div className='grid grid-cols-12 space-x-10 pt-8'>
                        <div className='col-span-4'>
                            <p className='border-b-2 border-orange text-[24px] pb-4'>
                                {t("FasTracKids ?")}
                            </p>
                            <p className='mt-5'>
                                {t("FasTracKids, 6 oylikdan 8 yoshgacha bo'lgan bolalar uchun qo'shimcha ta'lim bo'yicha jahon yetakchisi, eng murakkab ta'lim va tug'ma salohiyatni rivojlantirish dasturi orqali ularning qiziqishini rivojlantiradi.")}
                            </p>
                        </div>
                        <div className="col-span-4">
                            <p className='border-b-2 border-orange text-[24px] pb-4'>
                                {t("Foydali havolalar")}
                            </p>
                            <ul className='mt-5 space-y-3'>
                                <li>
                                    <Link to="/" className='flex items-center'>
                                        <FaAngleDoubleRight style={{fontSize: 15}}/>
                                        <span className="ml-3">{t("Uy")}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about-us" className='flex items-center'>
                                        <FaAngleDoubleRight style={{fontSize: 15}}/>
                                        <span className="ml-3">{t("Biz haqimizda")}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/careers" className='flex items-center'>
                                        <FaAngleDoubleRight style={{fontSize: 15}}/>
                                        <span className="ml-3">{t("Karyera")}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className='flex items-center'>
                                        <FaAngleDoubleRight style={{fontSize: 15}}/>
                                        <span className="ml-3">{t("Foydalanish shartlari")}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-4'>
                            <p className='border-b-2 border-orange text-[24px] pb-4'>
                                {t("Aloqa tafsilotlari")}
                            </p>
                            <ul className='mt-5 space-y-3'>
                                <li>
                                    <Link to="tel:+998555083777" className='flex items-center'>
                                        <FaPhoneAlt style={{fontSize: 15}}/>
                                        <span className="ml-3">{t("+998 555 083 777")}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="mailto:contact@fastrackids.uz" className='flex items-center'>
                                    <FaEnvelope   style={{fontSize: 15}}/>
                                        <span className="ml-3">{t("contact@fastrackids.uz")}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-8 pt-5 text-center'>
                        <p>
                            {t("Mualliflik huquqi © 2024 Fastrackids. Barcha huquqlar himoyalangan")}
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;

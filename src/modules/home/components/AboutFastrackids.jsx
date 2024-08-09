import React from 'react';
import {FaArrowAltCircleRight, FaArrowUp} from "react-icons/fa";
import Container from "../../../components/Container.jsx";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {MyImage} from "../../../services/utils/index.jsx";
import ftk from "../../../assets/images/ftk.jpg";

const AboutFastrackids = () => {
    const { t } = useTranslation();

    const ageRanges = [
        {
            label: "6 oy – 2 yil",
            color: "text-red-500",
            dotColor: "bg-red-500",
            path: "/"
        },
        {
            label: "2 yil – 4 yil",
            color: "text-yellow-500",
            dotColor: "bg-yellow-500",
            path: "/"
        },
        {
            label: "4 yil – 8 yil",
            color: "text-green-500",
            dotColor: "bg-green-500",
            path: "/"
        },
        {
            label: "8 yil – 10 yil",
            color: "text-gray-700",
            dotColor: "bg-gray-700",
            path: "/"
        },
        {
            label: "Ko'p kunlik dasturlar 2 yil – 6 yil",
            color: "text-red-500",
            dotColor: "bg-red-500",
            path: "/"
        }
    ];

    return (
        <Container>
            <div className='rounded-lg p-10 shadow-lg'>
                <h2 className='font-bold text-[26px] mb-6'>{t("Farzandingizning yoshini tanlang:")}</h2>
                <div className='relative flex justify-between items-center border-b-4 border-purple pb-10'>
                    {ageRanges?.map((range, index) => (
                        <div key={index} className='flex flex-col items-center'>
                            <Link
                                className={`font-semibold ${range.color} hover:text-white hover:${range.dotColor} py-2 px-4 rounded-lg transition`}
                                to={`/${range.path}`}
                            >
                                {range.label}
                            </Link>
                            <div className={`${range.dotColor} absolute bottom-[-13px] w-6 h-6 rounded-full flex justify-center items-center`}>
                                <FaArrowUp className={`text-white`}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-24 justify-center mt-16'>
                <div>
                    <MyImage image={{
                        alt: 'ftk',
                        src: ftk,
                        width: 400,
                        height: 480,
                        objectFit: 'cover',
                        borderRadius: 10,
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
                    }} />
                </div>
                <div className='w-2/4'>
                    <div className='mb-10'>
                        <h1 className='font-bold text-[26px]'>{t("Fastrackids haqida")}</h1>
                        <div className="border-b-4 border-orange w-28 mt-3"></div>
                    </div>
                    <p className='mb-5'>{t("FasTracKids, 6 oylikdan 8 yoshgacha bo'lgan bolalar uchun qo'shimcha ta'lim bo'yicha jahon yetakchisi, eng murakkab ta'lim va tug'ma salohiyatni rivojlantirish dasturi orqali ularning qiziqishini rivojlantiradi.")}</p>
                    <p>{t("Har bir bola o'ziga xos qobiliyat va iste'dodlarga ega bo'lib tug'iladi va bu har bir bolaning mahalliy salohiyatini rivojlantirish uchun optimal bo'lgan maksimal qabul qilish davri.")}</p>
                    <ul className='mt-12 mb-5 space-y-5'>
                       <li className='flex items-center'>
                           <FaArrowAltCircleRight className='text-xl' />
                           <span className='ml-3 font-semibold'>{t("Qo'shimcha ta'lim")}</span>
                       </li>
                        <li className='flex items-center'>
                           <FaArrowAltCircleRight className='text-xl' />
                           <span className='ml-3 font-semibold'>{t("Qiziqish")}</span>
                       </li>
                        <li className='flex items-center'>
                           <FaArrowAltCircleRight className='text-xl' />
                           <span className='ml-3 font-semibold'>{t("Uzluksiz o'rganish")}</span>
                       </li>
                    </ul>
                    <Link to='/about-us'
                          className='flex items-center justify-between bg-orange text-white hover:bg-purple p-4 rounded-lg transition'
                    >
                        <span className='mr-14'>{t("Batafsil ma'lumot")}</span>
                        <FaArrowAltCircleRight/>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default AboutFastrackids;
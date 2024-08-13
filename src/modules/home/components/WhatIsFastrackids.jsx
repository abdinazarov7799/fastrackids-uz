import React from 'react';
import {useTranslation} from "react-i18next";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {Link} from "react-router-dom";

const WhatIsFastrackids = () => {
    const { t } = useTranslation();
    return (
        <div className='flex justify-between items-center space-x-10'>
            <div className='w-1/2'>
                <div>
                    <h1 className='font-bold text-[26px]'>{t("FasTracKids nima?")}</h1>
                    <div className="border-b-4 border-orange w-44 mt-3"></div>
                </div>
                <p className='my-6'>
                    {t("Farzandingizga uni yorqin kelajakka tayyorlash uchun barcha imkoniyatlarni bering.")}
                </p>
                <p>
                    {t("FasTracKids dasturlari bolalarning kognitiv, hissiy va ijtimoiy ko'nikmalarini tabiiy va qiziqarli tarzda va barcha his-tuyg'ularini qo'llash orqali rivojlantiradi.")}
                </p>
                <Link to='/'
                      className="flex items-center justify-between mt-10 py-4 w-64 text-white px-8 bg-orange rounded-lg hover:bg-purple transition">
                    <span className="mr-6">{t("Batafsil ma'lumot")}</span>
                    <FaArrowAltCircleRight />
                </Link>
            </div>
            <div className='w-1/2'>
                <video className='w-full' controls>
                    <source src=""/>
                </video>
            </div>
        </div>
    );
};

export default WhatIsFastrackids;
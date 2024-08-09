import React from 'react';
import {FaEnvelope, FaPhoneVolume} from "react-icons/fa";
import {useTranslation} from "react-i18next";

const LocationCard = ({data}) => {
    const { t } = useTranslation();
    return (
        <div className='border rounded-lg p-5'>
            <h4 className='text-[18px] font-bold'>{data?.title}</h4>
            <p className='my-6'>{data?.description}</p>
            <button className='flex items-center w-full space-x-3'>
                <FaPhoneVolume style={{fontSize: 19}}/>
                <span className='mt-1'>{data?.phone}</span>
            </button>
            <button className='flex items-center w-full space-x-3 my-2'>
                <FaEnvelope style={{fontSize: 19}}/>
                <span className='mt-1'>{data?.email}</span>
            </button>
            <div className='grid grid-cols-2 gap-3 mt-6'>
                <button className='bg-purple text-white p-3 rounded-md'>
                    {t("Bosh ofisdagi kurslar")}
                </button>
                <button disabled={!data?.isActiveSummerCamps} className={`${data?.isActiveSummerCamps ? 'bg-orange' : 'bg-gray-400'} text-white p-3 rounded-md`}>
                    {t("Yozgi maktab")}
                </button>
            </div>
        </div>
    );
};

export default LocationCard;
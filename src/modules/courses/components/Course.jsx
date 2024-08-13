import React from 'react';
import {FaArrowAltCircleRight} from "react-icons/fa";
import {useTranslation} from "react-i18next";
import {MyImage} from "../../../services/utils/index.jsx";

const Course = ({course}) => {
    const { t } = useTranslation();
    return (
        <div className="my-4 flex items-center space-x-10 p-8" style={{backgroundColor: course?.bgColor}}>
            <div className='p-4 ml-3'>
                <MyImage image={{alt: course?.title, src: course?.icon, width: 120}}/>
            </div>
            <div className=''>
                <h4 className='text-[24px] font-medium'>{course?.title}</h4>
                <p className='mt-3 mb-5'>{course?.description}</p>
                <button
                    className="flex items-center py-2 text-white px-8 bg-purple rounded-lg hover:bg-orange transition">
                    <span className="mr-6">{t("Batafsil ma'lumot oling")}</span>
                    <FaArrowAltCircleRight />
                </button>
            </div>
        </div>
    );
};

export default Course;
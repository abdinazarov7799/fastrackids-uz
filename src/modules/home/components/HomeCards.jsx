import React from 'react';
import Container from "../../../components/Container.jsx";
import img1 from "../../../assets/images/FTK-afaceri.webp";
import img2 from "../../../assets/images/FTK-educatie.webp";
import img3 from "../../../assets/images/FTK-sprijin.webp";
import {MyImage} from "../../../services/utils/index.jsx";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const HomeCards = () => {
    const { t } = useTranslation();
    const items = [
        {
            id: 1,
            img: img1,
            title: "Ta'limning tasdiqlangan modeli",
            description: "40 ta mamlakatda 300 dan ortiq markazlar, har yili 35 000 ga yaqin talaba.",
            path: '/locations',
        },
        {
            id: 2,
            img: img2,
            title: "“Ha!” deb ayting. FasTracKids",
            description: "Farzandingiz muvaffaqiyatiga qanot berishni tanlang. Premium ta'limni tanlang!\n" +
                "Yil davomida istalgan vaqtda onlayn kurslarimizga yozilishingiz mumkin!",
            path: '/courses',
        },
        {
            id: 3,
            img: img3,
            title: "Ajoyib qo'llab-quvvatlash",
            description: "... ta'limga berilgan. Biz hayot uchun asosiy ko'nikmalarni rivojlantiramiz.",
            path: '/about-us',
        },
    ]
    return (
        <Container>
            <div className='grid grid-cols-3 gap-6'>
                {
                    items?.map(item => (
                        <div
                            key={item.id}
                            className='flex flex-col items-center text-center bg-white pt-6 px-8 pb-20 rounded-t-lg relative border-b-4 border-purple hover:border-orange transition'
                        >
                            <MyImage image={{
                                alt: item.title,
                                src: item.img,
                                height: 100,
                            }} />
                            <h1 className='font-bold text-[26px] mt-8'>{item.title}</h1>
                            <p className='my-8'>{item.description}</p>
                            <Link to={item.path}
                                  className='flex items-center justify-between bg-purple text-white hover:bg-orange py-4 px-8 rounded-lg transition  absolute bottom-6'
                            >
                                <span className='mr-14'>{t("Batafsil ma'lumot")}</span>
                                <FaArrowAltCircleRight/>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </Container>
    );
};

export default HomeCards;
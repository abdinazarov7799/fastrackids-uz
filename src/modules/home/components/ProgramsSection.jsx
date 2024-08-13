import React from 'react';
import Container from "../../../components/Container.jsx";
import {useTranslation} from "react-i18next";
import {MyImage} from "../../../services/utils/index.jsx";
import {Link} from "react-router-dom";
import {FaArrowAltCircleRight} from "react-icons/fa";
import img1 from "../../../assets/images/robotics-cubelets-logo.webp";
import img2 from "../../../assets/images/FTK-epif_copyh.webp";

const ProgramsSection = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <div className='mb-10 text-center'>
                <h1 className='font-bold text-[26px]'>{t("Farzandingiz uchun mos dasturni toping")}</h1>
                <p className='my-4'>{t("Biz har bir bola muvaffaqiyatga erishish potentsiali bilan tug'ilishiga ishonamiz. FasTracKids® dasturlari farzandingizning porloq kelajak uchun zarur bo'lgan umrbod ta'lim ko'nikmalarini rivojlantiradi!")}</p>
                <div className="border-b-4 border-orange w-72 mx-auto mt-3"></div>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <div
                    className='flex flex-col items-center text-center bg-white pt-6 px-8 pb-20 rounded-t-lg relative border-b-4 border-purple hover:border-orange transition'
                >
                    <MyImage image={{
                        alt: "img1",
                        src: img1,
                    }}/>
                    <p className='my-6'>{t("Fastrack Robotics - bu 4 yoshdan 8 yoshgacha bo'lgan bolalarga mo'ljallangan dastur bo'lib, u yosh talabalarni muhandislik, dasturlash va hisoblash fikrlash olami bilan tanishtirishga qaratilgan.")}</p>
                    <p className='mb-10'>{t("Farzandingiz yangi texnologik davrga tayyormi?")}</p>
                    <Link to={'/'}
                          className='flex items-center justify-between bg-purple text-white hover:bg-orange py-4 px-8 rounded-lg transition  absolute bottom-6'
                    >
                        <span className='mr-14'>{t("Batafsil ma'lumot")}</span>
                        <FaArrowAltCircleRight/>
                    </Link>
                </div>
                <div
                    className='flex flex-col items-center text-center bg-white pt-6 px-8 pb-20 rounded-t-lg relative border-b-4 border-purple hover:border-orange transition'
                >
                    <MyImage image={{
                        alt: 'img2',
                        src: img2,
                    }}/>
                    <p className='my-6'>{t("FasTracKids® da biz TOTAL bola rivojlanishiga ishonamiz. Gap sizning kichkintoyingiz aqlli bo'lishida emas, farzandingiz QANCHALIK aqlliligida!")}</p>
                    <p className='mb-10'>{t("Farzandingiz uchun baholashni rejalashtirish uchun eng yaqin FasTrackids markaziga qo'ng'iroq qiling!")}</p>
                    <Link to={'/'}
                          className='flex items-center justify-between bg-purple text-white hover:bg-orange py-4 px-8 rounded-lg transition  absolute bottom-6'
                    >
                        <span className='mr-14'>{t("Batafsil ma'lumot")}</span>
                        <FaArrowAltCircleRight/>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default ProgramsSection;
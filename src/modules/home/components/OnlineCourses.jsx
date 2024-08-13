import React from 'react';
import Container from "../../../components/Container.jsx";
import {useTranslation} from "react-i18next";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {Link} from "react-router-dom";

const OnlineCourses = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <div className='mb-10'>
                <h1 className='font-bold text-[26px] text-center'>{t("FasTracKids onlayn kurslari")}</h1>
                <div className="border-b-4 border-orange w-72 mx-auto mt-3"></div>
            </div>
            <div className='grid grid-cols-2 gap-16'>
                <div className='p-6 pb-32 space-y-5 relative border rounded-lg shadow-lg'>
                    <video className='w-full' height="240" controls>
                        <source src=""/>
                    </video>
                    <div>
                        <h1 className='font-normal text-[24px] '>{t("FasTracKids onlayn kurslari")}</h1>
                        <div className="border-b-4 border-orange w-24 mt-3"></div>
                    </div>
                    <p>
                        {t("Ushbu FasTrack dasturi ishtirokchilari o'n ikkita qiziqarli loyihada ishtirok etadilar, ular onlayn, o'qituvchi nazorati ostidagi, talabalarga yo'naltirilgan tadbirlarni o'z ichiga oladi: qanday qilib astronavt bo'lish, butun sinf teatr spektaklini boshqarish yoki sotish uchun mahsulot yaratish.")}
                    </p>
                    <p>
                        {t("Ushbu tadbirlar yoshlar ongida ijodkorlikni rivojlantirishga qaratilgan. Faol aql va tanalar kichik o'quvchilarga yangi narsalarni o'rganishdan xursand bo'lishga va doimo rivojlanishga yordam beradi.")}
                    </p>
                    <Link to={'/'}
                        className="flex items-center absolute bottom-8 py-4 text-white px-8 bg-orange rounded-lg hover:bg-purple transition">
                        <span className="mr-6">{t("Batafsil ma'lumot")}</span>
                        <FaArrowAltCircleRight />
                    </Link>
                </div>
                <div className='p-6 pb-32 space-y-5 relative border rounded-lg shadow-lg'>
                    <video className='w-full' height="240" controls>
                        <source src=""/>
                    </video>
                    <div>
                        <h1 className='font-normal text-[24px] '>{t("FasTracK ingliz tili")}</h1>
                        <div className="border-b-4 border-orange w-24 mt-3"></div>
                    </div>
                    <p>
                        {t("Chet tilini ravon o‘rganish uchun optimal vaqt 8 yoshga to‘lgunga qadar. FasTracKids-da biz o'qish, yozish va gapirish ko'nikmalariga e'tibor qaratish orqali talabalarga ingliz tilidan foydalanishda ishonch hosil qilishlariga yordam beramiz.")}
                    </p>
                    <p>
                        {t("Dastur oxirida bolalar ingliz tilidan foydalanishda mustahkam poydevorga ega bo‘ladilar.")}
                    </p>
                    <p>
                        {t("Bizning dasturimiz Kembrij boshlang'ich imtihoniga mos keladi, bu ko'plab ingliz tili akademiyalari yoki xalqaro maktablar uchun kirish talabidir.")}
                    </p>
                    <Link to={'/'}
                        className="flex items-center absolute bottom-8 py-4 text-white px-8 bg-orange rounded-lg hover:bg-purple transition">
                        <span className="mr-6">{t("Batafsil ma'lumot")}</span>
                        <FaArrowAltCircleRight />
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default OnlineCourses;
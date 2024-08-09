import React from 'react';
import Container from "../../../components/Container.jsx";
import {useTranslation} from "react-i18next";
import img1 from "../../../assets/images/ftk-testeaza-copilul.webp";
import img2 from "../../../assets/images/ftk-testeaza-copilul-2.webp";
import TestChildForm from "../components/TestChildForm.jsx";
import {MyImage} from "../../../services/utils/index.jsx";

const TestYourChildContainer = () => {
    const { t } = useTranslation();
    return (
        <>
            <Container>
                <div className='flex items-center justify-between py-16'>
                    <div className='w-1/2'>
                        <div>
                            <h1 className='text-[26px] font-bold '>{t("Farzandingiz daho!")}</h1>
                            <div className="border-b-4 border-orange w-16 mt-3"></div>
                        </div>
                        <div>
                            <p className='mt-6 mb-4'>
                                {t("Farzandingiz daho. Siz uni aqlli deb so'rashingiz shart emas, lekin u qanchalik aqlli. Har bir bolaning o'ziga xos ta'lim uslubi bor, ular qanday qilib eng yaxshi o'rganishini belgilaydi. Misol uchun, agar u kinestetik o'rganuvchi bo'lsa, u to'pga urish yoki zinapoyaga chiqishda eng yaxshi hisoblashni o'rganadi. Agar u musiqiy/ritmik talaba bo'lsa, u she'r yoki qo'shiq yordamida hisoblashni o'rganadi.")}
                            </p>
                            <p>
                                {t("Farzandingizning rivojlanishini qo'llab-quvvatlash uchun siz uning qanday o'rganishini bilishingiz kerak. Shuning uchun FasTracKids ishlab chiqilgan")}
                            </p>
                        </div>
                    </div>
                    <MyImage image={{alt: 'img1', src: img1, width: 580}}/>
                </div>
            </Container>
            <Container>
                <div className='bg-purple text-white py-14 px-20 text-center'>
                    <h1 className='text-[26px] font-bold mb-8'>{t("FasTrack® o'rganish potentsialini baholash.")}</h1>
                    <p>{t("EPIF ota-onalar va o'qituvchilarga bolaning afzal ko'rgan o'rganish uslubini rivojlantirish imkoniyatini berish uchun ishlab chiqilgan va Govard Gardner tomonidan ko'p intellekt nazariyasi bo'yicha tadqiqotlari asosida ishlab chiqilgan.")}</p>
                </div>
            </Container>
            <Container>
                <div className='flex items-center justify-between py-16'>
                    <MyImage image={{alt: 'img2', src: img2, width: 580}}/>
                    <div className='w-1/2'>
                        <div>
                            <h1 className='text-[26px] font-bold'>{t("Bolani baholash jarayoni qanday amalga oshiriladi?")}</h1>
                            <div className="border-b-4 border-orange w-16 mt-3"></div>
                        </div>
                        <div>
                            <p className='my-6'>
                                {t("FasTracKids 30 daqiqalik oddiy baholash orqali bolangizning o'rganish uslubini aniqlashga yordam beradi. Zoom ilovasidan foydalangan holda, sertifikatlangan FasTracKids murabbiyi siz va farzandingiz bilan bir nechta maxsus tasvirlar yordamida oddiy va qiziqarli baho berish uchun ishlaydi. Oxirida siz bolangizning o'qishga bo'lgan afzalliklarini aniqlaydigan va bolangizni uyda qanday qo'llab-quvvatlash bo'yicha maslahat beradigan batafsil hisobot olasiz.")}
                            </p>
                            <p className='my-4'>
                                {t("Farzandingizni FasTracKids dasturiga yozmoqchi bo'lsangiz, bu ma'lumot o'qituvchilarga farzandingizning ta'lim salohiyatidan qanday foydalanishni tushunishga yordam beradi!\n" +
                                    "Bolaning erta rivojlanishi uchun bu imkoniyat juda cheklangan.")}
                            </p>
                            <p>
                                {t("Keling, farzandingizni maktabga va hayotga tayyorlashga yordam beramiz. Ushbu baholashga investitsiyalar 400 lei.")}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='bg-orange py-16 text-gray-800'>
                <Container>
                    <div>
                        <h1 className='text-[40px] font-bold text-center'>{t("EPIF testini ro'yxatdan o'tkazish")}</h1>
                        <div className="border-b-4 border-white w-1/6 mt-3 mx-auto"></div>
                    </div>
                    <TestChildForm />
                </Container>
            </div>
        </>
    );
};

export default TestYourChildContainer;
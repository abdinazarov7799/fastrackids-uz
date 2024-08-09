import React from 'react';
import {useTranslation} from "react-i18next";
import Container from "../../../components/Container.jsx";
import ftkFrancize from "../../../assets/images/ftk-francize.webp";
import ftkFrancize2 from "../../../assets/images/ftk-francize-2.jpg";
import ftkFrancize3 from "../../../assets/images/ftk-francize-3.webp";
import {Link} from "react-router-dom";
import Accordion from "../components/Accordion.jsx";
import {FaCheck, FaEnvelope, FaPhoneAlt, FaUser} from "react-icons/fa";
import BuyFranchiseForm from "../components/BuyFranchiseForm.jsx";
import {MyImage} from "../../../services/utils/index.jsx";

const FranchiseContainer = () => {
    const { t } = useTranslation();
    const items = [
        "Farzandlaringizni rivojlantirishga yordam berishni xohlaysiz.",
        "Siz hamjamiyatingizga qaytishni yoqtirasiz.",
        "Siz yangi odamlar bilan uchrashishni qulay his qilasiz.",
        "Siz yangi ko'nikmalar va biznes tizimlarini o'rganishga ochiqsiz.",
        "Siz iste'dodni tan olishingiz, uni tarbiyalashingiz va uni rag'batlantirishingiz mumkin.",
        "Sizni biznes boshlash va uni rivojlantirish g'oyasi shubha ostiga qo'yadi."
    ];

    return (
        <>
            <section className='bg-purple py-16'>
                <Container>
                    <div className='flex items-center justify-between text-white'>
                        <h3 className='font-bold text-[20px]'>
                            {t("Tadbirkorlikni ta'limga bo'lgan muhabbat bilan uyg'unlashtiring!")}
                        </h3>
                        <div className='grid grid-cols-2 gap-5 text-center'>
                            <Link to='/locations'
                                  className='bg-orange hover:bg-amber-600 transition py-6 px-12 rounded-lg'>
                                {t("Joylarni ko'ring")}
                            </Link>
                            <Link to="#buy-franchise" target={"_parent"}
                                className='border hover:bg-white hover:text-purple transition py-6 px-12 rounded-lg'>
                                {t("Franshizani sotib oling")}
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='py-16'>
                <Container>
                    <h2 className='text-[26px] font-bold text-center mx-auto max-w-6xl mb-16'>
                        {t("Bolalarga bo'lgan mehringiz sizni jamiyatda o'zgarishlar qilishga undaganda... FasTracKids bolalar ta'lim franshizasini oching!")}
                    </h2>
                    <div className='flex items-center justify-around'>
                        <div className='w-2/4 space-y-4'>
                            <p>
                                {t("FasTracKids, 6 oylikdan 8 yoshgacha bo'lgan bolalar uchun qo'shimcha ta'lim bo'yicha jahon yetakchisi, eng murakkab ta'lim va tug'ma salohiyatni rivojlantirish dasturi orqali ularning qiziqishini rivojlantiradi.")}
                            </p>
                            <p>
                                {t("FasTracKids nafaqat yuqori darajadagi ta'lim bo'yicha jahon yetakchisi, balki siz qo'shilishni xohlaydigan biznes modelidir. Siz ham o'z biznesingizni yuritishingiz va shaxsiy hayotingizda ham, o'zingiz mansub bo'lgan jamiyatda ham o'zgarishlar qilishingiz mumkin, FasTracKids - bu haqiqiy imkoniyat.")}
                            </p>
                            <h5 className='font-bold'>
                                {t("Tadbirkorlik ruhingizni oshiring va jamiyatda o'zgarishlar qiling!")}
                            </h5>
                            <p>
                                {t("FasTracKids franchayzasiga ega bo'lish sizga o'qituvchilik tajribangiz yoki bolalarga bo'lgan muhabbatingizdan unumli foydalanish va tadbirkorlik qobiliyatingizni namoyish qilish imkoniyati va vositalarini beradi.")}
                            </p>
                        </div>
                        <div>
                            <MyImage image={{alt: 'ftkFrancize', src: ftkFrancize, width: 450}}/>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='py-16 bg-gray-100'>
                <Container>
                    <div>
                        <h1 className='font-bold text-[26px]'>{t("Nima uchun FasTracKids franchayzasiga egalik qilasiz?")}</h1>
                        <div className="border-b-4 border-orange w-44 mt-3"></div>
                    </div>
                    <div>
                        <Accordion/>
                    </div>
                </Container>
            </section>
            <Container>
                <section className='py-16 flex items-center gap-24 justify-center'>
                    <div>
                        <MyImage image={{alt: 'ftkFrancize2', src: ftkFrancize2, width: 400}}/>
                    </div>
                    <div>
                        <div className='mb-10'>
                            <h1 className='font-bold text-[26px]'>{t("FasTracKids siz uchun yaxshi shartnoma, agar:")}</h1>
                            <div className="border-b-4 border-orange w-32 mt-3"></div>
                        </div>
                        <ul className="divide-y">
                            {items.map((item, index) => (
                                <li key={index} className="flex items-center py-3">
                                    <FaCheck className="mr-2 w-5"/>
                                    <span>{t(item)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </Container>
            <section className='bg-purple py-16'>
                <Container>
                    <div className='flex items-center justify-between text-white'>
                        <h3 className='font-bold text-[20px]'>
                            {t("Tadbirkorlikni ta'limga bo'lgan muhabbat bilan uyg'unlashtiring!")}
                        </h3>
                        <div className='grid grid-cols-2 gap-5 text-center'>
                            <Link to='/locations'
                                  className='bg-orange hover:bg-amber-600 transition py-6 px-12 rounded-lg'>
                                {t("Joylarni ko'ring")}
                            </Link>
                            <Link to='#buy-franchise' target="_parent"
                                className='border hover:bg-white hover:text-purple transition py-6 px-12 rounded-lg'>
                                {t("Franshizani sotib oling")}
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='py-16 border-b'>
                <Container>
                    <div className='mb-10 text-center'>
                        <h1 className='font-bold text-[26px]'>{t("Raqamlarda FasTracKids")}</h1>
                        <div className="border-b-4 border-orange w-32 mt-3 mx-auto"></div>
                    </div>
                    <div className='grid grid-cols-4 gap-5 text-center'>
                        <div>
                            <span className='text-[69px] font-bold text-orange'>300</span>
                            <p className='text-[19px]'>{t("Butun dunyo bo'ylab joylar")}</p>
                        </div>
                        <div>
                            <span className='text-[69px] font-bold text-orange'>0</span>
                            <p className='text-[19px]'>{t("O'zbekistondgai mini akademiyalar")}</p>
                        </div>
                        <div>
                            <span className='text-[69px] font-bold text-orange'>120 000</span>
                            <p className='text-[19px]'>{t("Bolalar har yili ro'yxatga olinadi")}</p>
                        </div>
                        <div>
                            <span className='text-[69px] font-bold text-orange'>12</span>
                            <p className='text-[19px]'>{t("Faoliyat yillari")}</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='py-16'>
                <Container>
                    <div className='mb-10 text-center'>
                        <h1 className='font-bold text-[26px]'>{t("Ta'lim biznesiga sarmoyangiz")}</h1>
                        <div className="border-b-4 border-orange w-32 mt-3 mx-auto"></div>
                    </div>
                    <div className='flex items-center justify-center gap-20'>
                        <div className='w-3/5'>
                            <h3 className='text-[26px] font-bold'>{t("Dastlabki investitsiyalar:")}</h3>
                            <div>
                                <h1 className='font-bold text-[48px] text-orange'>30 000 - 100 000 {t("dollar")}</h1>
                                <div className="border-b-4 border-orange w-24"></div>
                            </div>
                            <p className='my-8 leading-8'>{t("Ushbu imkoniyatdan manfaatdor shaxslar bu miqdorga franchayzing to'lovlari ham kiritilganligini yodda tutishlari kerak. Investitsiyaga ta'sir qilishi mumkin bo'lgan o'zgaruvchilardan ba'zilari:")}</p>
                            <ul className="divide-y mb-6">
                                <li className="flex items-center py-3">
                                    <FaCheck className="mr-3 w-5"/>
                                    <span>{t("Joylashuv hajmi va o'rnatish xarajatlari. Saytlar o'rtacha 500 m² ni tashkil qiladi va odatda tijorat fordlari bo'lgan hududlarda joylashgan.")}</span>
                                </li>
                                <li className="flex items-center py-3">
                                    <FaCheck className="mr-2 w-5"/>
                                    <span>{t("Dastlabki marketing xarajatlari.")}</span>
                                </li>
                                <li className="flex items-center py-3">
                                    <FaCheck className="mr-2 w-5"/>
                                    <span>{t("Yuridik, litsenziyalash va professional to'lovlar.")}</span>
                                </li>
                            </ul>
                            <p>{t("FasTracKids franchayzing hamkorlarini qidirmoqda, shuning uchun biz sizga bolalar diqqat markazida bo'lgan biznesda tadbirkor bo'lishingiz uchun to'liq yechimni taqdim etamiz. ")}</p>
                        </div>
                        <div>
                            <MyImage image={{alt: 'ftkFrancize3', src: ftkFrancize3, width: 450}}/>
                        </div>
                    </div>
                    <div className='border-t mt-16 pt-16'>
                        <div className='mb-8 text-center'>
                            <h1 className='font-bold text-[26px]'>{t("Aloqa ma'lumotlari")}</h1>
                            <div className="border-b-4 border-orange w-32 mt-3 mx-auto"></div>
                        </div>
                        <ul className="divide-y mb-6">
                            <li className="flex items-center justify-center py-3">
                                <FaUser className="mr-2 w-5"/>
                                <span>{t("O'zbekiston magistr franchayzeri – Toxir Raxmonov")}</span>
                            </li>
                            <li className="flex items-center justify-center py-3">
                                <FaEnvelope className="mr-2 w-5"/>
                                <span>toxir.raxmonov@fastrackids.uz</span>
                            </li>
                            <li className="flex items-center justify-center py-3">
                                <FaPhoneAlt className="mr-2 w-5"/>
                                <span>+998 ** *** ** **</span>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
            <section className='py-16 bg-orange' id='buy-franchise'>
                <Container>
                    <div className='mb-5 text-center'>
                        <h1 className='font-bold text-[40px]'>{t("Franchise sotib oling")}</h1>
                        <div className="border-b-4 border-black w-32 mt-3 mx-auto"></div>
                    </div>
                    <BuyFranchiseForm/>
                </Container>
            </section>
        </>
    );
};

export default FranchiseContainer;
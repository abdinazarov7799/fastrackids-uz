import React from 'react';
import img1 from '../../../assets/images/ftk-despre-noi-educatie.webp';
import img2 from '../../../assets/images/ftk-despre-noi-curiozitate.webp';
import img3 from '../../../assets/images/ftk-despre-noi-invatare.webp';
import {useTranslation} from "react-i18next";
import Container from "../../../components/Container.jsx";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {MyImage} from "../../../services/utils/index.jsx";

const AboutUsContainer = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Container>
                <div className='flex items-center justify-between py-16'>
                    <div className='w-1/2'>
                        <div>
                            <h1 className='text-[26px] font-bold '>{t("Qo'shimcha ta'lim")}</h1>
                            <div className="border-b-4 border-orange w-16 mt-3"></div>
                        </div>
                        <div>
                            <p className='mt-6 mb-4'>
                                {t("FasTracKids, 6 oylikdan 8 yoshgacha bo'lgan bolalar uchun qo'shimcha ta'lim bo'yicha jahon yetakchisi, eng murakkab ta'lim va tug'ma salohiyatni rivojlantirish dasturi orqali ularning qiziqishini rivojlantiradi.")}
                            </p>
                            <p>
                                {t("Har bir bola o'ziga xos qobiliyat va iste'dodlarga ega bo'lib tug'iladi va bu har bir bolaning mahalliy salohiyatini rivojlantirish uchun optimal bo'lgan maksimal qabul qilish davri.")}
                            </p>
                        </div>
                    </div>
                    <MyImage image={{alt: 'img1', src: img1, width: 580}}/>
                </div>
            </Container>
            <div className='bg-gray-100 py-16'>
                <Container>
                    <div className='flex items-center justify-between'>
                        <MyImage image={{alt: 'img2', src: img2, width: 580}}/>
                        <div className='w-1/2'>
                            <div>
                                <h1 className='text-[26px] font-bold '>{t("Qiziqish")}</h1>
                                <div className="border-b-4 border-orange w-16 mt-3"></div>
                            </div>
                            <div>
                                <p className='mt-6 mb-4'>
                                    <b className='mr-2'>{t("1998 yildan beri faoliyat yuritayotgan dasturlarimiz FasTrack® afzalliklari")}</b>
                                    {t("orqali bolaning tug'ma qiziqishini uyg'otadi  :")}
                                </p>
                                <ul className='list-disc pl-8 mb-4'>
                                    <li>
                                        {t("tanqidiy fikrlash qobiliyatlari")}
                                    </li>
                                    <li>
                                        {t("ijodkorlik")}
                                    </li>
                                    <li>
                                        {t("aloqa")}
                                    </li>
                                    <li>
                                        {t("hamkorlik")}
                                    </li>
                                    <li>
                                        {t("ishonch")}
                                    </li>
                                </ul>
                                <p>
                                    {t("Biz 21-asrning dinamik talabasini yaratish uchun qiziqarli o'quv dasturini qiziqarli va hamkorlikdagi ish muhiti bilan birlashtiramiz. Bizning maqsadimiz farzandingizga umrbod ta'lim olishga ishtiyoqni rivojlantirish bilan birga, NIMA o'ylashni emas, QANDAY fikrlashni o'rgatishdir.")}
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='flex items-center justify-between py-16'>
                    <div className='w-1/2'>
                        <div>
                            <h1 className='text-[26px] font-bold '>{t("Uzluksiz o'rganish")}</h1>
                            <div className="border-b-4 border-orange w-16 mt-3"></div>
                        </div>
                        <div>
                            <p className='mt-6 mb-4'>
                                {t("Nega umrbod ta'lim shunchalik muhim? Dunyo juda tez o'zgarmoqda. Taniqli yozuvchi va Garvard universiteti professori Toni Vagner o'zining \"Global ta'lim bo'shlig'i\" kitobida shunday deydi  :")}
                            </p>
                            <p className='italic'>
                                {t("“21-asrda omon qolish uchun zarur boʻlgan yettita koʻnikma quyidagilardan iborat: tanqidiy fikrlash va muammolarni hal qilish qobiliyati; turli tarmoqlarda hamkorlik qilish; chaqqonlik va moslashuvchanlik; tashabbuskorlik va ishbilarmonlik ruhi; samarali og'zaki va yozma muloqot; ma'lumotlarga kirish va tahlil qilish qobiliyati; qiziquvchanlik va tasavvurni rivojlantirish.\"")}
                            </p>
                        </div>
                    </div>
                    <MyImage image={{alt: 'img3', src: img3, width: 580}}/>
                </div>
            </Container>
            <div className='bg-orange text-white text-center py-16'>
                <Container>
                    <h3 className='text-[24px] font-bold w-9/12 mx-auto'>
                        {t("Agar bola hayotining ushbu bosqichida to'g'ri intellektual rag'batlantirilsa, uning IQ darajasi 25% gacha oshishi mumkinligini bilasizmi?")}
                    </h3>
                    <p className='w-9/12 mx-auto mt-5'>
                        {t("Keling, bir-birimiz bilan tanishaylik va farzandingizni doimiy o‘zgaruvchan ish muhitida raqobatbardosh bo‘la oladigan kuchli va mustaqil fikrlovchiga aylantiradigan ta’lim asoslarini birlashtiraylik.")}
                    </p>
                    <button className="flex items-center mx-auto mt-14 py-4 px-8 bg-purple rounded-lg hover:bg-white hover:text-black transition">
                        <span className="mr-6">{t("Batafsil ma'lumot oling")}</span>
                        <FaArrowAltCircleRight />
                    </button>
                </Container>
            </div>
        </div>
    );
};

export default AboutUsContainer;
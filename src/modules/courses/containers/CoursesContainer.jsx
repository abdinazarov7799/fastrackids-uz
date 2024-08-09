import React from 'react';
import {useTranslation} from "react-i18next";
import Container from "../../../components/Container.jsx";
import img1 from "../../../assets/images/ftk-programe.webp";
import img2 from "../../../assets/images/ftk-programe-2.webp";
import Courses from "../components/Courses.jsx";
import {MyImage} from "../../../services/utils/index.jsx";

const CoursesContainer = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Container>
                <div className='py-16 text-center text-[26px] font-bold w-10/12 mx-auto'>
                    <h3>{t("Biz har bir bola muvaffaqiyatga erishish potentsiali bilan tug'ilishiga ishonamiz. FasTracKids® dasturlari farzandingizning porloq kelajak uchun zarur bo'lgan umrbod ta'lim ko'nikmalarini rivojlantiradi!")}</h3>
                </div>
                <div className='flex items-center justify-between py-16'>
                    <MyImage image={{alt: 'img1', src: img1, width: 580}}/>
                    <div className='w-2/4'>
                        <p className='mt-6 mb-4'>
                            {t("Mutaxassislarning ta'kidlashicha, 21-asrda o'rganish qobiliyati juda muhim, " +
                                "FasTracKids metodologiyasi bu qobiliyatni bolani o'ziga qaram muhitga jalb qilish orqali rivojlantiradi. " +
                                "Bizning dasturlarimiz FasTrackning kuchli tomonlarini rivojlantirish orqali talabalarni quvontiradi: tanqidiy fikrlash, " +
                                "ijodkorlik, hamkorlik, muloqot va ishonch. Biz bolalarga NIMA o'ylashni emas, QANDAY o'ylashni o'rgatish bilan birga, yodlash emas, tushunishni o'rgatamiz.")}
                        </p>
                        <p>
                            {t("Har bir bola turlicha o'rganadi va sizning farzandingiz atrofdagi dunyoni " +
                                "tushunishda o'ziga xos afzalliklarga ega. Bizning metodologiyamiz bolangizga u " +
                                "muvaffaqiyatli rivojlanishi mumkin bo'lgan dinamik va faol ta'lim muhitida bo'lish imkoniyatini beradi. " +
                                "Biz Sokratdan Montessorigacha bo'lgan eng yaxshi ta'lim usullarini o'zimizning \"Ta'lim Zig-Zag\" " +
                                "usuli bilan birlashtiramiz. Bizning o'qituvchilarimiz farzandingizga multimedia o'quv dasturi, " +
                                "amaliy loyihalar va faol sinf muhokamalari orqali yo'l-yo'riq ko'rsatadi.")}
                        </p>
                    </div>
                </div>
            </Container>
            <div className='bg-gray-100 py-16'>
                <Container>
                    <div className='flex items-center justify-between py-16'>
                        <div className='w-1/2'>
                            <p className='mt-6 mb-4'>
                                {t("Biz ushbu dasturlarni farzandingiz rivojlanishining muhim davrida taklif " +
                                    "qilamiz. 0 yoshdan 8 yoshgacha bo'lgan davrda bola kognitiv, ijtimoiy va hissiy " +
                                    "jihatdan rivojlanadi. Bizning erta bolalik dasturlarimiz bolaning tabiiy rivojlanishini " +
                                    "kuzatib boradi va uning o'rganish qobiliyatini oshiradi. FasTracKids dasturlarining eng " +
                                    "muhim tarkibiy qismi shundaki, ular qiziqarli va maqsadli, ya'ni o'ziga jalb etilgan " +
                                    "bola va muvaffaqiyatli talaba yaratishdir.")}
                            </p>
                            <p>
                                {t("Siz qilishingiz mumkin bo'lgan eng yaxshi sarmoya - bu farzandingizning " +
                                    "ta'limiga. Biz farzandingizga uzluksiz o'rganishga bo'lgan ishtiyoqini ochishga " +
                                    "va ular hech qachon unutmaydigan tajriba yaratishga yordam bermoqchimiz!")}
                            </p>
                        </div>
                        <MyImage image={{alt: 'img2', src: img2, width: 580}}/>
                    </div>
                </Container>
            </div>
            <div className='py-16'>
                <Courses />
            </div>
        </div>
    );
};

export default CoursesContainer;
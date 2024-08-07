import React from 'react';
import {useTranslation} from "react-i18next";
import Container from "../../../components/Container.jsx";
import fastrack_signing from "../../../assets/icons/fastrack_signing_icon.webp";
import fastrack_camps from "../../../assets/icons/fastrack_camps_icon.webp";
import fastrack_discoverers from "../../../assets/icons/fastrack_discoverers_icon.webp";
import fastrack_english from "../../../assets/icons/fastrack_english_icon.webp";
import fastrack_explorers from "../../../assets/icons/fastrack_explorers_icon.webp";
import fastrack_fundamentals from "../../../assets/icons/fastrack_fundamentals_icon.webp";
import flask from "../../../assets/icons/flask.webp";
import tots from "../../../assets/icons/tots.webp";
import robots from "../../../assets/icons/robots.webp";
import Course from "./Course.jsx";

const Courses = () => {
    const { t } = useTranslation();
    const courses1 = [
        {
            id: 1,
            title: t("FasTrack® imzosi"),
            description: t("Farzandingiz nima deb o'ylayotganini hech o'ylab ko'rganmisiz? Yosh bolalarning ota-onalari sifatida biz bilamizki, ular gapirishdan oldin muloqot qilishlari mumkin. Bizning FasTrack Signing dasturimiz chaqalog'ingiz sizga aytmoqchi bo'lgan narsani odatdagi umidsizliksiz tushunishingizga yordam beradi."),
            icon: fastrack_signing,
            bgColor: "#fff1d6",
        },
        {
            id: 2,
            title: t("FasTrack® tadqiqotchilari"),
            description: t("Maktabgacha tarbiya tajribasi farzandingizning maktabga munosabatini aniqlashda muhim ahamiyatga ega. Farzandingiz uchun eng yaxshi birinchi maktab tajribasi FasTrack Explorers. O'rganishni boshlash uchun mustahkam poydevor qo'yishning tasdiqlangan usuli endi ko'p kunlik maktabgacha ta'lim dasturida mavjud."),
            icon: fastrack_explorers,
            bgColor: "#d6fffa",
        }
    ]
    const courses2 = [
        {
            id: 1,
            title: t("FasTrack® tadqiqotchilari"),
            description: t("Maktabgacha tarbiya tajribasi farzandingizning maktabga munosabatini aniqlashda muhim ahamiyatga ega. Farzandingiz uchun eng yaxshi birinchi maktab tajribasi FasTrack Explorers. O'rganishni boshlash uchun mustahkam poydevor qo'yishning tasdiqlangan usuli endi ko'p kunlik maktabgacha ta'lim dasturida mavjud."),
            icon: fastrack_explorers,
            bgColor: "#fff1d6",
        },
        {
            id: 2,
            title: t("FasTrack® Tots"),
            description: t("Farzandingiz yurishni, harakat qilishni va kulishni boshlaganda, u dunyoni o'rgana boshlaydi. Ikki yoshli bolalar o'z dunyosining chegaralarini o'rganadilar va sinab ko'radilar, barcha his-tuyg'ularini ishlatadilar va o'z xulosalarini chiqaradilar. Bizning FasTrack Tots kursimiz mustaqil o'rganish va do'stlar orttirish sari birinchi qadamni qo'yish orqali farzandingiz ehtiyojlarini qondirishga yordam beradi."),
            icon: tots,
            bgColor: "#d6fffa",
        },
        {
            id: 3,
            title: t("FasTrack® ingliz tili"),
            description: t("FasTrack English bolalarning ingliz tilidagi rivojlanishini tanitadi va qo‘llab-quvvatlaydi, bu ularning fikrlash tarzini va atrofdagi dunyo bilan o‘zaro munosabatini yaxshilaydi. Chet tilini ravon o‘rganish uchun optimal vaqt 8 yoshga to‘lgunga qadar."),
            icon: fastrack_english,
            bgColor: "#fff1d6",
        },
        {
            id: 4,
            title: t("FasTrack® lagerlari"),
            description: t("FasTracKids farzandingizga ta'til paytida ta'limdagi bo'shliqdan qochishga yordam beradigan qiziqarli kunduzgi lager tajribasini taklif qiladi. Oxirgi tadqiqotlar shuni ko'rsatadiki, o'qishdan \"tanaffus\" olgan talabalar deyarli 6 oylik o'qishni yo'qotishi mumkin! Bu ta'lim yo'qotish ular maktabni qayta boshlaganlarida jiddiy noqulaylik tug'diradi."),
            icon: fastrack_camps,
            bgColor: "#d6fffa",
        },
        {
            id: 5,
            title: t("FasTrack® Discoverers"),
            description: t("Bolalarda tadqiqot, tajriba va kashf qilish uchun tabiiy qiziqish bor. 3-5 yoshli bolalar uchun FasTrack Discoverers dasturimiz maktabgacha tarbiyachining qiziqishini uyg'otadigan va uni muvaffaqiyatga yo'naltiradigan qiziqarli ta'lim muhitini taqdim etadi."),
            icon: fastrack_explorers,
            bgColor: "#fff1d6",
        },
    ]
    const courses3 = [
        {
            id: 1,
            title: t("FasTrack® asoslari"),
            description: t("FasTrack Fundamentals dasturi farzandingizga 21-asrda muvaffaqiyatga erishish uchun zarur boʻlgan koʻnikmalarni berishning qiziqarli va interfaol usulidir. FasTrack Fundamentals 3 yoshdan boshlab bolalar uchun oʻrganishga muvozanatli yondashuvni taklif etadi. 8 yil."),
            icon: fastrack_fundamentals,
            bgColor: "#fff1d6",
        },
        {
            id: 2,
            title: t("FasTrack robototexnikasi"),
            description: t("Fastrack Robotics - bu 4 yoshdan 8 yoshgacha bo'lgan bolalarga mo'ljallangan dastur bo'lib, u yosh talabalarni muhandislik, dasturlash va hisoblash fikrlash olami bilan tanishtirishga qaratilgan.\n"),
            icon: robots,
            bgColor: "#d6fffa",
        },
        {
            id: 3,
            title: t("FasTrack® ingliz tili"),
            description: t("FasTrack English bolalarning ingliz tilidagi rivojlanishini tanitadi va qo‘llab-quvvatlaydi, bu ularning fikrlash tarzini va atrofdagi dunyo bilan o‘zaro munosabatini yaxshilaydi. Chet tilini ravon o‘rganish uchun optimal vaqt 8 yoshga to‘lgunga qadar."),
            icon: fastrack_english,
            bgColor: "#fff1d6",
        },
        {
            id: 4,
            title: t("FasTrack® Discoverers"),
            description: t("Bolalarda tadqiqot, tajriba va kashf qilish uchun tabiiy qiziqish bor. 3-5 yoshli bolalar uchun FasTrack Discoverers dasturimiz maktabgacha tarbiyachining qiziqishini uyg'otadigan va uni muvaffaqiyatga yo'naltiradigan qiziqarli ta'lim muhitini taqdim etadi."),
            icon: fastrack_discoverers,
            bgColor: "#d6fffa",
        },
        {
            id: 5,
            title: t("FasTrack® lagerlari"),
            description: t("FasTracKids farzandingizga ta'til paytida ta'limdagi bo'shliqdan qochishga yordam beradigan qiziqarli kunduzgi lager tajribasini taklif qiladi. Oxirgi tadqiqotlar shuni ko'rsatadiki, o'qishdan \"tanaffus\" olgan talabalar deyarli 6 oylik o'qishni yo'qotishi mumkin! Bu ta'lim yo'qotish ular maktabni qayta boshlaganlarida jiddiy noqulaylik tug'diradi.\n"),
            icon: fastrack_camps,
            bgColor: "#fff1d6",
        },
    ]
    const courses4 = [
        {
            id: 1,
            title: t("FasTrack fan"),
            description: t("Fan 5 yoshdan 9 yoshgacha bo'lgan bolalarga mo'ljallangan kurs bo'lib, STEM (Science, Technology, Engineering, Mathematics) qisqartmasi bilan eng yaxshi ifodalangan. Ushbu kurs turli tadbirlar va tajribalar orqali batafsil o'rganilgan va muhokama qilinadigan keng doiradagi mavzularni o'z ichiga oladi"),
            icon: flask,
            bgColor: "#fff1d6",
        },
        {
            id: 2,
            title: t("FasTrack® ingliz tili"),
            description: t("FasTrack English bolalarning ingliz tilidagi rivojlanishini tanitadi va qo‘llab-quvvatlaydi, bu ularning fikrlash tarzini va atrofdagi dunyo bilan o‘zaro munosabatini yaxshilaydi. Chet tilini ravon o‘rganish uchun optimal vaqt 8 yoshga to‘lgunga qadar."),
            icon: fastrack_english,
            bgColor: "#d6fffa",
        },
        {
            id: 3,
            title: t("FasTrack® lagerlari"),
            description: t("FasTracKids farzandingizga ta'til paytida ta'limdagi bo'shliqdan qochishga yordam beradigan qiziqarli kunduzgi lager tajribasini taklif qiladi. Oxirgi tadqiqotlar shuni ko'rsatadiki, o'qishdan \"tanaffus\" olgan talabalar deyarli 6 oylik o'qishni yo'qotishi mumkin! Bu ta'lim yo'qotish ular maktabni qayta boshlaganlarida jiddiy noqulaylik tug'diradi."),
            icon: fastrack_camps,
            bgColor: "#fff1d6",
        },
    ]
    const courses5 = [
        {
            id: 1,
            title: t("FasTrack® ko'p kunlik"),
            description: t("FasTrack Multiday - bu 1,8 yoshdan 6 yoshgacha bo'lgan bolalar uchun kundalik qiziqarli sarguzasht bo'lib, u amaliy mashg'ulotlar, muloqot, ommaviy nutq, til, lug'at va raqamlarga e'tiborni o'z ichiga oladi, bolalar muvozanatli va qiziqarli erta ta'lim oladilar."),
            icon: fastrack_camps,
            bgColor: "#d6fffa",
        },
    ]
    return (
        <Container>
            <h3 className='text-center font-bold text-[26px]'>{t("FasTracKids® ta'lim dasturlari")}</h3>
            <div>
                <h3 className='my-6 text-center font-bold text-[26px]'>{t("6 oy - 2 yil")}</h3>
                {
                    courses1?.map(course => {
                        return <Course course={course} key={course.id} />
                    })
                }
            </div>
            <div>
                <h3 className='mt-16 mb-6 text-center font-bold text-[26px]'>{t("2 yil - 4 yil")}</h3>
                {
                    courses2?.map(course => {
                        return <Course course={course} key={course.id} />
                    })
                }
            </div>
            <div>
                <h3 className='mt-16 mb-6 text-center font-bold text-[26px]'>{t("4 yil - 8 yil")}</h3>
                {
                    courses3?.map(course => {
                        return <Course course={course} key={course.id} />
                    })
                }
            </div>
            <div>
                <h3 className='mt-16 mb-6 text-center font-bold text-[26px]'>{t("8 yil - 10 yil")}</h3>
                {
                    courses4?.map(course => {
                        return <Course course={course} key={course.id} />
                    })
                }
            </div>
            <div>
                <h3 className='mt-16 mb-6 text-center font-bold text-[26px]'>{t("Ko'p kunlik dasturlar 2 yil - 6 yil")}</h3>
                {
                    courses5?.map(course => {
                        return <Course course={course} key={course.id} />
                    })
                }
            </div>
        </Container>
    );
};

export default Courses;
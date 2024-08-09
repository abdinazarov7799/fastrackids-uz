import React, { useState } from 'react';
import {useTranslation} from "react-i18next";

const items = [
    {
        id: 1,
        title: "Tasdiqlangan biznes modeli",
        content: "Ayni paytda dunyoning 50 ta mamlakatidagi 270 ta FasTracKids markazlari bolalarga yuqori darajadagi ta'lim berishda katta muvaffaqiyatlarga erishmoqda va ta'limning eng yaxshi modellarini taklif qilmoqda. Tadbirkorlar bolalarga bo'lgan muhabbat va ta'limni ishlaydigan biznes tizimi bilan birlashtiradi."
    },
    {
        id: 2,
        title: "Qo'llab-quvvatlash tizimi",
        content: "Siz o'zingiz uchun biznesdasiz, lekin yolg'iz emassiz. FasTracKids tizimi biznes egalari va o'qituvchilar uchun boshlang'ich treninglar orqali taqdim etilayotgan yordamni hamda faoliyat davomida Master Franchayzer va markazlar o'rtasidagi doimiy aloqani birlashtiradi."
    },
    {
        id: 3,
        title: "FasTracKids franshizasini ochish juda oson",
        content: "Siz bir necha hafta ichida o'zingizning yuqori darajadagi ta'lim bo'yicha mutaxassis maktabingizni ochishingiz mumkin. Sizga bolalarga juda ko'p muhabbat kerak, keyin pul va rivojlanayotgan biznesga ishtiyoq."
    },
    {
        id: 4,
        title: "Hamma narsa sizning qo'lingizda",
        content: "FasTracKids franchayzing egalari 6 oylikdan 8 yoshgacha bo'lgan bolalar uchun FasTracKids dasturlari portfelida sakkiz turdagi darslarni o'qitish uchun litsenziyaga ega. Bundan tashqari, ular FasTracKids patentlangan biznes tizimidan, jumladan marketing va ijtimoiy media vositalaridan, savdo skriptlaridan, mijozlar bilan aloqalar jarayonlaridan va biznesingizni ochish, yuritish va rivojlantirish uchun zarur bo'lgan boshqa resurslardan foydalanish huquqini oladi."
    },
    {
        id: 5,
        title: "Bugungi va ertangi ta'limga sarmoya kiriting",
        content: "Jahon darajasida ta'lim bozori tibbiy xizmatlardan keyin ikkinchi o'rinda turadi. O‘zingiz egalik qiladigan biznesingizdan tashqari, ta’lim tizimini takomillashtirish va bolalar salohiyatini oshirishga hissa qo‘shasiz."
    },
]

const AccordionItem = ({ title, content }) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-t border-gray-200">
            <button
                onClick={toggle}
                className={`flex justify-between items-center w-full p-4 ${isOpen && 'text-orange'}`}
            >
                <span className="font-medium text-[18px]">{t(title)}</span>
                <span className="text-2xl">{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && (
                <div className="px-4 pb-2">
                    <p className="text-gray-600">{t(content)}</p>
                </div>
            )}
        </div>
    );
};

const Accordion = () => {
    return (
        <div className=" mx-auto my-8 border border-gray-200 rounded-lg">
            {
                items?.map(item => (
                    <AccordionItem key={item.id} title={item.title} content={item.content} />
                ))
            }
        </div>
    );
};

export default Accordion;

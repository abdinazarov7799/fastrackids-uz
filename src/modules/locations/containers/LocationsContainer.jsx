import React from 'react';
import Container from "../../../components/Container.jsx";
import {useTranslation} from "react-i18next";
import LocationCard from "../components/LocationCard.jsx";

const LocationsContainer = () => {
    const { t } = useTranslation();
    const locations = [
        {
            id: 1,
            title: t("Toshkent"),
            description: "2 кв, улица Юнусабад дом 40, 100093, Tashkent, Oʻzbekiston",
            phone: "+998 95 870 3777",
            email: "fastrackids@fastrackids.uz",
            isActiveSummerCamps: true,
        },
        {
            id: 2,
            title: t("Toshkent"),
            description: "2 кв, улица Юнусабад дом 40, 100093, Tashkent, Oʻzbekiston",
            phone: "+998 95 870 3777",
            email: "fastrackids@fastrackids.uz",
            isActiveSummerCamps: false,
        },
        {
            id: 3,
            title: t("Toshkent"),
            description: "2 кв, улица Юнусабад дом 40, 100093, Tashkent, Oʻzbekiston",
            phone: "+998 95 870 3777",
            email: "fastrackids@fastrackids.uz",
            isActiveSummerCamps: true,
        },
        {
            id: 4,
            title: t("Toshkent"),
            description: "2 кв, улица Юнусабад дом 40, 100093, Tashkent, Oʻzbekiston",
            phone: "+998 95 870 3777",
            email: "fastrackids@fastrackids.uz",
            isActiveSummerCamps: false,
        },
        {
            id: 5,
            title: t("Toshkent"),
            description: "2 кв, улица Юнусабад дом 40, 100093, Tashkent, Oʻzbekiston",
            phone: "+998 95 870 3777",
            email: "fastrackids@fastrackids.uz",
            isActiveSummerCamps: true,
        },
    ]
    return (
        <Container>
            <div className='text-center my-16'>
                <h1 className='font-bold text-[26px]'>{t("O'zbekistondagi 1 ta FasTracKids mini-akademiyasi")}</h1>
                <p>{t("Dunyo bo'ylab 300 dan ortiq markazlar")}</p>
            </div>
            <div className='grid grid-cols-3 mb-10 gap-5'>
                {
                    locations?.map(location => {
                        return <LocationCard key={location.id} data={location} />
                    })
                }
            </div>
        </Container>
    );
};

export default LocationsContainer;
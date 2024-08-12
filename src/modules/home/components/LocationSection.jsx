import React from 'react';
import {useTranslation} from "react-i18next";
import Container from "../../../components/Container.jsx";
import LocationCard from "../../locations/components/LocationCard.jsx";
import {Link} from "react-router-dom";

const LocationSection = () => {
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
            isActiveSummerCamps: true,
        },
        {
            id: 3,
            title: t("Toshkent"),
            description: "2 кв, улица Юнусабад дом 40, 100093, Tashkent, Oʻzbekiston",
            phone: "+998 95 870 3777",
            email: "fastrackids@fastrackids.uz",
            isActiveSummerCamps: true,
        },
    ]

    return (
        <Container>
            <div className='mb-10'>
                <h1 className='font-bold text-[26px] text-center'>{t("Fastrackids Ruminiya manzillari")}</h1>
                <div className="border-b-4 border-orange w-72 mx-auto mt-3"></div>
            </div>
            <div className='grid grid-cols-3 mb-10 gap-5'>
                {
                    locations?.map(location => {
                        return <LocationCard key={location.id} data={location}/>
                    })
                }
            </div>
            <div className='w-full flex justify-center'>
                <Link to='/locations' className='p-4 text-white bg-purple hover:bg-orange transition rounded-lg'>
                    {t("Barcha mavjud joylarni ko'ring")}
                </Link>
            </div>
        </Container>
    );
};

export default LocationSection;
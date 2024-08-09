import React from 'react';
import Container from "../../../components/Container.jsx";
import {useTranslation} from "react-i18next";
import {FaEnvelope, FaEthernet, FaInfoCircle, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import {Link} from "react-router-dom";
import ContactForm from "../components/ContactForm.jsx";
import MapContainer from "./MapContainer.jsx";

const ContactContainer = () => {
    const { t } = useTranslation();
    return (
        <>
            <Container>
                <div className='grid grid-cols-2 py-16'>
                    <div>
                        <h3 className='font-bold text-[26px]'>
                            {t("Aloqa ma'lumotlari va qo'shimcha ma'lumotlar")}
                        </h3>
                        <ul>
                            <li>
                                <Link to='#' className="my-6 flex items-center">
                                    <FaPhoneAlt style={{fontSize: 20}}/>
                                    <span className="ml-3">{t("+998 555 083 777")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className="my-6 flex items-center">
                                    <FaEnvelope style={{fontSize: 20}}/>
                                    <span className="ml-3">{t("contact@fastrackids.uz")}</span>
                                </Link>
                            </li>
                            <li>
                                <div className="my-6 flex items-center">
                                    <FaEthernet style={{fontSize: 20}}/>
                                    <span className="ml-3">{t("Fastrackids ta'lim markazi uyushmasi")}</span>
                                </div>
                            </li>
                            <li>
                                <div className="my-6 flex items-center">
                                    <FaInfoCircle style={{fontSize: 20}}/>
                                    <span className="ml-3">{t("CIF: 00000000")}</span>
                                </div>
                            </li>
                            <li>
                                <Link
                                    to='https://www.google.com/maps/place/Fastrackids/@41.3597951,69.2804757,18.5z/data=!4m6!3m5!1s0x38ae8dd8f7f42b8b:0xbaaf0943e3045cc0!8m2!3d41.3596873!4d69.2802635!16s%2Fg%2F11sf4lm7gy?entry=ttu'
                                    className="my-6 flex items-center"
                                    target={"_blank"}
                                >
                                    <FaMapMarkerAlt style={{fontSize: 20}}/>
                                    <span
                                        className="ml-3">{t("2 кв, улица Юнусабад дом 40, 100093, Tashkent, Oʻzbekiston")}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ContactForm/>
                </div>
            </Container>
            <div>
                <MapContainer/>
            </div>
        </>
    );
};

export default ContactContainer;
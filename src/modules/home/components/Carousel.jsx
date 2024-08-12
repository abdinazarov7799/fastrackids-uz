import React, { useEffect, useState } from 'react';
import slide1 from "../../../assets/images/fastrack-imagini-slider-1.webp";
import slide2 from "../../../assets/images/fastrack-imagini-slider-2.webp";
import slide3 from "../../../assets/images/fastrack-imagini-slider-3.webp";
import slide4 from "../../../assets/images/fastrack-imagini-slider-4.webp";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [slide1, slide2, slide3, slide4,slide1, slide2, slide3, slide4];

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full mx-auto h-96">
            <div className="overflow-hidden h-full">
                <div
                    className="flex transition-transform duration-500 h-full space-x-2"
                    style={{ transform: `translateX(-${currentIndex * 30.1}%)` }}
                >
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    ))}
                </div>
            </div>

            <button
                onClick={goToPrevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-10 text-white p-2 rounded-full hover:bg-opacity-40"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={goToNextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-10 text-white p-2 rounded-full hover:bg-opacity-40"
            >
                <FaChevronRight />
            </button>
        </div>
    );
};

export default Carousel;

import React, {useEffect, useState} from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        'https://via.placeholder.com/800x200?text=Slide+1',
        'https://via.placeholder.com/800x200?text=Slide+2',
        'https://via.placeholder.com/800x200?text=Slide+3',
    ];

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
        <div className="relative w-full mx-auto h-52">
            <div className="overflow-hidden rounded-lg h-full">
                <div className="flex transition-transform duration-500 h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <img key={index} src={slide} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0 h-full object-cover" />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-3">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-14 h-1 mx-2 rounded-full ${index === currentIndex ? 'bg-gray' : 'bg-gray-light'} cursor-pointer`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

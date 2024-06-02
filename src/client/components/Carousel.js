import React, {useEffect, useState} from 'react';
import CarouselImage1 from "../../assets/1.jpeg";
import CarouselImage2 from "../../assets/2.jpeg";
import CarouselImage3 from "../../assets/3.jpeg";
import CarouselImage4 from "../../assets/4.jpeg";

const images = [
    CarouselImage1,
    CarouselImage2,
    CarouselImage3,
    CarouselImage4
];

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full p-4 max-w-lg">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt={`Slide ${index}`}
                        className={`absolute w-full h-full transition-opacity duration-1000 ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;

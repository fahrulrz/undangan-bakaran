'use client';

import { useEffect, useState } from "react";

const BackgroundChanger: React.FC = () => {
    const images = [
        '/images/image1.JPEG',
        '/images/image2.JPEG',
        '/images/image3.JPEG',
        '/images/image4.JPEG',
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000)

        return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
    }, [images.length]);


    return (
        <div
            style={{
                backgroundImage: `url(${images[currentIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
                transition: 'background-image 1s ease-in-out',
            }}
            className="absolute"
        >
            {/* <h1 className="text-white text-3xl text-center pt-20">
                Background Changer Example
            </h1> */}
        </div>
    );
}

export default BackgroundChanger;
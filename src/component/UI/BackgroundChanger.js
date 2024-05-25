import React, { useState, useEffect } from "react";
import image1 from "../../images/animegirl.webp";
import image2 from "../../images/anime2.jpg";
import image3 from "../../images/rengoku.png";



function BackgroundChanger({ children }) {
  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        transition: "background-image 1s ease-in-out",
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
      }}
      className="background fade-in flex min-h-screen flex-1 flex-col justify-center px-6 lg:px-8 "
    >
      {children}
    </div>
  );
}

export default BackgroundChanger;

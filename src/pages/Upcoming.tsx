import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageTransition from "../components/PageTransition";

interface ImageItem {
  src: string;
  title: string;
  caption: string;
}

const images: ImageItem[] = [
  {
    src: "assets/green.jpg",
    title: "DevSiddhi Green",
    caption: "Green Nature",
  },
  {
    src: "assets/fable.jpg",
    title: "DevSiddhi Fantasy",
    caption: "Fantasy Fable",
  },
  {
    src: "assets/felicia.jpg",
    title: "DevSiddhi Felicia",
    caption: "Felicia Portrait",
  },
  {
    src: "assets/Fabula.jpg",
    title: "DevSiddhi Fabula",
    caption: "Fabula Lights",
  },
];

const Upcoming: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    draggable: true,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <PageTransition>
      <div className="flex justify-center items-center p-6">
        <div className="text-4xl font-extrabold text-center text-[#B68842]">
          Upcoming / Running Projects
        </div>
      </div>
      <div className="overflow-hidden p-15 text-[#B68842]">
        <div className="flex justify-center items-center gap-10">
          <div className="flex flex-wrap items-center justify-center gap-10 w-full">
            {/* Slider */}
            <div className="w-[600px] h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Slider ref={sliderRef} {...settings}>
                {images.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-4 max-w-sm">
              <h2 className="text-3xl font-bold">
                {images[currentSlide].title}
              </h2>
              <p className="text-black">
                This is a brief overview of the project. It showcases some of
                the best work I've done using React, Tailwind, and other
                technologies.
              </p>
              <ul className="text-[#B68842] space-y-2">
                <li>
                  <strong>Client:</strong> {images[currentSlide].caption}
                </li>
              </ul>
            </div>

            {/* Arrows */}
            <div className="flex flex-col items-center gap-4">
              <button
                className="w-12 h-12 bg-[#B68842] rounded-full flex items-center justify-center text-white text-xl hover:bg-[#D12023]"
                onClick={() => sliderRef.current?.slickPrev()}
              >
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
              <button
                className="w-12 h-12 bg-[#B68842] rounded-full flex items-center justify-center text-white text-xl hover:bg-[#D12023]"
                onClick={() => sliderRef.current?.slickNext()}
              >
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Upcoming;

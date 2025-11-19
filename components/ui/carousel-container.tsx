import React, { ReactNode, useEffect, useRef, useState } from "react";
import CarouselSlide from "./carousel-slide";
import CarouselControls from "./caraousel-control";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Configuration
const SLIDE_WIDTH = 800;
const SLIDE_GAP = 20;
const AUTOPLAY_DELAY = 3000;

interface Props {
  datas: Array<any>;
  renderSlide: (data: any) => ReactNode;
}

function CarouselContainer({ renderSlide, datas }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<any>(null);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % datas.length);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? datas.length - 1 : prev - 1));

  const effectiveSlideWidth = containerWidth
    ? Math.min(SLIDE_WIDTH, containerWidth * 0.8)
    : SLIDE_WIDTH;

  // Calculate center position
  const getTranslateX = () => {
    if (!containerWidth) return 0;
    const effectiveSlideWidth = Math.min(SLIDE_WIDTH, containerWidth * 0.8);
    const centerOffset = containerWidth / 2;
    const halfSlide = effectiveSlideWidth / 2;
    const slideTotalWidth = effectiveSlideWidth + SLIDE_GAP;
    return centerOffset - halfSlide - activeIndex * slideTotalWidth;
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {

    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % datas.length);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(autoplayRef.current);
  }, [activeIndex]);

  return (
    <>
      <div
        className="flex-1 overflow-hidden relative w-full relative"
        ref={containerRef}
      >
         <button
          onClick={prevSlide}
          className="cursor-pointer p-3 z-10 left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 absolute rounded-full bg-white/50 text-primary hover:bg-primary hover:text-white transition-all shadow-lg group"
          aria-label="Previous Slide"
        >
          <ChevronLeft
            size={24}
            className=""
          />
        </button>
        <button
          onClick={nextSlide}
          className="cursor-pointer p-3 z-10 right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 absolute rounded-full bg-white/50 text-primary hover:bg-primary hover:text-white transition-all shadow-lg group"
          aria-label="Previous Slide"
        >
          <ChevronRight
            size={24}
            className=""
          />
        </button>
        <div
          className="flex items-center h-full transition-transform duration-700 ease-out will-change-transform"
          style={{
            transform: `translateX(${getTranslateX()}px)`,
            gap: `${SLIDE_GAP}px`,
          }}
        >
          {datas.map((data, i) => (
            <CarouselSlide
              key={i}
              isActive={i === activeIndex}
              width={effectiveSlideWidth}
              onClick={() => setActiveIndex(i)}
            >
              {renderSlide(data)}
            </CarouselSlide>
          ))}
        </div>
      </div>
      <CarouselControls
        totalSlides={datas.length}
        activeIndex={activeIndex}
        onJump={setActiveIndex}
      />
    </>
  );
}

export default CarouselContainer;

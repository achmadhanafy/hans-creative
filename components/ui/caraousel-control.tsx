interface Props {
  totalSlides: number;
  activeIndex: number;
  onJump: (index: number) => void;
}

const CarouselControls = ({
  totalSlides,
  activeIndex,
  onJump,
}: Props) => {
  return (
    <div className="mt-6 flex flex-col items-center space-y-6 z-20">
      {/* Dots */}
      <div className="flex items-center space-x-3">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onJump(idx)}
            className={`
              h-2 rounded-full transition-all duration-500
              ${
                idx === activeIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-slate-600 hover:bg-slate-500 cursor-pointer"
              }
            `}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselControls;

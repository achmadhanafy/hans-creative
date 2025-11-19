import { ReactNode } from "react";

interface Props {
  children: ReactNode
  isActive: boolean;
  width: number;
  onClick: () => void;
}

const CarouselSlide = ({ children, isActive, width, onClick }: Props) => {
  return (
    <div
      className={`
        relative shrink-0 rounded-2xl overflow-hidden transition-all duration-700 ease-out
        ${
          isActive
            ? "scale-100 opacity-100 blur-0 z-10"
            : "scale-[0.85] opacity-40 blur-[2px] grayscale-[30%] z-0 cursor-pointer"
        }
      `}
      style={{
        width: `${width}px`,
      }}
      onClick={onClick}
    >
        {children}
      {/* <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
      />

      <div
        className={`
        absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent 
        flex flex-col justify-end p-6 transition-opacity duration-500
        ${isActive ? "opacity-100" : "opacity-0"}
      `}
      >
        <h2 className="text-2xl font-bold mb-1">{slide.title}</h2>
        <span className="text-blue-400 text-sm font-medium mb-2">
          {slide.subtitle}
        </span>
        <p className="text-slate-300 text-sm line-clamp-2">
          {slide.description}
        </p>
      </div> */}
    </div>
  );
};

export default CarouselSlide;

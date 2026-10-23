import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PartnershipSlider({ partners }) {
  const total = partners.length;
  // Start from 'total' so there are always cards before and after for seamless looping
  const [currentIndex, setCurrentIndex] = useState(total);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive items per view
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  // Autoplay: slide 1 logo every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 >= total * 2 ? total : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < total ? total * 2 - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 >= total * 2 ? total : prev + 1));
  };

  // 4 duplicates ensure smooth infinite continuous visual flow
  const displayPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Viewport */}
      <div className="overflow-hidden py-4">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {displayPartners.map((p, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex flex-col items-center justify-center p-3 text-center select-none"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 flex items-center justify-center mb-3">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-xs sm:text-sm font-philosopher text-gray-800 font-semibold tracking-wide line-clamp-2 max-w-[180px]">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous Partner"
        className="absolute left-0 sm:-left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-500 hover:text-[#1b5f63] hover:scale-110 transition-all cursor-pointer"
      >
        <ChevronLeft className="w-7 h-7 stroke-[1.5]" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Partner"
        className="absolute right-0 sm:-right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-500 hover:text-[#1b5f63] hover:scale-110 transition-all cursor-pointer"
      >
        <ChevronRight className="w-7 h-7 stroke-[1.5]" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {partners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(total + i)}
            aria-label={`Ke logo ${i + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex % total === i
                ? 'w-2 h-2 bg-gray-800'
                : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

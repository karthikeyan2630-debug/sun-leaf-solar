import React from 'react';
import { SOLAR_IMAGES, COMPANY_INFO } from '../data/solarData';

interface HeroProps {
  onExploreClick: () => void;
  onConsultationClick: () => void;
  onOpenAiConsultant: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onConsultationClick,
  onOpenAiConsultant,
}) => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-[88px]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={SOLAR_IMAGES.heroBg}
          alt="Wide angle view of a massive industrial solar panel installation"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Dark blend overlay for optimal readability */}
        <div className="absolute inset-0 bg-[#001d31]/60 mix-blend-multiply" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 w-full flex flex-col items-start pt-16 md:pt-24 pb-28 md:pb-36">
        
        {/* ISO Badge & AI Helper button */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 shadow-sm">
            <span
              className="material-symbols-outlined text-[#99f98c] text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="font-mono-data text-xs md:text-sm text-[#f9f9fc] font-semibold tracking-wide">
              {COMPANY_INFO.isoBadge.split(' ')[0]} {COMPANY_INFO.isoBadge.split(' ')[1]} Certified
            </span>
          </div>

          <button
            onClick={onOpenAiConsultant}
            className="inline-flex items-center gap-2 bg-[#fd9412]/90 hover:bg-[#fd9412] text-[#2d1600] font-semibold text-xs md:text-sm px-4 py-2 rounded-full border border-white/30 transition-all shadow-md hover:shadow-lg cursor-pointer animate-pulse"
          >
            <span className="material-symbols-outlined text-[18px]">psychology</span>
            Ask AI Solar Engineer
          </button>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#f9f9fc] max-w-4xl mb-6 leading-[1.15] tracking-tight drop-shadow-lg">
          Engineering the <span className="text-[#ffdcc0] underline decoration-[#fd9412]/60 underline-offset-8">Future</span> of Solar Energy.
        </h1>

        {/* Body Description */}
        <p className="text-lg md:text-xl text-[#e8e8ea] max-w-2xl mb-10 drop-shadow-md font-normal leading-relaxed">
          Precision-grade solar solutions for industrial, commercial, and residential excellence. Built for durability, optimized for maximum yield.
        </p>

        {/* Glass Action Panel */}
        <div className="flex flex-wrap gap-4 glass-panel rounded-2xl p-3 md:p-4 inline-flex shadow-xl border border-white/40">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center justify-center bg-[#fd9412]/95 backdrop-blur-sm text-[#2d1600] font-semibold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4 rounded-xl hover:bg-[#8d4f00] hover:text-white transition-all shadow-md hover:shadow-lg border border-white/20 cursor-pointer"
          >
            Explore Systems
            <span className="material-symbols-outlined ml-2 text-[20px]">
              explore
            </span>
          </button>

          <button
            onClick={onConsultationClick}
            className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border-2 border-white/40 text-[#f9f9fc] font-semibold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4 rounded-xl hover:bg-white/20 transition-all cursor-pointer"
          >
            Technical Consultation
          </button>
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <button
        onClick={onExploreClick}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10 text-white/80 hover:text-white focus:outline-none cursor-pointer p-2"
        aria-label="Scroll to solutions"
      >
        <span className="material-symbols-outlined text-3xl md:text-4xl">
          keyboard_arrow_down
        </span>
      </button>
    </section>
  );
};

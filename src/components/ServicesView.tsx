import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/solarData';
import { ServiceItem } from '../types';

interface ServicesViewProps {
  onOpenQuoteModal: (initialData?: any) => void;
  onOpenEstimatorModal: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenQuoteModal,
  onOpenEstimatorModal,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(
    SERVICES_DATA[0]
  );

  return (
    <div className="pt-[100px] pb-24 px-6 md:px-12 max-w-[1280px] mx-auto min-h-screen">
      
      {/* Header Banner */}
      <div className="glass-panel p-8 md:p-12 rounded-3xl mb-12 border border-white/80 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[#006194] uppercase tracking-wider font-semibold">
              Engineering Expertise
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#004870] mt-1 mb-3">
              Solar Solutions & Services
            </h1>
            <p className="text-base md:text-lg text-[#3f4851] max-w-2xl">
              Turnkey engineering, procurement, construction (EPC), and operational maintenance tailored for maximum efficiency and return on investment.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenEstimatorModal}
              className="bg-[#006194]/10 text-[#006194] hover:bg-[#006194]/20 font-semibold px-5 py-3 rounded-xl border border-[#006194]/30 flex items-center gap-2 text-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">calculate</span>
              ROI Sizing Tool
            </button>
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-[#006194] hover:bg-[#004870] text-white font-semibold px-6 py-3 rounded-xl shadow-sm text-sm cursor-pointer"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>

      {/* Services Selector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Service Nav List (4 Cols) */}
        <div className="lg:col-span-4 space-y-3">
          {SERVICES_DATA.map((srv) => {
            const isSelected = selectedService.id === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className={`w-full text-left p-5 rounded-2xl transition-all border cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#004870] text-white border-[#004870] shadow-md'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`material-symbols-outlined ${
                        isSelected ? 'text-[#ffdcc0]' : 'text-[#006194]'
                      }`}
                    >
                      {srv.icon}
                    </span>
                    <h3 className="font-bold text-base md:text-lg">{srv.title}</h3>
                  </div>
                  <p
                    className={`text-xs ${
                      isSelected ? 'text-slate-200' : 'text-slate-500'
                    }`}
                  >
                    {srv.subtitle}
                  </p>
                </div>

                <span className="material-symbols-outlined text-sm opacity-60">
                  chevron_right
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Technical Specs (8 Cols) */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
              <img
                src={selectedService.imageUrl}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <span className="bg-[#fd9412] text-[#2d1600] font-mono font-bold text-xs px-3 py-1 rounded-md mb-1 inline-block">
                    {selectedService.capacityBadge}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedService.title}
                  </h2>
                </div>
                <span className="bg-white/30 backdrop-blur-md text-white font-mono text-xs px-3 py-1 rounded-md border border-white/40">
                  {selectedService.typeBadge}
                </span>
              </div>
            </div>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 font-normal">
              {selectedService.description}
            </p>

            {/* Technical Highlights */}
            <div className="mb-8">
              <h4 className="text-xs font-mono text-[#006194] uppercase tracking-wider font-semibold mb-3">
                Key Engineering Protocols
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedService.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-800"
                  >
                    <span className="material-symbols-outlined text-[#006c10] text-sm mt-0.5 shrink-0">
                      verified
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs Breakdown */}
            <div className="bg-[#004870]/5 p-5 rounded-2xl border border-[#004870]/20 mb-8">
              <h4 className="text-xs font-mono text-[#004870] uppercase tracking-wider font-semibold mb-3">
                ISO Technical Specifications
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Capacity Range:</span>
                  <span className="font-mono font-bold text-slate-800">
                    {selectedService.specs.maxCapacity}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Interconnect:</span>
                  <span className="font-mono font-bold text-slate-800">
                    {selectedService.specs.gridConnection}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Efficiency Rating:</span>
                  <span className="font-mono font-bold text-slate-800">
                    {selectedService.specs.efficiencyRating}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Warranty SLA:</span>
                  <span className="font-mono font-bold text-[#006c10]">
                    {selectedService.specs.warrantyYears}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              * Fully compliant with ISO 9001:2015 quality control & IEC standards.
            </span>
            <button
              onClick={() =>
                onOpenQuoteModal({
                  systemInterest: [selectedService.title],
                  additionalNotes: `Inquiry regarding ${selectedService.title} (${selectedService.capacityBadge})`,
                })
              }
              className="bg-[#006194] hover:bg-[#004870] text-white text-xs md:text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2"
            >
              Request Engineering Consultation
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

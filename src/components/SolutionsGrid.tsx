import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/solarData';
import { ServiceItem } from '../types';

interface SolutionsGridProps {
  onSelectService: (service: ServiceItem) => void;
  onScheduleAudit: () => void;
}

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({
  onSelectService,
  onScheduleAudit,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const industrial = SERVICES_DATA.find((s) => s.id === 'industrial')!;
  const residential = SERVICES_DATA.find((s) => s.id === 'residential')!;
  const agri = SERVICES_DATA.find((s) => s.id === 'agricultural')!;
  const om = SERVICES_DATA.find((s) => s.id === 'om-services')!;

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-pattern" id="solutions">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Title Glass Panel */}
        <div className="mb-14 text-center max-w-3xl mx-auto glass-panel px-8 md:px-12 py-8 rounded-3xl shadow-sm border border-white/60">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004870] mb-3 tracking-tight">
            Precision Solutions
          </h2>
          <p className="text-base md:text-lg text-[#3f4851] leading-relaxed">
            Engineered systems tailored to specific energy demands across all sectors.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Industrial Scale (Spans 2 cols on LG) */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl glass-panel card-hover flex flex-col border border-white/80 shadow-sm min-h-[380px]">
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img
                src={industrial.imageUrl}
                alt={industrial.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1e]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-white/20 backdrop-blur-md text-[#f9f9fc] font-mono-data text-xs px-3 py-1 rounded-md border border-white/40 shadow-sm font-semibold">
                  {industrial.capacityBadge}
                </span>
                <span className="bg-white/20 backdrop-blur-md text-[#f9f9fc] font-mono-data text-xs px-3 py-1 rounded-md border border-white/40 shadow-sm font-semibold">
                  {industrial.typeBadge}
                </span>
              </div>
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between bg-white/80 dark:bg-[#1a1c1e]/90 backdrop-blur-md border-t border-white/40">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-[#006194] text-2xl">
                    factory
                  </span>
                  <h3 className="text-xl font-bold text-[#004870]">
                    {industrial.title}
                  </h3>
                </div>
                <p className="text-[#3f4851] text-sm md:text-base leading-relaxed">
                  {industrial.description}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(industrial)}
                  className="inline-flex items-center text-[#fd9412] font-semibold text-sm hover:text-[#8d4f00] transition-colors cursor-pointer group/btn"
                >
                  View Specifications
                  <span className="material-symbols-outlined ml-1 text-[18px] group-hover/btn:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
                <span className="text-xs font-mono text-slate-500">ISO 9001 Tested</span>
              </div>
            </div>
          </div>

          {/* Card 2: Residential Excellence */}
          <div className="group relative overflow-hidden rounded-2xl glass-panel card-hover flex flex-col justify-between p-3 border border-white/80 shadow-sm">
            <div className="relative h-48 overflow-hidden rounded-xl">
              <img
                src={residential.imageUrl}
                alt={residential.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="material-symbols-outlined text-[#006194] text-2xl">
                    home
                  </span>
                  <h3 className="text-lg font-bold text-[#004870]">
                    {residential.title}
                  </h3>
                </div>
                <p className="text-[#3f4851] text-sm mb-4 leading-relaxed">
                  Aesthetic, high-efficiency systems for premium homes.
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="bg-white/60 backdrop-blur text-[#1a1c1e] font-mono-data text-xs px-2.5 py-1 rounded border border-white/80 font-semibold shadow-sm">
                  {residential.capacityBadge}
                </span>
                <button
                  onClick={() => onSelectService(residential)}
                  className="text-xs font-semibold text-[#006194] hover:underline cursor-pointer"
                >
                  Details &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Agri-Solar Pumps */}
          <div className="group relative overflow-hidden rounded-2xl glass-panel card-hover flex flex-col justify-between p-3 border border-white/80 shadow-sm">
            <div className="relative h-48 overflow-hidden rounded-xl">
              <img
                src={agri.imageUrl}
                alt={agri.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="material-symbols-outlined text-[#006194] text-2xl">
                    water_drop
                  </span>
                  <h3 className="text-lg font-bold text-[#004870]">
                    {agri.title}
                  </h3>
                </div>
                <p className="text-[#3f4851] text-sm mb-4 leading-relaxed">
                  Reliable off-grid irrigation solutions.
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="bg-white/60 backdrop-blur text-[#1a1c1e] font-mono-data text-xs px-2.5 py-1 rounded border border-white/80 font-semibold shadow-sm">
                  {agri.capacityBadge}
                </span>
                <button
                  onClick={() => onSelectService(agri)}
                  className="text-xs font-semibold text-[#006194] hover:underline cursor-pointer"
                >
                  Details &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: O&M Services (Spans 2 cols on LG) */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl glass-panel card-hover flex flex-col md:flex-row bg-white/40 p-3 border border-white/80 shadow-sm">
            <div className="w-full md:w-1/2 p-5 md:p-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#006194] text-3xl">
                  build_circle
                </span>
                <h3 className="text-2xl font-bold text-[#004870]">
                  {om.title}
                </h3>
              </div>
              <p className="text-[#3f4851] text-sm mb-5 leading-relaxed">
                Comprehensive Operations & Maintenance protocols to ensure peak system performance and longevity.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-[#1a1c1e] text-xs md:text-sm font-medium">
                  <span className="material-symbols-outlined text-[#006c10] text-[18px]">
                    check_circle
                  </span>
                  Thermal Imaging
                </li>
                <li className="flex items-center gap-2 text-[#1a1c1e] text-xs md:text-sm font-medium">
                  <span className="material-symbols-outlined text-[#006c10] text-[18px]">
                    check_circle
                  </span>
                  Performance Analytics
                </li>
              </ul>

              <button
                onClick={onScheduleAudit}
                className="inline-flex items-center justify-center bg-[#006194] border border-white/30 text-white font-semibold text-xs md:text-sm px-5 py-2.5 rounded-xl hover:bg-[#004870] transition-colors w-fit shadow-sm cursor-pointer"
              >
                Schedule Audit
              </button>
            </div>

            <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden min-h-[220px] md:min-h-auto">
              <img
                src={om.imageUrl}
                alt={om.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/30" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

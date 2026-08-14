import React from 'react';
import { PROJECTS_DATA } from '../data/solarData';
import { ProjectItem } from '../types';

interface InfrastructurePortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
  onViewAllProjects: () => void;
}

export const InfrastructurePortfolio: React.FC<InfrastructurePortfolioProps> = ({
  onSelectProject,
  onViewAllProjects,
}) => {
  const alphaProject = PROJECTS_DATA.find((p) => p.id === 'alpha-industrial')!;
  const agriProject = PROJECTS_DATA.find((p) => p.id === 'agri-solar-integration')!;
  const powerElectronics = PROJECTS_DATA.find((p) => p.id === 'power-electronics-rack')!;

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-pattern border-t border-slate-200/60 relative" id="projects">
      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 glass-panel p-6 md:p-8 rounded-3xl w-full shadow-sm border border-white/80">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004870] mb-3 tracking-tight">
              Infrastructure & Portfolio
            </h2>
            <p className="text-base md:text-lg text-[#3f4851] leading-relaxed">
              Showcasing structural integrity and advanced hardware deployment in real-world scenarios.
            </p>
          </div>
          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-2 text-[#006194] font-semibold text-sm md:text-base hover:text-[#004870] transition-colors pb-1 border-b-2 border-[#006194] hover:border-[#004870] cursor-pointer"
          >
            View All Projects
            <span className="material-symbols-outlined text-[20px]">
              arrow_outward
            </span>
          </button>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured Project (8 Cols) */}
          <div
            onClick={() => onSelectProject(alphaProject)}
            className="lg:col-span-8 relative rounded-2xl overflow-hidden shadow-md group glass-panel p-2 cursor-pointer border border-white/80 transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative w-full h-[420px] md:h-[500px] rounded-xl overflow-hidden">
              <img
                src={alphaProject.imageUrl}
                alt={alphaProject.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <div className="flex flex-wrap gap-2.5 mb-4">
                  <span className="bg-[#004870]/80 backdrop-blur-md text-white font-mono-data text-xs md:text-sm px-3.5 py-1 rounded-full border border-white/40 shadow-sm font-semibold">
                    {alphaProject.capacity}
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white font-mono-data text-xs md:text-sm px-3.5 py-1 rounded-full border border-white/40 shadow-sm font-semibold">
                    Grid-Tied
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                  {alphaProject.title}
                </h3>
                
                <p className="text-slate-200 text-sm md:text-base max-w-xl line-clamp-2 md:line-clamp-none leading-relaxed">
                  {alphaProject.description}
                </p>
              </div>
            </div>
          </div>

          {/* Hardware Specs Stack (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Agri Frame Item */}
            <div
              onClick={() => onSelectProject(agriProject)}
              className="relative rounded-2xl overflow-hidden shadow-sm h-[235px] group glass-panel p-2 cursor-pointer border border-white/80 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src={agriProject.imageUrl}
                  alt={agriProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-lg md:text-xl font-bold text-white mb-0.5">
                    {agriProject.title}
                  </h4>
                  <p className="text-slate-200 text-xs md:text-sm font-medium">
                    Elevated structures for dual land use.
                  </p>
                </div>
              </div>
            </div>

            {/* Power Electronics Item */}
            <div
              onClick={() => onSelectProject(powerElectronics)}
              className="relative rounded-2xl overflow-hidden shadow-sm h-[235px] group glass-panel p-2 cursor-pointer border border-white/80 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#004870]">
                <img
                  src={powerElectronics.imageUrl}
                  alt={powerElectronics.title}
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#004870]/90 to-transparent" />
                
                <div className="absolute top-0 left-0 p-6 w-full h-full flex flex-col justify-center">
                  <span className="material-symbols-outlined text-[#cce5ff] mb-2 text-3xl">
                    electric_bolt
                  </span>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                    Power Electronics
                  </h4>
                  <p className="text-[#93ccff] text-xs md:text-sm max-w-[220px] font-medium leading-snug">
                    Tier-1 inverters and modular storage racks.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

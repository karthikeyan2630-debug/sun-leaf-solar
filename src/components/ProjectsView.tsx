import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/solarData';
import { ProjectItem } from '../types';

interface ProjectsViewProps {
  onOpenQuoteModal: (initialData?: any) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onOpenQuoteModal,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  return (
    <div className="pt-[100px] pb-24 px-6 md:px-12 max-w-[1280px] mx-auto min-h-screen">
      
      {/* Header */}
      <div className="glass-panel p-8 md:p-12 rounded-3xl mb-12 border border-white/80 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[#006194] uppercase tracking-wider font-semibold">
              Deployment Portfolio
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#004870] mt-1 mb-3">
              Engineering Infrastructure
            </h1>
            <p className="text-base md:text-lg text-[#3f4851] max-w-2xl">
              Proven installations demonstrating structural ballast durability, high voltage grid integration, and sustained thermal performance across sectors.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm shrink-0">
            <span className="text-2xl font-extrabold font-mono text-[#006194]">
              340+ GWh
            </span>
            <span className="block text-xs text-slate-500 font-medium">
              Total Yield Generated
            </span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((proj) => (
          <div
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={proj.imageUrl}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-[#004870]/90 backdrop-blur text-white font-mono text-xs px-3 py-1 rounded-full border border-white/30 font-semibold">
                  {proj.capacity}
                </span>
                <span className="bg-white/20 backdrop-blur text-white font-mono text-xs px-3 py-1 rounded-full border border-white/30">
                  {proj.systemType}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono text-[#ffdcc0] block mb-0.5">
                  {proj.location} • Installed {proj.year}
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {proj.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {proj.description}
              </p>

              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Annual Yield:</span>
                  <span className="font-mono font-bold text-[#006194]">
                    {proj.annualGeneration}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">CO2 Offsets:</span>
                  <span className="font-mono font-bold text-[#006c10]">
                    {proj.co2SavedTonnes}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#006194] pt-2">
                <span>Explore Technical Case Study</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <span className="text-xs font-mono text-[#006194] uppercase tracking-wider font-semibold">
              Case Study • {selectedProject.systemType}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#004870] mt-1 mb-2">
              {selectedProject.title}
            </h2>
            <p className="text-xs font-mono text-slate-500 mb-4">
              Location: {selectedProject.location} | Capacity: {selectedProject.capacity}
            </p>

            <div className="h-64 rounded-2xl overflow-hidden mb-6">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-normal">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono text-[#004870] uppercase tracking-wider font-semibold mb-3">
                Engineering Highlights & Results
              </h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="material-symbols-outlined text-[#006c10] text-sm mt-0.5">
                      check_circle
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const projName = selectedProject.title;
                  setSelectedProject(null);
                  onOpenQuoteModal({
                    systemInterest: [projName],
                    additionalNotes: `Inquiry regarding similar installation to ${projName}`,
                  });
                }}
                className="w-full bg-[#006194] text-white font-semibold py-3 rounded-xl hover:bg-[#004870] transition-colors text-xs md:text-sm cursor-pointer"
              >
                Request Similar System Design Proposal
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

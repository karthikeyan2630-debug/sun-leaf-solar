import React from 'react';
import { COMPANY_INFO, SOLAR_IMAGES } from '../data/solarData';

interface AboutViewProps {
  onOpenQuoteModal: () => void;
  onOpenEstimatorModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onOpenQuoteModal,
  onOpenEstimatorModal,
}) => {
  return (
    <div className="pt-[100px] pb-24 px-6 md:px-12 max-w-[1280px] mx-auto min-h-screen">
      
      {/* Banner */}
      <div className="glass-panel p-8 md:p-12 rounded-3xl mb-12 border border-white/80 shadow-sm">
        <span className="text-xs font-mono text-[#006194] uppercase tracking-wider font-semibold">
          ISO 9001:2015 Certified
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#004870] mt-1 mb-4">
          Engineering the Clean Energy Infrastructure
        </h1>
        <p className="text-base md:text-lg text-[#3f4851] max-w-3xl leading-relaxed">
          Sun Leaf Solar was founded on a singular engineering mandate: to replace disposable solar components with industrial-grade energy systems engineered for 25+ years of unyielding output.
        </p>
      </div>

      {/* Grid Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#006194]/10 text-[#006194] flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-2xl">verified</span>
          </div>
          <h3 className="font-bold text-xl text-[#004870] mb-2">
            ISO 9001:2015 Standards
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every step—from roof structural ballast calculations to thermal IV-curve drone scanning—follows rigorous international quality control standards.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#006194]/10 text-[#006194] flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
          </div>
          <h3 className="font-bold text-xl text-[#004870] mb-2">
            Tier-1 N-Type TOPCon
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            We exclusively deploy high-efficiency N-Type solar modules and high-voltage 3-phase string inverters designed for tropical temperature durability.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#006194]/10 text-[#006194] flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-2xl">published_with_changes</span>
          </div>
          <h3 className="font-bold text-xl text-[#004870] mb-2">
            25-Year Yield SLA
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our Operations & Maintenance (O&M) teams ensure complete asset longevity, guaranteed response times, and predictive fault isolation.
          </p>
        </div>
      </div>

      {/* Facility / Infrastructure Highlight */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mb-16">
        <div className="relative h-80 rounded-2xl overflow-hidden">
          <img
            src={SOLAR_IMAGES.alphaComplex}
            alt="Engineering testing"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <span className="text-xs font-mono text-[#006194] uppercase tracking-wider font-semibold">
            Headquarters & R&D Hub
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#004870] mt-1 mb-4">
            Coimbatore Technical Center
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Located at Amman Complex, Theatre Medu, Sirumugai – 641 302, Coimbatore Dt., our headquarters supports solar array testing, technical engineering consultations, and project coordination.
          </p>

          <div className="flex gap-4">
            <button
              onClick={onOpenEstimatorModal}
              className="bg-[#006194] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#004870] cursor-pointer"
            >
              Test ROI Estimator
            </button>
            <button
              onClick={onOpenQuoteModal}
              className="bg-slate-100 text-slate-800 px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-200 cursor-pointer"
            >
              Contact Engineering
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

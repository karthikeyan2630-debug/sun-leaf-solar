import React from 'react';
import { NavigationTab } from '../types';
import { SOLAR_IMAGES, COMPANY_INFO } from '../data/solarData';

interface FooterProps {
  onSelectTab: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="w-full bg-[#2f3133] text-white border-t border-white/10 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="col-span-1 flex flex-col items-start">
          <img
            src={SOLAR_IMAGES.footerLogo}
            alt={COMPANY_INFO.name}
            className="h-14 md:h-16 w-auto max-w-[240px] object-contain mb-4 block"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <p className="text-sm text-slate-300 leading-relaxed mb-6 font-medium">
            Engineering Excellence.<br />
            ISO 9001:2015 Certified.
          </p>
          <p className="text-xs text-slate-400">
            © 2024 Sun Leaf Solar.<br />
            All rights reserved.
          </p>
        </div>

        {/* Links Columns */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Company */}
          <div className="flex flex-col gap-3">
            <span className="font-mono-data text-xs text-[#93ccff] uppercase tracking-wider font-semibold mb-1">
              Company
            </span>
            <button
              onClick={() => onSelectTab('services')}
              className="text-left text-sm text-slate-300 hover:text-[#ffdcc0] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => onSelectTab('products')}
              className="text-left text-sm text-slate-300 hover:text-[#ffdcc0] transition-colors cursor-pointer"
            >
              Products
            </button>
            <button
              onClick={() => onSelectTab('projects')}
              className="text-left text-sm text-slate-300 hover:text-[#ffdcc0] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => onSelectTab('about')}
              className="text-left text-sm text-slate-300 hover:text-[#ffdcc0] transition-colors cursor-pointer"
            >
              About Us
            </button>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <span className="font-mono-data text-xs text-[#93ccff] uppercase tracking-wider font-semibold mb-1">
              Legal
            </span>
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                alert("Sun Leaf Solar Privacy Policy: We protect customer load data and ISO engineering compliance audit specs strictly under non-disclosure standards.");
              }}
              className="text-sm text-slate-300 hover:text-[#ffdcc0] transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                alert("Sun Leaf Solar Terms of Service: All engineering calculations are guaranteed under 25-Year Performance Yield SLA standards.");
              }}
              className="text-sm text-slate-300 hover:text-[#ffdcc0] transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
          </div>

          {/* Headquarters */}
          <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
            <span className="font-mono-data text-xs text-[#93ccff] uppercase tracking-wider font-semibold mb-1">
              Headquarters
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">
              {COMPANY_INFO.address}
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

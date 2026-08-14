import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { SOLAR_IMAGES, COMPANY_INFO } from '../data/solarData';

interface NavbarProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onOpenQuoteModal: () => void;
  onOpenEstimatorModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenQuoteModal,
  onOpenEstimatorModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#162630] border-b border-[#29404d] shadow-lg transition-none">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-[1280px] mx-auto">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-left group focus:outline-none"
        >
          <div className="flex flex-col items-start">
            <img
              src={SOLAR_IMAGES.headerLogo}
              alt={COMPANY_INFO.name}
              className="h-11 md:h-12 w-auto max-w-[180px] object-contain block transition-transform group-hover:scale-[1.02]"
            />
            <span className="text-[9px] md:text-[10px] font-mono tracking-wider text-slate-300 uppercase mt-0.5">
              ISO 9001:2015 Certified
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[17px] font-semibold transition-all duration-200 pb-1 border-b-2 cursor-pointer ${
                  isActive
                    ? 'text-[#39b9e8] border-[#39b9e8]'
                    : 'text-slate-200 border-transparent hover:text-white hover:border-[#39b9e8]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Trailing Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenEstimatorModal}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#39b9e8] bg-[#1c3948] hover:bg-[#244b5d] px-3.5 py-2.5 rounded-lg border border-[#2c5c70] transition-all cursor-pointer"
            title="Open Solar Sizing & ROI Calculator"
          >
            <span className="material-symbols-outlined text-[18px]">calculate</span>
            ROI Calculator
          </button>

          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center justify-center bg-[#006194] border border-white/20 text-white font-label text-[14px] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#004870] transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            Get a Quote
            <span className="material-symbols-outlined ml-1.5 text-[20px]">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#162630] border-b border-[#29404d] px-6 py-5 flex flex-col gap-4 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-lg font-semibold py-2 border-b border-slate-100 ${
                currentTab === item.id
                  ? 'text-[#39b9e8] font-bold'
                  : 'text-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimatorModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#1c3948] text-[#39b9e8] font-semibold py-3 rounded-xl border border-[#2c5c70]"
            >
              <span className="material-symbols-outlined text-[20px]">calculate</span>
              Solar ROI Calculator
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#006194] text-white font-semibold py-3 rounded-xl shadow-md"
            >
              Get a Quote
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

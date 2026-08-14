import React, { useState } from 'react';
import { NavigationTab, ServiceItem, ProjectItem, QuoteFormData } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsGrid } from './components/SolutionsGrid';
import { InfrastructurePortfolio } from './components/InfrastructurePortfolio';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { ServicesView } from './components/ServicesView';
import { ProductsView } from './components/ProductsView';
import { ProjectsView } from './components/ProjectsView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { SolarEstimatorModal } from './components/SolarEstimatorModal';
import { AiConsultantModal } from './components/AiConsultantModal';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteInitialData, setQuoteInitialData] = useState<Partial<QuoteFormData>>({});
  const [isEstimatorModalOpen, setIsEstimatorModalOpen] = useState<boolean>(false);
  const [isAiConsultantOpen, setIsAiConsultantOpen] = useState<boolean>(false);

  const handleOpenQuoteModal = (initialData?: Partial<QuoteFormData>) => {
    if (initialData) {
      setQuoteInitialData(initialData);
    } else {
      setQuoteInitialData({});
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectServiceFromHome = (service: ServiceItem) => {
    setCurrentTab('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProjectFromHome = (project: ProjectItem) => {
    setCurrentTab('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f9f9fc] text-[#1a1c1e] font-sans flex flex-col selection:bg-[#006194] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenEstimatorModal={() => setIsEstimatorModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <>
            <Hero
              onExploreClick={() => {
                const el = document.getElementById('solutions');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setCurrentTab('services');
                }
              }}
              onConsultationClick={() => handleOpenQuoteModal()}
              onOpenAiConsultant={() => setIsAiConsultantOpen(true)}
            />

            <SolutionsGrid
              onSelectService={handleSelectServiceFromHome}
              onScheduleAudit={() =>
                handleOpenQuoteModal({
                  systemInterest: ['Operations & Maintenance Audit'],
                  additionalNotes: 'Requesting FLIR thermal audit & IV-curve scan',
                })
              }
            />

            <InfrastructurePortfolio
              onSelectProject={handleSelectProjectFromHome}
              onViewAllProjects={() => setCurrentTab('projects')}
            />

            <CallToAction
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />
          </>
        )}

        {currentTab === 'services' && (
          <ServicesView
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenEstimatorModal={() => setIsEstimatorModalOpen(true)}
          />
        )}

        {currentTab === 'products' && (
          <ProductsView onOpenQuoteModal={handleOpenQuoteModal} />
        )}

        {currentTab === 'projects' && (
          <ProjectsView onOpenQuoteModal={handleOpenQuoteModal} />
        )}

        {currentTab === 'about' && (
          <AboutView
            onOpenQuoteModal={() => handleOpenQuoteModal()}
            onOpenEstimatorModal={() => setIsEstimatorModalOpen(true)}
          />
        )}

        {currentTab === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer onSelectTab={setCurrentTab} />

      {/* Floating ROI Calculator Quick Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <button
          onClick={() => setIsAiConsultantOpen(true)}
          className="bg-[#004870] text-white p-3.5 rounded-full shadow-2xl hover:bg-[#006194] hover:scale-105 transition-all flex items-center gap-2 text-xs font-bold border border-white/30 cursor-pointer"
          title="Ask AI Solar Engineer"
        >
          <span className="material-symbols-outlined text-2xl">psychology</span>
          <span className="hidden sm:inline font-mono">AI Consultant</span>
        </button>

        <button
          onClick={() => setIsEstimatorModalOpen(true)}
          className="bg-[#fd9412] text-[#2d1600] p-3.5 rounded-full shadow-2xl hover:bg-[#8d4f00] hover:text-white hover:scale-105 transition-all flex items-center gap-2 text-xs font-bold border border-white/40 cursor-pointer"
          title="Solar ROI & Sizing Calculator"
        >
          <span className="material-symbols-outlined text-2xl">calculate</span>
          <span className="hidden sm:inline font-mono">ROI Calculator</span>
        </button>
      </div>

      {/* Modals */}
      <SolarEstimatorModal
        isOpen={isEstimatorModalOpen}
        onClose={() => setIsEstimatorModalOpen(false)}
        onProceedToQuote={(initial) => handleOpenQuoteModal(initial)}
      />

      <AiConsultantModal
        isOpen={isAiConsultantOpen}
        onClose={() => setIsAiConsultantOpen(false)}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialData={quoteInitialData}
      />
    </div>
  );
}

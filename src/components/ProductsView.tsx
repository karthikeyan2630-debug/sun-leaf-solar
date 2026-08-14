import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/solarData';
import { ProductItem } from '../types';

interface ProductsViewProps {
  onOpenQuoteModal: (initialData?: any) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  onOpenQuoteModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'panels' | 'inverters' | 'storage' | 'pumps'
  >('all');
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-[100px] pb-24 px-6 md:px-12 max-w-[1280px] mx-auto min-h-screen">
      
      {/* Header */}
      <div className="glass-panel p-8 md:p-12 rounded-3xl mb-12 border border-white/80 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[#006194] uppercase tracking-wider font-semibold">
              Tier-1 Hardware Catalog
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#004870] mt-1 mb-3">
              Solar Equipment & Hardware
            </h1>
            <p className="text-base md:text-lg text-[#3f4851] max-w-2xl">
              Certified high-efficiency N-Type TOPCon solar panels, three-phase grid-tied inverters, LFP battery storage racks, and VFD agricultural pump drives.
            </p>
          </div>

          <button
            onClick={() =>
              onOpenQuoteModal({
                additionalNotes: 'Requesting hardware price sheet & availability datasheet',
              })
            }
            className="bg-[#006194] hover:bg-[#004870] text-white font-semibold px-6 py-3 rounded-xl shadow-sm text-sm cursor-pointer shrink-0"
          >
            Request Full Datasheet
          </button>
        </div>
      </div>

      {/* Filter Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { id: 'all', label: 'All Equipment' },
          { id: 'panels', label: '580W TOPCon Panels' },
          { id: 'inverters', label: '3-Phase Inverters' },
          { id: 'storage', label: 'LFP Battery Storage' },
          { id: 'pumps', label: 'Agri VFD Drives' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id as any)}
            className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all border cursor-pointer ${
              selectedCategory === tab.id
                ? 'bg-[#004870] text-white border-[#004870] shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((prod) => (
          <div
            key={prod.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={prod.imageUrl}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#004870] text-white font-mono text-[10px] px-2.5 py-1 rounded-md uppercase font-bold">
                  {prod.brand}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-[#006194] font-mono font-bold text-xs px-2.5 py-1 rounded-md border border-slate-200">
                  {prod.efficiency}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-base text-[#004870] mb-2 leading-snug">
                  {prod.name}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {prod.description}
                </p>

                {/* Quick Spec Highlights */}
                <div className="space-y-1.5 border-t border-slate-100 pt-3 text-xs">
                  {Object.entries(prod.specs).slice(0, 3).map(([key, val]) => (
                    <div key={key} className="flex justify-between text-[11px]">
                      <span className="text-slate-500">{key}:</span>
                      <span className="font-mono font-semibold text-slate-800">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 flex gap-2">
              <button
                onClick={() => setActiveProduct(prod)}
                className="flex-grow bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Full Tech Specs
              </button>
              <button
                onClick={() =>
                  onOpenQuoteModal({
                    systemInterest: [prod.name],
                    additionalNotes: `Inquiry for purchasing / integrating ${prod.name}`,
                  })
                }
                className="bg-[#006194] hover:bg-[#004870] text-white text-xs font-semibold px-3 py-2.5 rounded-xl cursor-pointer"
                title="Get Quote for Product"
              >
                Quote
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Specification Modal */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative my-8">
            <button
              onClick={() => setActiveProduct(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <span className="text-xs font-mono text-[#006194] uppercase tracking-wider font-semibold">
              {activeProduct.brand} • {activeProduct.efficiency} Efficiency
            </span>
            <h2 className="text-2xl font-bold text-[#004870] mt-1 mb-4">
              {activeProduct.name}
            </h2>

            <div className="h-48 rounded-xl overflow-hidden mb-4">
              <img
                src={activeProduct.imageUrl}
                alt={activeProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {activeProduct.description}
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
              <h4 className="text-xs font-mono text-slate-700 font-bold mb-3 uppercase">
                Technical Specifications Sheet
              </h4>
              <div className="space-y-2 text-xs">
                {Object.entries(activeProduct.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between py-1 border-b border-slate-200/60 last:border-0">
                    <span className="text-slate-500">{key}:</span>
                    <span className="font-mono font-bold text-slate-800">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const pName = activeProduct.name;
                  setActiveProduct(null);
                  onOpenQuoteModal({
                    systemInterest: [pName],
                    additionalNotes: `Detailed price quotation request for ${pName}`,
                  });
                }}
                className="w-full bg-[#006194] text-white font-semibold py-3 rounded-xl hover:bg-[#004870] transition-colors text-xs md:text-sm cursor-pointer"
              >
                Inquire Price & Supply Availability
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

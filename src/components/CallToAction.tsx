import React from 'react';
import { COMPANY_INFO } from '../data/solarData';

interface CallToActionProps {
  onOpenQuoteModal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#2f3133]" id="contact">
      {/* Abstract Background Glow Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#006194]/30 rounded-full blur-3xl z-0 opacity-50 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#fd9412]/20 rounded-full blur-3xl z-0 opacity-50 mix-blend-screen pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 text-center z-10">
        <div className="glass-panel-dark border-white/10 bg-white/5 p-10 md:p-20 rounded-[2.5rem] shadow-2xl backdrop-blur-xl">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#93ccff] mb-6 tracking-tight leading-tight">
            Ready to Engineer Your Energy Independence?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Consult with our engineering team to design a custom solar infrastructure tailored to your specific load profile.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            
            {/* WhatsApp Consultation */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sun%20Leaf%20Solar%20Team,%20I%20would%20like%20a%20technical%20consultation%20for%20my%20property.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] text-white font-label font-semibold text-sm md:text-base px-8 py-4 rounded-xl hover:bg-[#128C7E] transition-all shadow-lg gap-3 w-full sm:w-auto cursor-pointer border border-white/20 hover:scale-[1.02]"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp Consultation
            </a>

            {/* Email Engineering */}
            <a
              href={`mailto:${COMPANY_INFO.email}?subject=Technical%20Solar%20Consultation%20Request`}
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/30 text-white font-label font-semibold text-sm md:text-base px-8 py-4 rounded-xl hover:bg-white/20 transition-all shadow-lg gap-2 w-full sm:w-auto cursor-pointer hover:scale-[1.02]"
            >
              <span className="material-symbols-outlined text-[22px]">
                mail
              </span>
              Email Engineering
            </a>

            {/* Schedule Interactive Load Assessment */}
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center bg-[#fd9412] text-[#2d1600] font-label font-semibold text-sm md:text-base px-8 py-4 rounded-xl hover:bg-[#8d4f00] hover:text-white transition-all shadow-lg gap-2 w-full sm:w-auto cursor-pointer hover:scale-[1.02]"
            >
              <span className="material-symbols-outlined text-[22px]">
                engineering
              </span>
              Custom System Quote
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

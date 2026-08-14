import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/solarData';

export const ContactView: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Technical Inquiry',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-[100px] pb-24 px-6 md:px-12 max-w-[1280px] mx-auto min-h-screen">
      
      {/* Banner */}
      <div className="glass-panel p-8 md:p-12 rounded-3xl mb-12 border border-white/80 shadow-sm">
        <span className="text-xs font-mono text-[#006194] uppercase tracking-wider font-semibold">
          Direct Line to Engineering
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#004870] mt-1 mb-3">
          Contact Sun Leaf Solar
        </h1>
        <p className="text-base md:text-lg text-[#3f4851] max-w-2xl">
          Connect with our lead solar systems engineers for technical load audits, site feasibility reports, and grid interconnection guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Info Column (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-lg text-[#004870] border-b border-slate-100 pb-3">
              Headquarters Address
            </h3>
            
            <div className="flex items-start gap-3 text-sm text-slate-700">
              <span className="material-symbols-outlined text-[#006194] mt-0.5">
                location_on
              </span>
              <div>
                <p className="font-semibold text-slate-900">Sun Leaf Solar Office</p>
                <p className="text-slate-600 text-xs leading-relaxed mt-1">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-700">
              <span className="material-symbols-outlined text-[#006194]">
                phone_in_talk
              </span>
              <div>
                <p className="text-xs text-slate-500">Main Office Line</p>
                <p className="font-mono font-bold text-slate-800">{COMPANY_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-700">
              <span className="material-symbols-outlined text-[#006194]">
                mail
              </span>
              <div>
                <p className="text-xs text-slate-500">Engineering Email</p>
                <a href={`mailto:${COMPANY_INFO.email}`} className="font-mono font-bold text-[#006194] hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-700">
              <span className="material-symbols-outlined text-[#006194]">
                schedule
              </span>
              <div>
                <p className="text-xs text-slate-500">Working Hours</p>
                <p className="text-xs font-medium text-slate-800">{COMPANY_INFO.workingHours}</p>
              </div>
            </div>
          </div>

          {/* Instant Channels */}
          <div className="bg-[#004870] text-white p-6 rounded-3xl shadow-md space-y-4">
            <h3 className="font-bold text-lg text-white">
              Instant Engineering Desk
            </h3>
            <p className="text-xs text-slate-200 leading-relaxed">
              For urgent O&M faults or immediate load consultation, connect directly over WhatsApp or email.
            </p>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Sun%20Leaf%20Solar,%20I%20have%20an%20engineering%20inquiry.`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              Start WhatsApp Consultation
            </a>
          </div>

        </div>

        {/* Form Column (7 Cols) */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
          {sent ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-[#006c10] rounded-full flex items-center justify-center mx-auto text-3xl">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h3 className="text-2xl font-bold text-[#004870]">
                Message Sent Successfully
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for contacting Sun Leaf Solar. An engineer will respond to {formState.email} shortly.
              </p>
              <button
                onClick={() => setSent(false)}
                className="bg-[#006194] text-white px-6 py-2.5 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-bold text-xl text-[#004870] mb-2">
                Send an Inquiry Message
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#006194]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#006194]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+91 Phone"
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#006194]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Category</label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#006194]"
                  >
                    <option value="Industrial Solar Sizing">Industrial Solar Sizing (100kW+)</option>
                    <option value="Residential Installation">Residential Villa System</option>
                    <option value="Agricultural Solar Pumps">Agricultural Water Pumps</option>
                    <option value="Operations & Maintenance Audit">O&M Maintenance Audit</option>
                    <option value="Vendor / Supply Partner">Vendor / Component Supply</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your property, load requirements, or questions..."
                  className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#006194]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#006194] hover:bg-[#004870] text-white font-semibold py-3.5 rounded-xl transition-all shadow-md text-xs md:text-sm cursor-pointer"
              >
                Send Inquiry to Engineering Desk
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

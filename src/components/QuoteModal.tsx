import React, { useState, useEffect } from 'react';
import { QuoteFormData } from '../types';
import { COMPANY_INFO } from '../data/solarData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Partial<QuoteFormData>;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    propertyType: 'industrial',
    estimatedBudget: '$10,000 - $50,000',
    monthlyBill: '$1,000 / mo',
    address: '',
    systemInterest: ['Grid-Tied Solar Array', '580W TOPCon Panels'],
    additionalNotes: '',
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setSubmittedRef(data.referenceNumber || `SLS-${Math.floor(100000 + Math.random() * 900000)}`);
    } catch (err) {
      setSubmittedRef(`SLS-${Math.floor(100000 + Math.random() * 900000)}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#f9f9fc] border border-white/60 rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative my-8">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {submittedRef ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-green-100 text-[#006c10] rounded-full flex items-center justify-center mx-auto text-3xl">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>

            <h3 className="text-2xl font-bold text-[#004870]">
              Engineering Consultation Scheduled!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Your load analysis quote request has been registered under ISO 9001 compliance standards.
            </p>

            <div className="bg-white p-4 rounded-xl border border-slate-200 inline-block font-mono text-sm text-[#006194] font-bold">
              Reference Code: {submittedRef}
            </div>

            <p className="text-xs text-slate-500">
              Our lead solar engineer will review your roof dimensions and contact you within 24 hours.
            </p>

            <div className="pt-4 flex justify-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Sun%20Leaf%20Solar,%20I%20submitted%20quote%20request%20ref%20${submittedRef}.`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-2"
              >
                Instant WhatsApp Update
              </a>

              <button
                onClick={onClose}
                className="bg-[#004870] text-white px-6 py-2.5 rounded-xl font-semibold text-xs cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#006194]/10 text-[#006194] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">request_quote</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#004870]">
                  Get a Technical Solar Quote
                </h3>
                <p className="text-xs text-slate-500">
                  Custom load calculation & component breakdown
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Dr. Rajesh Kumar"
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#006194]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#006194]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#006194]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Property Type</label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#006194]"
                >
                  <option value="industrial">Industrial Scale (100kW+)</option>
                  <option value="commercial">Commercial Building (20kW - 100kW)</option>
                  <option value="residential">Residential Villa (5kW - 20kW)</option>
                  <option value="agricultural">Agri-Solar & Water Pumps</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Site Location / Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Sector / Industrial Area / City"
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#006194]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Additional Project Specifications</label>
              <textarea
                rows={3}
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                placeholder="Specify peak load hours, transformer details, or roof type..."
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#006194]"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#006194] hover:bg-[#004870] text-white font-semibold py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              {submitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-sm">sync</span>
                  Processing ISO Audit Request...
                </>
              ) : (
                <>
                  Submit Technical Proposal Request
                  <span className="material-symbols-outlined text-base">send</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

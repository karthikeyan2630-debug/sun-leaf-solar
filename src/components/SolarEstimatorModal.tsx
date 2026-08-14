import React, { useState, useEffect } from 'react';
import { SolarCalculatorState, QuoteFormData } from '../types';

interface SolarEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToQuote: (initialData: Partial<QuoteFormData>) => void;
}

export const SolarEstimatorModal: React.FC<SolarEstimatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToQuote,
}) => {
  const [calcState, setCalcState] = useState<SolarCalculatorState>({
    propertyType: 'industrial',
    monthlyBillInr: 100000,
    roofAreaSqFt: 6000,
    desiredBackupHours: 4,
    stateOrRegion: 'Karnataka (High Yield Zone)',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<{
    recommendedKw: number;
    panelCount: number;
    requiredSqFt: number;
    areaFits: boolean;
    estCostInr: number;
    annualSavingsInr: number;
    paybackYears: string;
    co2ReductionTonnes: string;
    recommendedInverter: string;
  } | null>(null);

  useEffect(() => {
    calculateEstimates();
  }, [calcState]);

  const calculateEstimates = () => {
    const bill = Number(calcState.monthlyBillInr) || 50000;
    const area = Number(calcState.roofAreaSqFt) || 2500;

    const estimatedMonthlyKwh = bill / 8.5;
    const dailyKwhNeeded = estimatedMonthlyKwh / 30;
    const recommendedKw = Math.ceil((dailyKwhNeeded / 4.6) * 1.15);

    const panelCount = Math.ceil((recommendedKw * 1000) / 580);
    const requiredSqFt = panelCount * 28;

    const estCostInr = recommendedKw * 65000;
    const annualSavingsInr = bill * 12 * 0.88;
    const paybackYears = (estCostInr / annualSavingsInr).toFixed(1);
    const co2ReductionTonnes = (recommendedKw * 1.12).toFixed(1);

    setResults({
      recommendedKw,
      panelCount,
      requiredSqFt,
      areaFits: area >= requiredSqFt,
      estCostInr,
      annualSavingsInr: Math.round(annualSavingsInr),
      paybackYears,
      co2ReductionTonnes,
      recommendedInverter: recommendedKw >= 30 ? 'SunLeaf PolyCab 50kW Industrial' : 'SunLeaf Smart Hybrid 15kW',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#f9f9fc] border border-white/60 rounded-3xl max-w-3xl w-full p-6 md:p-8 shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-500 hover:text-slate-800 p-2 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#006194]/10 text-[#006194] flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">calculate</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#004870]">
              Solar Sizing & Financial ROI Estimator
            </h2>
            <p className="text-sm text-[#3f4851]">
              ISO 9001 load calculation engine for accurate yield & payback analysis
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Controls Column */}
          <div className="space-y-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-mono text-[#006194] uppercase tracking-wider font-semibold">
              1. System Parameters
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Property Category
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['industrial', 'commercial', 'residential', 'agricultural'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setCalcState({ ...calcState, propertyType: type })}
                    className={`text-xs py-2 px-3 rounded-lg capitalize font-semibold transition-all border cursor-pointer ${
                      calcState.propertyType === type
                        ? 'bg-[#004870] text-white border-[#004870]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-slate-700">
                  Monthly Power Bill
                </label>
                <span className="text-xs font-mono font-bold text-[#006194]">
                  ₹{calcState.monthlyBillInr.toLocaleString('en-IN')} / mo
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="5000"
                value={calcState.monthlyBillInr}
                onChange={(e) => setCalcState({ ...calcState, monthlyBillInr: Number(e.target.value) })}
                className="w-full accent-[#006194] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-slate-700">
                  Usable Roof Area (Sq. Ft)
                </label>
                <span className="text-xs font-mono font-bold text-[#006194]">
                  {calcState.roofAreaSqFt} sq ft
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={calcState.roofAreaSqFt}
                onChange={(e) => setCalcState({ ...calcState, roofAreaSqFt: Number(e.target.value) })}
                className="w-full accent-[#006194] cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Installation Region
              </label>
              <select
                value={calcState.stateOrRegion}
                onChange={(e) => setCalcState({ ...calcState, stateOrRegion: e.target.value })}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
              >
                <option value="Karnataka (High Yield Zone)">Karnataka / Bangalore Zone</option>
                <option value="Tamil Nadu Coastal">Tamil Nadu / Coastal Region</option>
                <option value="Maharashtra Industrial">Maharashtra / Industrial Park</option>
                <option value="Gujarat Solar Belt">Gujarat / Solar Belt</option>
                <option value="International Standard">International High Irradiance</option>
              </select>
            </div>
          </div>

          {/* Results Column */}
          {results && (
            <div className="space-y-4 bg-[#004870]/5 p-5 rounded-2xl border border-[#004870]/20 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-mono text-[#006194] uppercase tracking-wider font-semibold mb-3">
                  2. Engineered Solution
                </h3>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Recommended Plant</span>
                    <span className="text-xl font-bold font-mono text-[#004870]">
                      {results.recommendedKw} kWp
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Est. Payback</span>
                    <span className="text-xl font-bold font-mono text-[#006c10]">
                      {results.paybackYears} Years
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Annual Savings</span>
                    <span className="text-lg font-bold font-mono text-[#8d4f00]">
                      ₹{results.annualSavingsInr.toLocaleString('en-IN')} / yr
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">CO2 Prevented</span>
                    <span className="text-lg font-bold font-mono text-[#004870]">
                      {results.co2ReductionTonnes} T / yr
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                  <div className="flex justify-between">
                    <span>580W TOPCon Panels:</span>
                    <span className="font-mono font-bold">{results.panelCount} Modules</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Required Area:</span>
                    <span className={`font-mono font-bold ${results.areaFits ? 'text-green-700' : 'text-amber-700'}`}>
                      {results.requiredSqFt} sq ft ({results.areaFits ? 'Fits Roof' : 'Needs Ground Mount'})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Inverter Hardware:</span>
                    <span className="font-mono font-semibold">{results.recommendedInverter}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onProceedToQuote({
                    propertyType: calcState.propertyType,
                    monthlyBill: `₹${calcState.monthlyBillInr.toLocaleString('en-IN')}/mo`,
                    additionalNotes: `Calculated System: ${results.recommendedKw} kWp plant with ${results.panelCount}x 580W panels. Required roof: ${results.requiredSqFt} sq ft.`,
                  });
                  onClose();
                }}
                className="w-full bg-[#fd9412] text-[#2d1600] hover:bg-[#8d4f00] hover:text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                Apply Calculation & Request Official Quote
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

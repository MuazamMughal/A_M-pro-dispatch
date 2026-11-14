'use client';

import React, { useState } from 'react';
import { DollarSign, Route, Percent, TrendingUp, ArrowRight, Shield } from 'lucide-react';

export default function Calculator() {
  const [miles, setMiles] = useState(2500);
  const [ratePerMile, setRatePerMile] = useState(2.85);
  const [dispatchRatePercent, setDispatchRatePercent] = useState(8);

  const weeklyGross = miles * ratePerMile;
  const dispatchFee = weeklyGross * (dispatchRatePercent / 100);
  const netEarnings = weeklyGross - dispatchFee;
  const monthlyGross = weeklyGross * 4.33;
  const monthlyNet = netEarnings * 4.33;

  return (
    <section id="calculator" className="py-20 bg-am-offwhite border-b border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-am-red-light text-am-red border border-red-200">
            Interactive Driver Calculator
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-am-dark tracking-tight">
            See What Your Rig Can Earn With A&amp;M Pro Dispatch
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            We don’t hide our numbers. Adjust the sliders below to calculate your weekly gross freight revenue, transparent dispatch fees, and net money directly in your pocket.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-10">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-7">
            {/* Miles Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-am-dark flex items-center gap-2">
                  <Route className="w-4 h-4 text-am-red" /> Estimated Weekly Loaded Miles
                </label>
                <span className="text-base font-extrabold text-am-red bg-am-red-light px-2.5 py-0.5 rounded border border-red-200">
                  {miles.toLocaleString()} mi / week
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="4000"
                step="50"
                value={miles}
                onChange={(e) => setMiles(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-am-red"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1.5 font-medium">
                <span>1,000 mi</span>
                <span>2,500 mi (OTR Avg)</span>
                <span>4,000 mi (Team/Hard Run)</span>
              </div>
            </div>

            {/* Rate Per Mile Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-am-dark flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-am-red" /> Target Average Rate Per Mile (RPM)
                </label>
                <span className="text-base font-extrabold text-am-red bg-am-red-light px-2.5 py-0.5 rounded border border-red-200">
                  ${ratePerMile.toFixed(2)} / mi
                </span>
              </div>
              <input
                type="range"
                min="1.80"
                max="4.50"
                step="0.05"
                value={ratePerMile}
                onChange={(e) => setRatePerMile(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-am-red"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1.5 font-medium">
                <span>$1.80 (Standard Low)</span>
                <span>$2.85 (A&amp;M Negotiated Avg)</span>
                <span>$4.50+ (Reefer / Specialized)</span>
              </div>
            </div>

            {/* Dispatch Fee Selector */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-am-dark flex items-center gap-2">
                  <Percent className="w-4 h-4 text-am-red" /> A&amp;M Pro Dispatch Fee Rate
                </label>
                <span className="text-sm font-bold text-am-dark">{dispatchRatePercent}% of Gross Load</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[7, 8, 10].map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    onClick={() => setDispatchRatePercent(rate)}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-extrabold border transition-all ${
                      dispatchRatePercent === rate
                        ? 'bg-am-dark text-white border-am-dark shadow-md ring-2 ring-am-red'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-am-red'
                    }`}
                  >
                    {rate}% {rate === 8 ? '(Recommended)' : ''}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                * Fee is only charged AFTER you complete delivery and submit paperwork. No upfront fees.
              </p>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-am-dark text-white rounded-2xl p-7 sm:p-9 relative overflow-hidden shadow-2xl border-t-4 border-am-red">
            <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-36 h-36 bg-am-red opacity-15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-am-red" /> Projected Breakdown
              </span>
              <span className="text-[11px] font-semibold text-slate-400">Weekly Basis</span>
            </div>

            <div className="space-y-4 mt-6">
              <div className="flex justify-between items-center pb-3 border-b border-slate-800/80">
                <span className="text-sm text-slate-400">Gross Weekly Revenue:</span>
                <span className="text-xl font-black text-white">
                  ${Math.round(weeklyGross).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-slate-800/80">
                <span className="text-sm text-slate-400">
                  A&amp;M Dispatch Fee ({dispatchRatePercent}%):
                </span>
                <span className="text-lg font-bold text-am-red">
                  -${Math.round(dispatchFee).toLocaleString()}
                </span>
              </div>

              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Estimated Net Take-Home Pay
                </span>
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  ${Math.round(netEarnings).toLocaleString()}
                  <span className="text-xs text-slate-400 font-normal ml-2">/ week</span>
                </span>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 flex justify-between">
                <span>Estimated Monthly Gross:</span>
                <span className="font-bold text-slate-200">
                  ${Math.round(monthlyGross).toLocaleString()}
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="#carrier-signup"
                className="w-full inline-flex justify-center items-center gap-2 py-3.5 px-6 rounded-xl text-sm font-extrabold text-white bg-am-red hover:bg-am-red-hover transition shadow-lg shadow-red-600/30"
              >
                <span>Lock In This Capacity Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <Shield className="w-3.5 h-3.5 text-am-red" />
                <span>Zero Forced Loads • You Retain Final Load Approval</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

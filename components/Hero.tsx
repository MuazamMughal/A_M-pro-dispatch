'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, DollarSign, Shield, Zap, TrendingUp, PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle highway line accent in background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0b0f17_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-am-red-light text-am-red border border-red-200 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-am-red fill-am-red" />
              <span>Dedicated Dispatch Services for U.S. Carriers</span>
            </div>

            <div>
              <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-am-red mb-3 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-6 h-0.5 bg-am-red"></span>
                <span>Your Freight. Our Focus.</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-am-dark tracking-tight leading-[1.1]">
                Maximize Your Gross. <br className="hidden sm:inline" />
                <span className="text-am-red underline decoration-am-red/30 decoration-wavy decoration-2">
                  Keep More Profit
                </span>{' '}
                In Your Pocket.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong>A&amp;M Pro Dispatch</strong> gives owner-operators and fleet owners the muscle of a dedicated freight brokerage operations team. We hunt top-dollar loads, aggressively negotiate your rate per mile, handle all broker packets, and chase detention and TONU.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#carrier-signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-extrabold text-white bg-am-red hover:bg-am-red-hover transition shadow-xl shadow-red-600/30 group"
              >
                <span>Get Dispatched Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-am-dark bg-am-offwhite hover:bg-slate-100 border border-slate-300 transition"
              >
                <DollarSign className="w-4 h-4 text-am-red" />
                <span>Calculate Weekly Profit</span>
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-am-red shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Dedicated 1-on-1 Dispatcher</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-am-red shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Top DAT &amp; Direct Lanes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-am-red shrink-0" />
                <span className="text-xs font-semibold text-slate-700">New MC Authorities Welcomed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-am-red shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Transparent Flat % Fee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Rate Con & Dispatcher Mockup Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-am-dark text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-800">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-am-red animate-ping" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
                    Live Dispatch Activity
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-green-500/20 text-green-400 border border-green-500/30">
                  Booked &amp; Confirmed
                </span>
              </div>

              {/* Rate Con Highlights */}
              <div className="mt-5 space-y-4">
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs text-slate-400 font-medium">Lane: Chicago, IL ➔ Atlanta, GA</span>
                      <h4 className="text-lg font-black text-white mt-0.5">Dry Van 53&apos; Full Truckload</h4>
                    </div>
                    <span className="text-xl font-black text-am-red">$2,750</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                    <span>Miles: 715 mi</span>
                    <span className="font-bold text-white bg-slate-800 px-2 py-0.5 rounded">
                      Rate: $3.84 / mile
                    </span>
                  </div>
                </div>

                {/* Dispatcher Actions Performed */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                    <span className="text-slate-300">Rate Con &amp; Broker Packet Signed:</span>
                    <span className="text-green-400 font-bold">✓ Completed (09:12 AM)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                    <span className="text-slate-300">Factoring Credit Approval:</span>
                    <span className="text-green-400 font-bold">✓ Approved $100K+</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                    <span className="text-slate-300">Detention Protection ($75/hr):</span>
                    <span className="text-am-red font-bold">✓ Included in Agreement</span>
                  </div>
                </div>

                {/* Callout box */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-am-red/20 to-transparent border border-am-red/40 text-center">
                  <p className="text-xs font-medium text-slate-200">
                    Need loads like this for your truck tomorrow?
                  </p>
                  <a
                    href="tel:7706016344"
                    className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-am-red hover:bg-am-red-hover px-4 py-2 rounded-lg transition"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call or Text: (770) 601-6344</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

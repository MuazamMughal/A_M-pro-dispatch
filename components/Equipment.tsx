'use client';

import React, { useState } from 'react';
import { Truck, Snowflake, Package, Box, Layers, Zap, Check } from 'lucide-react';

export default function Equipment() {
  const [activeTab, setActiveTab] = useState(0);

  const fleetTypes = [
    {
      name: 'Dry Van (53ft)',
      icon: Truck,
      subtitle: 'Most Consistent Freight Nationwide',
      avgRpm: '$2.40 - $3.20 / mi',
      typicalGross: '$6,500 - $8,500 / wk',
      bestLanes: 'Midwest ➔ Southeast ➔ Texas Corridor',
      details:
        'Standard 53ft swing door or roll door dry vans. We ensure maximum continuous lane loops so you spend minimum time sitting at docks and zero unpaid empty miles.',
      checklist: [
        'Palletized consumer goods & retail',
        'Direct distribution center drop-and-hook',
        'No touch freight prioritizations',
        'Clean, food-grade load matching',
      ],
    },
    {
      name: 'Reefer (53ft)',
      icon: Snowflake,
      subtitle: 'Highest Dollar-Per-Mile In The Industry',
      avgRpm: '$3.00 - $4.25+ / mi',
      typicalGross: '$8,500 - $11,500+ / wk',
      bestLanes: 'California, Pacific Northwest, Florida, Midwest Produce',
      details:
        'Temperature-sensitive freight requiring meticulous monitoring. We negotiate top refrigerated rates for produce, pharmaceuticals, poultry, and frozen goods with full reefer breakdown protection clauses.',
      checklist: [
        'Produce, dairy, and cold-chain pharma',
        'Seasonal produce lane surges',
        'High detention rate enforcement ($85+/hr)',
        'Pre-cooling protocol support',
      ],
    },
    {
      name: 'Flatbed & Stepdeck',
      icon: Layers,
      subtitle: 'Industrial, Machinery & Specialized Cargo',
      avgRpm: '$2.80 - $3.90+ / mi',
      typicalGross: '$7,500 - $10,000 / wk',
      bestLanes: 'Gulf Coast, Industrial Rust Belt, Southeast, Texas',
      details:
        'Open-deck transport for structural steel, machinery, lumber, and oversized cargo. We negotiate tarp fees ($100-$150+), side kits, and pipe stake accessorials up front.',
      checklist: [
        'Steel coils, lumber, and heavy machinery',
        'Tarping, straps & chain fee negotiations',
        'Permit and oversize load routing',
        'Job site and port terminal access coordination',
      ],
    },
    {
      name: 'Box Truck (24-26ft)',
      icon: Box,
      subtitle: 'Expedited & Regional Freight Specialists',
      avgRpm: '$2.00 - $2.80 / mi',
      typicalGross: '$5,000 - $7,200 / wk',
      bestLanes: 'Regional hubs, Metro Tri-State, Southeast routes',
      details:
        '26ft straight trucks with liftgates and pallet jacks. We focus on premium expedited loads, air-cargo transfers, and dedicated LTL consolidated routes that pay higher than spot freight.',
      checklist: [
        'Liftgate & pallet jack premium pay',
        'Expedited & cross-dock runs',
        'Amazon, retail distribution & final mile',
        'Dedicated short-haul lane circuits',
      ],
    },
    {
      name: 'Power Only',
      icon: Zap,
      subtitle: 'Tractor-Only Drop & Hook Velocity',
      avgRpm: '$2.30 - $3.10 / mi',
      typicalGross: '$6,000 - $8,000 / wk',
      bestLanes: 'National trailer repositioning, Major logistics corridors',
      details:
        'Keep your tractor moving without trailer maintenance expenses. We connect you with shippers and mega-brokers needing trailer moves, leased chassis, and drop-and-hook relays.',
      checklist: [
        'Zero trailer maintenance overhead',
        'Fast turnarounds at drop yards',
        'Repositioning and relief freight',
        'Low deadhead triangular routes',
      ],
    },
    {
      name: 'Hotshot (40ft)',
      icon: Package,
      subtitle: 'Nimble, High-Urgency Time-Critical Runs',
      avgRpm: '$2.10 - $2.90 / mi',
      typicalGross: '$5,500 - $7,500 / wk',
      bestLanes: 'Permian Basin, Oilfields, Midwest Manufacturing',
      details:
        'Class 3 to 5 pickup trucks with 40ft goosenecks (CDL & Non-CDL). We specialize in high-urgency oilfield pipe, building equipment, and rapid manufacturing components.',
      checklist: [
        'Oilfield hotshot expedited rates',
        'Partial & combined LTL loads',
        'CDL and Non-CDL compliant lane setups',
        'Quick turnarounds with zero dock delays',
      ],
    },
  ];

  return (
    <section id="equipment" className="py-20 bg-am-offwhite border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-am-red-light text-am-red border border-red-200">
            Equipment Specialization
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-am-dark tracking-tight">
            We Know The Exact Freight Market For Your Trailer
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Every trailer type requires a distinct strategy. Select your equipment below to review our target revenue benchmarks and lane coverage.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {fleetTypes.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-am-dark text-white shadow-lg ring-2 ring-am-red'
                    : 'bg-white text-slate-700 hover:text-am-red hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-am-red' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Showcase Box */}
        {(() => {
          const active = fleetTypes[activeTab];
          const Icon = active.icon;
          return (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-am-red/10 text-am-red border border-am-red/20">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-am-dark">
                      {active.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-am-red mt-0.5">
                      {active.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {active.details}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {active.checklist.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <Check className="w-4 h-4 text-am-red shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="#carrier-signup"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-am-red hover:bg-am-red-hover transition shadow-md shadow-red-600/20"
                  >
                    Dispatch My {active.name}
                  </a>
                  <a
                    href="tel:7706016344"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-am-dark bg-slate-100 hover:bg-slate-200 transition border border-slate-300"
                  >
                    Check Today&apos;s Rates (770-601-6344)
                  </a>
                </div>
              </div>

              {/* Metrics Card */}
              <div className="lg:col-span-5 bg-am-dark text-white rounded-2xl p-7 border-t-4 border-am-red space-y-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Target Operating Benchmarks
                </h4>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-0.5">Target Average RPM:</span>
                  <span className="text-2xl font-black text-am-red">{active.avgRpm}</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-0.5">Projected Weekly Gross:</span>
                  <span className="text-2xl font-black text-white">{active.typicalGross}</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-0.5">Prime Recommended Lanes:</span>
                  <span className="text-sm font-bold text-slate-200">{active.bestLanes}</span>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}

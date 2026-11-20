'use client';

import React from 'react';
import {
  Search,
  Handshake,
  FileCheck2,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Strategic Lane & Freight Sourcing',
      badge: 'Daily Market Sourcing',
      icon: Search,
      description:
        'Your dedicated dispatcher evaluates your equipment type, current location, and preferred running lanes. We scan DAT One Pro, Truckstop, and private shipper networks to pinpoint top-paying freight while cutting unnecessary deadhead.',
      bullets: [
        'Seasoned 1+ Year MC Tier-1 broker access',
        'Vetted broker credit & verified payment history',
        'Continuous lane loops to eliminate empty miles',
      ],
    },
    {
      step: '02',
      title: 'Aggressive Rate Negotiation',
      badge: '100% Driver Approval',
      icon: Handshake,
      description:
        'We negotiate directly with freight brokers for top rate-per-mile, contractual detention compensation, and TONU protection. We present every rate confirmation directly to you — you hold 100% final approval with zero forced dispatch.',
      bullets: [
        'Original broker rate confirmation transparency',
        'Contractual detention & TONU compensation',
        'Strict 100% No Forced Dispatch policy',
      ],
    },
    {
      step: '03',
      title: 'Complete Back-Office & Invoicing',
      badge: 'Hands-Off Paperwork',
      icon: FileCheck2,
      description:
        'We execute all broker setup packets, submit your Certificates of Insurance (COI), and schedule dock appointments. Upon delivery, we submit your signed BOL directly to your factoring company for fast funding.',
      bullets: [
        'Rapid broker packet execution & COI submission',
        'Direct factoring company invoice submission',
        'Flexible agreement — pause or cancel with 1-week notice',
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-am-offwhite border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-am-red-light text-am-red border border-red-200">
            <Clock className="w-3.5 h-3.5" /> 3-Step Dispatch Workflow
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-am-dark tracking-tight">
            How Your Daily Dispatch Works
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            From morning lane sourcing to same-day factoring submission, our operations desk manages the heavy lifting so you stay focused on the road.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-am-red/40 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step Number Watermark */}
                <span className="absolute top-4 right-5 text-4xl font-black text-slate-100 group-hover:text-red-50 transition-colors pointer-events-none">
                  {item.step}
                </span>

                <div>
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-am-red-light text-am-red flex items-center justify-center border border-red-200 group-hover:bg-am-red group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-am-red mb-1">
                    {item.badge}
                  </span>

                  <h3 className="text-xl font-black text-am-dark group-hover:text-am-red transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Checklist Bullets */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-am-red shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700 leading-snug">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action Strip */}
        <div className="mt-14 max-w-6xl mx-auto p-6 sm:p-8 rounded-3xl bg-am-dark text-white border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-am-red text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Seasoned Carrier Operations
            </div>
            <h4 className="text-xl sm:text-2xl font-black tracking-tight">
              Ready to Put a Dedicated Dispatcher in Your Corner?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Zero upfront fees. 100% No Forced Dispatch. Requires 1+ Year Active MC Authority.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href="#carrier-signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-am-red hover:bg-am-red-hover transition shadow-lg shadow-red-600/30 group"
            >
              <span>Onboard Your Truck</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="tel:7706016344"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
            >
              <Phone className="w-4 h-4 text-am-red" />
              <span>(770) 601-6344</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

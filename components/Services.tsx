'use client';

import React from 'react';
import {
  TrendingUp,
  FileCheck2,
  DollarSign,
  Headphones,
  Navigation,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: 'High-RPM Load Sourcing',
      desc: 'We scour DAT One Pro, Truckstop, and our private shipper network to secure premium spot and dedicated contract freight tailored to your equipment.',
      features: [
        'Eliminate deadhead miles',
        'Direct shipper & trusted broker loads',
        'Strategic lane planning for high-rate backhauls',
      ],
    },
    {
      icon: DollarSign,
      title: 'Aggressive Rate Negotiation',
      desc: 'Our dispatchers never accept the first posted rate. We leverage market volume, load density, and historical lane data to negotiate maximum dollars per mile.',
      features: [
        'Detention pay enforcement ($75+/hr)',
        'TONU (Truck Ordered Not Used) recovery',
        'Layover & lumper reimbursement claims',
      ],
    },
    {
      icon: FileCheck2,
      title: 'Full Paperwork & Packet Setup',
      desc: 'Spend zero time filling out forms in your cab. We handle every broker packet, W-9, COI dispatch request, Rate Con, and BOL submission.',
      features: [
        'Instant broker setup packets',
        'Rate confirmation review & execution',
        'Proof of Delivery (POD) processing',
      ],
    },
    {
      icon: DollarSign,
      title: 'Factoring & QuickPay Invoicing',
      desc: 'We work directly with your factoring company (or set you up with one) to submit invoices, verify broker credit ratings, and expedite direct deposits.',
      features: [
        'Broker credit checks before booking',
        'Direct NOA (Notice of Assignment) handling',
        'Same-day or next-day cash flow funding',
      ],
    },
    {
      icon: Headphones,
      title: '24/7 Driver On-Road Support',
      desc: 'Freight doesn’t sleep. Our dispatch team is on call around the clock to support you during late night check-ins, receiver delays, or roadside issues.',
      features: [
        'Appointment rescheduling & check-in calls',
        'Scale house & weather route bypass assistance',
        'Trusted mobile truck mechanic directory',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'New MC Authority Program',
      desc: 'Authority under 90 or 180 days? Don’t let broker restrictions park your truck. We partner with hundreds of brokers who actively book new authorities.',
      features: [
        'No authority age discrimination',
        'Rapid credit & safety rating building',
        'Guidance on FMCSA compliance & audits',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-am-red-light text-am-red border border-red-200">
            Dedicated Dispatch Solutions
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-am-dark tracking-tight">
            Complete Freight Operations For Serious Carriers
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            From the moment you start your engine until the final invoice is paid, A&amp;M Pro Dispatch acts as your in-house back office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-am-offwhite border border-slate-200 hover:border-am-red hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-am-red group-hover:bg-am-red group-hover:text-white transition-colors duration-300 shadow-sm mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-am-dark group-hover:text-am-red transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-am-red shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner within Services */}
        <div className="mt-16 p-8 rounded-3xl bg-am-dark text-white border-t-4 border-am-red flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-black text-white">
              Ready to hand over the paperwork headache?
            </h4>
            <p className="text-sm text-slate-400">
              Zero upfront fees. You keep 100% control of your truck and destination.
            </p>
          </div>
          <a
            href="#carrier-signup"
            className="shrink-0 px-6 py-3.5 rounded-xl font-bold text-sm bg-am-red hover:bg-am-red-hover text-white transition shadow-lg shadow-red-600/30"
          >
            Sign Up in 5 Minutes
          </a>
        </div>
      </div>
    </section>
  );
}

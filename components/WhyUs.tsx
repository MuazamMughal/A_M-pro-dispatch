'use client';

import React from 'react';
import { Check, X, ShieldAlert, HeartHandshake, PhoneCall } from 'lucide-react';

export default function WhyUs() {
  const comparison = [
    {
      feature: 'Dispatcher-to-Truck Ratio',
      am: '1 : 4 to 1 : 5 (Dedicated Attention)',
      callCenters: '1 : 15+ (Overworked call centers)',
      diy: 'Driver does it all alone while driving',
    },
    {
      feature: 'Forced Dispatch Policy',
      am: '100% No Forced Dispatch — You Decide',
      callCenters: 'Frequent pressure to take bad loads',
      diy: 'No forced loads, but high deadhead risk',
    },
    {
      feature: 'Rate Negotiation Strategy',
      am: 'Aggressive above-market DAT & direct rates',
      callCenters: 'Takes first posted bottom rate',
      diy: 'Hard to negotiate while behind the wheel',
    },
    {
      feature: 'Broker Packets & Paperwork',
      am: '100% Handled (Rate Cons, BOLs, Packets)',
      callCenters: 'Frequent delays & missing documents',
      diy: '12-15 hours stolen from driving every week',
    },
    {
      feature: 'Detention & TONU Recovery',
      am: 'Enforced $75-$100/hr + immediate claims',
      callCenters: 'Rarely chased or followed up',
      diy: 'Brokers often ignore independent drivers',
    },
    {
      feature: 'Contract Terms',
      am: 'Zero long-term contracts. Weekly billing.',
      callCenters: 'Monthly lock-ins & penalty clauses',
      diy: 'No contracts, but inconsistent revenue',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-am-red-light text-am-red border border-red-200">
            The A&amp;M Pro Advantage
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-am-dark tracking-tight">
            Why Successful Carriers Choose A&amp;M Pro Dispatch
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            We are not a bloated overseas call center. We are an American dispatch partner focused on one metric: <strong>putting maximum profit in your bank account</strong>.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xl mb-14">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 sm:p-5 text-sm font-bold text-slate-700 w-1/4">Operational Capability</th>
                <th className="p-4 sm:p-5 text-sm font-black text-white bg-am-dark w-1/3 border-t-4 border-am-red">
                  <div className="flex items-center gap-2">
                    <span className="text-am-red">★</span> A&amp;M Pro Dispatch
                  </div>
                </th>
                <th className="p-4 sm:p-5 text-xs font-bold text-slate-500 w-1/5">Typical Call Centers</th>
                <th className="p-4 sm:p-5 text-xs font-bold text-slate-500 w-1/5">Self-Dispatching Alone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition">
                  <td className="p-4 sm:p-5 font-bold text-am-dark bg-white">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-am-dark bg-am-red-light/30 border-x border-am-red/20">
                    <div className="flex items-center gap-2 text-am-dark">
                      <Check className="w-4 h-4 text-am-red shrink-0" />
                      <span>{row.am}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{row.callCenters}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500">
                    <span>{row.diy}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-am-offwhite border border-slate-200">
            <div className="p-3 bg-white w-fit rounded-xl border border-slate-200 text-am-red mb-4 shadow-sm">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-am-dark">A True Partnership</h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We succeed only when you make money. Our compensation is directly tied to the final rate we negotiate on your behalf.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-am-offwhite border border-slate-200">
            <div className="p-3 bg-white w-fit rounded-xl border border-slate-200 text-am-red mb-4 shadow-sm">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-am-dark">Credit &amp; Fraud Protection</h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Never get stuck on unpaid loads. We verify broker credit scores, bond health, and payment history before booking every single shipment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-am-offwhite border border-slate-200">
            <div className="p-3 bg-white w-fit rounded-xl border border-slate-200 text-am-red mb-4 shadow-sm">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-am-dark">Direct Cell Phone Access</h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              You receive the direct cell number of your assigned dispatcher. No automated queues, no waiting on hold when you’re at a shipper gate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { ShieldCheck, Truck, Users, Award } from 'lucide-react';

export default function StatsStrip() {
  const stats = [
    {
      icon: Truck,
      value: '48 States',
      label: 'Full Nationwide Freight Lanes',
      highlight: 'Coast-to-Coast Access',
    },
    {
      icon: Award,
      value: '$2.85 - $3.95+',
      label: 'Average Rate Per Mile (RPM)',
      highlight: 'Market-Beating Lane Rates',
    },
    {
      icon: Users,
      value: '1 : 5 Ratio',
      label: 'Trucks Per Dedicated Dispatcher',
      highlight: 'Never Get Lost in a Call Center',
    },
    {
      icon: ShieldCheck,
      value: '0 Lock-Ins',
      label: 'Zero Long-Term Commitments',
      highlight: '1-Week Notice to Pause/End',
    },
  ];

  return (
    <section className="bg-am-dark text-white border-y border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-am-red/50 transition"
              >
                <div className="p-3 rounded-lg bg-am-red/10 text-am-red border border-am-red/20 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-300 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-am-red font-medium mt-1">
                    {stat.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

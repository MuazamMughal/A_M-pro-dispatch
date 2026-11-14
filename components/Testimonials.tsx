'use client';

import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Denzel Washington',
      role: 'Owner-Operator (Dry Van 53ft)',
      location: 'Atlanta, GA',
      text: 'My first year becoming an owner operator was brutal until I partnered with A&M Pro Dispatch. They keep me moving with back-to-back loads and zero deadhead. When a receiver tried refusing detention in Chicago, my dispatcher fought for me and had $225 added to my rate con in an hour.',
      verified: 'Verified Carrier Partner (2+ Years)',
    },
    {
      name: 'Stephen Vance',
      role: 'Fleet Manager (4 Reefer Units)',
      location: 'Dallas, TX',
      text: 'A&M Pro Dispatch treats our trucks like their own. Having dedicated dispatchers who genuinely understand refrigerated temp logs and dwell times is rare. Our fleet gross jumped by $3,200 per week within our first month with them.',
      verified: 'Verified Fleet Owner',
    },
    {
      name: 'Terrel Jenkins',
      role: 'Flatbed & Stepdeck Driver',
      location: 'Charlotte, NC',
      text: 'If you want someone in your corner who actually answers the phone when you are stuck at a gate at 5 AM, A&M Pro Dispatch is it. They know how to negotiate tarp fees and oversized permits. Honest, transparent, and straight shooters.',
      verified: 'Verified Independent Driver',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-am-offwhite border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-am-red-light text-am-red border border-red-200">
            Real Driver Proof
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-am-dark tracking-tight">
            What Carriers Say About Rolling With A&amp;M
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Don’t take our word for it. Hear directly from owner-operators and fleet owners running across the country with A&amp;M Pro Dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col justify-between hover:border-am-red transition duration-300 relative"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="font-extrabold text-am-dark text-base">{rev.name}</div>
                <div className="text-xs font-semibold text-am-red mt-0.5">{rev.role}</div>
                <div className="text-xs text-slate-400">{rev.location}</div>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full w-fit border border-green-200">
                  <CheckCircle className="w-3 h-3" />
                  <span>{rev.verified}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

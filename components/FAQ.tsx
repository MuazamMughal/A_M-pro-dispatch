'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How fast can I get dispatched after submitting my carrier profile?',
      a: 'Once you submit your Carrier Profile Form and email us your Certificate of Insurance (COI), W-9, and MC Authority Letter, we review and complete your carrier packet within 2 to 4 hours. You can be booked and rolling on your first load the very same day.',
    },
    {
      q: 'Do I have to sign a long-term contract with A&M Pro Dispatch?',
      a: 'Never. We operate with zero long-term commitments or lock-ins. All we require is that you honor and complete any load we book on your behalf and settle the agreed dispatch fee once delivery is confirmed. You can pause or terminate dispatching at any time with no penalties.',
    },
    {
      q: 'Do you accept brand new MC Authorities (under 90 or 180 days)?',
      a: 'Yes, 100%! While many brokers restrict younger motor carrier authorities, A&M Pro Dispatch maintains established relationships with hundreds of vetted brokers and direct shippers that happily book carriers with new authorities. We help you build miles, safety history, and broker credit from day one.',
    },
    {
      q: 'Does A&M Pro Dispatch ever force loads on drivers?',
      a: 'Absolutely not. We have a strict 100% No Forced Dispatch policy. You have complete veto power over every single load, lane, destination, rate per mile, and commodity. If you don’t like a load, we keep searching until we find one that meets your exact criteria.',
    },
    {
      q: 'How do payments and dispatch fees work?',
      a: 'We work directly with your factoring company (e.g. Apex, RTS, OTR, Triumph) to submit all invoices and rate confirmations for immediate funding to your bank. If you do not factor, we send you a simple weekly dispatch invoice only AFTER you have completed your loads.',
    },
    {
      q: 'How many trucks does each dispatcher handle?',
      a: 'Unlike large call centers that dump 15 to 20 trucks onto a single operator, A&M Pro Dispatch caps each dispatcher at a maximum of 4 to 5 trucks. This guarantees your dispatcher is constantly monitoring rate boards, anticipating your next reload, and available whenever you call.',
    },
    {
      q: 'What happens if a broker refuses detention or cancels a load (TONU)?',
      a: 'We fight aggressively on your behalf. We immediately file for Truck Ordered Not Used (TONU) fees ($150-$300+) and enforce contractual detention rates ($75-$100/hr) with timestamped GPS and signed in/out BOL records.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-am-red-light text-am-red border border-red-200">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-am-dark tracking-tight">
            Everything You Need To Know
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Have questions before partnering? Here are transparent answers to our most common carrier questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-am-dark hover:text-am-red transition focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-am-red text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-am-offwhite border border-slate-200">
          <h4 className="font-bold text-am-dark text-base">Have a specific question not answered here?</h4>
          <p className="text-xs text-slate-500 mt-1">Our dispatch team is happy to chat through your lane preferences anytime.</p>
          <a
            href="tel:7706016344"
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-am-red hover:underline"
          >
            Call or Text Esmeralda: (770) 601-6344 ➔
          </a>
        </div>
      </div>
    </section>
  );
}

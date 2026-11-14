'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Clock, ShieldCheck, ArrowUp, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-am-dark text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Company Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 rounded-lg overflow-hidden shrink-0 border border-slate-800 shadow-md">
                <Image
                  src="/logo-dark.jpg"
                  alt="A&M Pro Dispatch"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight leading-none block">
                  A&amp;M <span className="text-am-red">PRO</span> DISPATCH
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-am-red">
                  Your Freight. Our Focus.
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Premier freight dispatching service for owner-operators and fleet carriers in the United States. We aggressively negotiate top rates, eliminate deadhead miles, and handle all your broker paperwork so you can stay safe and profitable on the open road.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-am-red shrink-0" />
              <span>100% Independent • No Forced Dispatch</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-extrabold text-white uppercase text-xs tracking-wider border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition">Services</a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-white transition">Supported Equipment</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition">Profit Calculator</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition">Why A&amp;M Pro</a>
              </li>
              <li>
                <a href="#carrier-signup" className="hover:text-white transition text-am-red font-bold">Carrier Sign-Up</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Equipment Types */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-white uppercase text-xs tracking-wider border-b border-slate-800 pb-2">
              Equipment Handled
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-am-red"></span>
                <span>Dry Van (53ft Swing &amp; Roll)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-am-red"></span>
                <span>Reefer / Temperature Controlled</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-am-red"></span>
                <span>Flatbed &amp; Stepdeck / Specialized</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-am-red"></span>
                <span>Box Truck (24-26ft Liftgate)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-am-red"></span>
                <span>Power Only / Drop &amp; Hook</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-am-red"></span>
                <span>Hotshot (40ft Gooseneck)</span>
              </li>
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-white uppercase text-xs tracking-wider border-b border-slate-800 pb-2">
              Operations Center
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-am-red shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400">Call or Text (Operations):</span>
                  <a href="tel:7706016344" className="font-bold text-white hover:text-am-red text-sm">
                    (770) 601-6344
                  </a>
                  <span className="block text-[11px] text-slate-400">Esmeralda Arenas • Director</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-am-red shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400">Direct Email:</span>
                  <a href="mailto:Esmeralda@amprodispatch.com" className="font-medium text-slate-200 hover:text-white">
                    Esmeralda@amprodispatch.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-am-red shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400">Hours:</span>
                  <span className="text-slate-200">Mon – Fri: 6:00 AM – 6:00 PM EST</span>
                  <span className="block text-am-red font-semibold mt-0.5">24/7 Driver Support</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://instagram.com/amprodispatch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-am-red text-slate-300 hover:text-white transition text-xs font-semibold shadow-sm"
                >
                  <Instagram className="w-3.5 h-3.5 text-am-red" />
                  <span>Instagram @amprodispatch</span>
                </a>
                <a
                  href="https://facebook.com/amprodispatch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-am-red text-slate-300 hover:text-white transition text-xs font-semibold shadow-sm"
                >
                  <Facebook className="w-3.5 h-3.5 text-am-red" />
                  <span>Facebook @amprodispatch</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Regulatory Disclaimer:</strong> A&amp;M Pro Dispatch operates as an independent freight dispatching and administrative service provider. We are not a freight brokerage or motor carrier. Carriers must possess active operating authority issued by the Federal Motor Carrier Safety Administration (FMCSA) and maintain required auto liability and cargo insurance coverage. All load bookings, rate confirmations, and billing agreements are executed in the carrier&apos;s name under their authorized motor carrier credentials.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} A&amp;M Pro Dispatch L.L.C. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

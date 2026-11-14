'use client';

import React from 'react';
import { Phone, Mail, Clock, ShieldCheck, Instagram, Facebook } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-am-dark text-slate-300 text-xs border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Details */}
          <div className="flex items-center gap-5 flex-wrap justify-center sm:justify-start">
            <a
              href="tel:7706016344"
              className="flex items-center gap-1.5 font-bold text-white hover:text-am-red transition"
            >
              <Phone className="w-3.5 h-3.5 text-am-red" />
              <span>(770) 601-6344</span>
              <span className="text-[10px] text-am-red font-semibold bg-am-red/10 px-1.5 py-0.5 rounded border border-am-red/20">Call or Text</span>
            </a>

            <span className="hidden sm:inline text-slate-700">|</span>

            <a
              href="mailto:Esmeralda@amprodispatch.com"
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5 text-am-red" />
              <span>Esmeralda@amprodispatch.com</span>
            </a>

            <span className="hidden md:inline text-slate-700">|</span>

            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-am-red" />
              <span>Mon - Fri: 6:00 AM – 6:00 PM EST</span>
            </div>
          </div>

          {/* Socials & 24/7 Road Support */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/amprodispatch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-am-red transition p-1"
                aria-label="A&M Pro Dispatch on Instagram"
                title="Instagram @amprodispatch"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.facebook.com/amprodispatch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-am-red transition p-1"
                aria-label="A&M Pro Dispatch on Facebook"
                title="Facebook @amprodispatch"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
            <span className="text-slate-700">|</span>
            <span className="inline-flex items-center gap-1 text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              24/7 Road Support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

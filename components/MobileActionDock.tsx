'use client';

import React from 'react';
import { Phone, Truck } from 'lucide-react';

export default function MobileActionDock() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-am-dark/95 backdrop-blur-md border-t border-slate-800 p-2.5 sm:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href="tel:7706016344"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs text-white bg-slate-800 border border-slate-700 active:scale-95 transition"
        >
          <Phone className="w-4 h-4 text-am-red" />
          <span>Call or Text</span>
        </a>

        <a
          href="#carrier-signup"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs text-white bg-am-red active:scale-95 transition shadow-lg shadow-red-600/30"
        >
          <Truck className="w-4 h-4" />
          <span>Sign Up Truck</span>
        </a>
      </div>
    </div>
  );
}

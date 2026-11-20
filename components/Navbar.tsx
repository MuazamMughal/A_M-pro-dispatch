'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, ArrowRight, Truck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Equipment', href: '#equipment' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
              <Image
                src="/logo.jpg"
                alt="A&M Pro Dispatch Logo"
                fill
                sizes="(max-width: 640px) 48px, 56px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-black text-xl sm:text-2xl tracking-tight text-am-dark leading-none group-hover:text-am-red transition">
                A&amp;M <span className="text-am-red">PRO</span> DISPATCH
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-am-red transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:7706016344"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-am-dark border border-slate-300 hover:border-am-red hover:text-am-red transition"
            >
              <Phone className="w-3.5 h-3.5 text-am-red" />
              <span>(770) 601-6344</span>
            </a>

            <a
              href="#carrier-signup"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-am-red hover:bg-am-red-hover transition shadow-md shadow-red-600/20"
            >
              <span>Carrier Sign-Up</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-am-dark hover:text-am-red hover:bg-slate-100 transition focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-md text-base font-semibold text-am-dark hover:bg-slate-100 hover:text-am-red transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <a
              href="tel:7706016344"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold text-sm text-am-dark bg-slate-100 border border-slate-300"
            >
              <Phone className="w-4 h-4 text-am-red" />
              <span>Call / Text: (770) 601-6344</span>
            </a>

            <a
              href="#carrier-signup"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold text-sm text-white bg-am-red hover:bg-am-red-hover transition shadow-lg shadow-red-600/30"
            >
              <Truck className="w-4 h-4" />
              <span>Start Carrier Onboarding</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

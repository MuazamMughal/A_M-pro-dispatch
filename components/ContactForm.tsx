'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, Clock, ShieldCheck, Instagram, Facebook } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send message.');

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please call or text us directly at (770) 601-6344.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-am-offwhite border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Company Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-am-red bg-am-red-light px-3 py-1 rounded-full border border-red-200">
                Direct Contact Desk
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-am-dark tracking-tight">
                Get In Touch With A&amp;M Pro Dispatch
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Have questions about our lane capacity, percentage rates, broker networks, or carrier setup? Our dispatch operations team is available 24/7.
              </p>
            </div>

            <div className="space-y-4">
              {/* Esmeralda Arenas Contact Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-am-red/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-am-red text-white rounded-xl shrink-0 shadow-md shadow-red-600/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-am-red">
                      Director of Dispatch Operations
                    </span>
                    <h3 className="text-xl font-black text-am-dark">Esmeralda Arenas</h3>
                    <div className="pt-1">
                      <span className="text-xs font-bold text-slate-400 block uppercase">Call or Text:</span>
                      <a href="tel:7706016344" className="text-xl font-black text-am-red hover:underline block">
                        (770) 601-6344
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 bg-am-dark text-white rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Email</h4>
                  <a href="mailto:Esmeralda@amprodispatch.com" className="text-base font-bold text-am-dark hover:text-am-red transition">
                    Esmeralda@amprodispatch.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Send Rate Cons, COIs &amp; invoices directly</p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 bg-am-slate text-white rounded-xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Dispatch Desk Hours</h4>
                  <p className="text-sm font-bold text-am-dark">Mon – Fri: 6:00 AM – 6:00 PM EST</p>
                  <p className="text-xs font-semibold text-am-red mt-0.5">
                    ★ 24/7 On-Road Emergency Driver &amp; Breakdown Desk
                  </p>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Follow Us On Social Media
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://instagram.com/amprodispatch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition text-xs font-bold text-slate-700 hover:text-am-red"
                  >
                    <Instagram className="w-4 h-4 text-am-red" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com/amprodispatch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition text-xs font-bold text-slate-700 hover:text-am-red"
                  >
                    <Facebook className="w-4 h-4 text-am-red" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-bold text-am-dark mb-1">Send Us a Quick Message</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Complete the quick form below and Esmeralda or our dispatch team will contact you within 30 minutes.
            </p>

            {status === 'success' && (
              <div className="mb-6 p-5 rounded-2xl bg-green-50 border border-green-200 text-green-900 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">Message Delivered!</h4>
                  <p className="text-xs text-green-700 mt-0.5">
                    Your message has been delivered to Esmeralda Arenas. For immediate loads, call or text <strong>(770) 601-6344</strong>.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-5 rounded-2xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">Failed to Send</h4>
                  <p className="text-xs text-red-700 mt-0.5">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Name / Carrier Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe / Apex Trucking"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-am-red bg-slate-50/50 text-am-dark text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@carrier.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-am-red bg-slate-50/50 text-am-dark text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-am-red bg-slate-50/50 text-am-dark text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Message / Equipment Notes
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what equipment you run, current empty location, or specific questions..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-am-red bg-slate-50/50 text-am-dark text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-xl text-sm font-extrabold text-white bg-am-red hover:bg-am-red-hover transition shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Dispatching Message via Resend...</span>
                ) : (
                  <>
                    <span>Send Message to Dispatch Operations</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

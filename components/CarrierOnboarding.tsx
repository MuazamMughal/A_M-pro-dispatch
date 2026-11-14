'use client';

import React, { useState } from 'react';
import { Truck, CheckCircle2, ShieldCheck, ArrowRight, AlertCircle, FileText } from 'lucide-react';

export default function CarrierOnboarding() {
  const [form, setForm] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    mcNumber: '',
    dotNumber: '',
    equipmentType: 'Dry Van (53ft)',
    truckCount: '1 Truck (Owner Operator)',
    factoringCompany: '',
    preferredLanes: 'Midwest & Southeast',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit carrier profile.');

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please call or text dispatch directly at (770) 601-6344.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="carrier-signup" className="py-20 bg-am-dark text-white relative scroll-mt-20">
      {/* Decorative highway accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-am-red to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-am-red text-white shadow-sm">
            <Truck className="w-3.5 h-3.5" /> Instant Carrier Profile
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Get Set Up &amp; Rolling In Under 24 Hours
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            No long onboarding delays. Complete the carrier form below and our operations department will immediately send our dispatch agreement and begin lining up high-paying loads for your equipment.
          </p>
        </div>

        <div className="bg-white text-am-dark rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border-t-4 border-am-red">
          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-am-dark">
                  Carrier Profile Received!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  We have registered your details for <strong>{form.companyName || form.contactName}</strong> (MC# {form.mcNumber}). A confirmation has been emailed to <strong>{form.email}</strong>.
                </p>
              </div>

              {/* Next Steps Card */}
              <div className="max-w-lg mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-am-red flex items-center gap-1.5">
                  <FileText className="w-4 h-4" /> Next Steps to Book Loads:
                </h4>
                <p className="text-xs text-slate-600">
                  Please reply to our welcome email or text our dispatch desk with the following documents:
                </p>
                <ul className="text-xs font-semibold text-slate-800 space-y-1.5 pl-4 list-disc">
                  <li>Certificate of Insurance (COI) ($1M Auto Liability / $100K Cargo)</li>
                  <li>Signed W-9 Form (Current Year)</li>
                  <li>Copy of FMCSA Operating Authority</li>
                  <li>Factoring Notice of Assignment (NOA) - if applicable</li>
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:7706016344"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-am-red hover:bg-am-red-hover text-white transition shadow-lg shadow-red-600/30"
                >
                  Call or Text Operations: (770) 601-6344
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-slate-500 hover:text-am-dark underline"
                >
                  Submit Another Truck / Trailer
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Carrier / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    placeholder="e.g. Apex Express Hauling LLC"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-am-red outline-none bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Contact Person Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.contactName}
                    onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                    placeholder="e.g. Marcus Johnson"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-am-red outline-none bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Direct Phone (Cell / Driver Phone) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-am-red outline-none bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Email Address (For Rate Confirmations) *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="dispatch@yourcarrier.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-am-red outline-none bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    MC Number (Motor Carrier) *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.mcNumber}
                    onChange={(e) => setForm({ ...form, mcNumber: e.target.value })}
                    placeholder="MC# 1234567"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-am-red outline-none bg-slate-50/50 font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    USDOT Number
                  </label>
                  <input
                    type="text"
                    value={form.dotNumber}
                    onChange={(e) => setForm({ ...form, dotNumber: e.target.value })}
                    placeholder="DOT# 891011"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-am-red outline-none bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Primary Equipment Type *
                  </label>
                  <select
                    value={form.equipmentType}
                    onChange={(e) => setForm({ ...form, equipmentType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-am-red outline-none bg-white font-medium"
                  >
                    <option>Dry Van (53ft)</option>
                    <option>Reefer (53ft)</option>
                    <option>Flatbed / Stepdeck</option>
                    <option>Box Truck (24-26ft)</option>
                    <option>Power Only</option>
                    <option>Hotshot (40ft)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Fleet Size / Trucks
                  </label>
                  <select
                    value={form.truckCount}
                    onChange={(e) => setForm({ ...form, truckCount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-am-red outline-none bg-white"
                  >
                    <option>1 Truck (Owner Operator)</option>
                    <option>2 - 5 Trucks (Small Fleet)</option>
                    <option>6 - 15 Trucks (Mid Fleet)</option>
                    <option>16+ Trucks (Enterprise)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Factoring Company
                  </label>
                  <input
                    type="text"
                    value={form.factoringCompany}
                    onChange={(e) => setForm({ ...form, factoringCompany: e.target.value })}
                    placeholder="e.g. Apex, RTS, OTR, Triumph"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-am-red outline-none bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Preferred Lanes / Radius
                  </label>
                  <input
                    type="text"
                    value={form.preferredLanes}
                    onChange={(e) => setForm({ ...form, preferredLanes: e.target.value })}
                    placeholder="e.g. Midwest, Southeast, OTR"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-am-red outline-none bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Security Banner */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3 text-xs text-slate-600">
                <ShieldCheck className="w-5 h-5 text-am-red shrink-0" />
                <span>
                  <strong>Carrier Privacy Commitment:</strong> We keep your MC authority and company records strictly confidential. No hidden setup charges. Zero forced dispatch.
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-xl text-base font-extrabold text-white bg-am-red hover:bg-am-red-hover transition shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Processing Carrier Profile...</span>
                ) : (
                  <>
                    <span>Submit Carrier Profile &amp; Request Agreement</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

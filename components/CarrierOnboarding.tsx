'use client';

import React, { useState } from 'react';
import { Truck, CheckCircle2, ArrowRight, AlertCircle, FileText } from 'lucide-react';
import {
  validateName,
  validateEmail,
  validatePhone,
  validateMCNumber,
  validateDOTNumber,
} from '@/lib/validation';

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
    hp: '', // Honeypot field
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  // Handle phone auto-formatting: (XXX) XXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 10);
    let formatted = raw;
    if (raw.length > 6) {
      formatted = `(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6)}`;
    } else if (raw.length > 3) {
      formatted = `(${raw.slice(0, 3)}) ${raw.slice(3)}`;
    } else if (raw.length > 0) {
      formatted = `(${raw}`;
    }
    setForm((prev) => ({ ...prev, phone: formatted }));
    if (fieldErrors.phone) {
      setFieldErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  // Handle MC number formatting: cleans digits and formats as MC# XXXXXXX
  const handleMCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawDigits = e.target.value.replace(/\D/g, '').slice(0, 8);
    setForm((prev) => ({ ...prev, mcNumber: rawDigits ? `MC# ${rawDigits}` : '' }));
    if (fieldErrors.mcNumber) {
      setFieldErrors((prev) => ({ ...prev, mcNumber: '' }));
    }
  };

  // Handle DOT number formatting: cleans digits
  const handleDOTChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawDigits = e.target.value.replace(/\D/g, '').slice(0, 9);
    setForm((prev) => ({ ...prev, dotNumber: rawDigits ? `DOT# ${rawDigits}` : '' }));
    if (fieldErrors.dotNumber) {
      setFieldErrors((prev) => ({ ...prev, dotNumber: '' }));
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateAll = (): boolean => {
    const errors: Record<string, string> = {};

    const companyCheck = validateName(form.companyName || form.contactName, 'Carrier / Company Name');
    if (!companyCheck.isValid) errors.companyName = companyCheck.error || 'Invalid company name';

    const contactCheck = validateName(form.contactName, 'Contact Person Name');
    if (!contactCheck.isValid) errors.contactName = contactCheck.error || 'Invalid contact name';

    const emailCheck = validateEmail(form.email);
    if (!emailCheck.isValid) errors.email = emailCheck.error || 'Invalid email address';

    const phoneCheck = validatePhone(form.phone);
    if (!phoneCheck.isValid) errors.phone = phoneCheck.error || 'Invalid phone number';

    const mcCheck = validateMCNumber(form.mcNumber);
    if (!mcCheck.isValid) errors.mcNumber = mcCheck.error || 'Invalid MC number';

    if (form.dotNumber) {
      const dotCheck = validateDOTNumber(form.dotNumber);
      if (!dotCheck.isValid) errors.dotNumber = dotCheck.error || 'Invalid DOT number';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');

    if (!validateAll()) {
      setServerError('Please correct the highlighted fields before submitting.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit carrier profile.');

      setSubmitted(true);
      setFieldErrors({});
    } catch (err: any) {
      setServerError(err.message || 'An error occurred. Please call or text dispatch directly at (770) 601-6344.');
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
            No long onboarding delays. Complete the carrier form below and our operations department will immediately review your operating credentials and prepare high-paying loads.
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
                  We have registered your details for <strong>{form.companyName || form.contactName}</strong> ({form.mcNumber}). Our dispatch team will follow up shortly at <strong>{form.phone}</strong>.
                </p>
              </div>

              {/* Next Steps Card */}
              <div className="max-w-lg mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-am-red flex items-center gap-1.5">
                  <FileText className="w-4 h-4" /> Required Carrier Documents:
                </h4>
                <p className="text-xs text-slate-600">
                  Please email or text our dispatch desk with the following documents to finalize your carrier packet:
                </p>
                <ul className="text-xs font-semibold text-slate-800 space-y-1.5 pl-4 list-disc">
                  <li>Certificate of Insurance (COI) ($1M Auto Liability / $100K Cargo)</li>
                  <li>Signed W-9 Form (Current Year)</li>
                  <li>Copy of FMCSA Operating Authority (MC / DOT certificate)</li>
                  <li>Factoring Notice of Assignment (NOA) - if factoring</li>
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
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Bot Honeypot */}
              <input
                type="text"
                name="user_carrier_code_hp"
                value={form.hp}
                onChange={(e) => setForm({ ...form, hp: e.target.value })}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {serverError && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span>{serverError}</span>
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
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder="e.g. Apex Express Hauling LLC"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition outline-none bg-slate-50/50 ${
                      fieldErrors.companyName
                        ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-400'
                        : 'border-slate-300 focus:border-am-red focus:ring-2 focus:ring-am-red/20'
                    }`}
                  />
                  {fieldErrors.companyName && (
                    <p className="text-xs font-semibold text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{fieldErrors.companyName}</span>
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Contact Person Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.contactName}
                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                    placeholder="e.g. Marcus Johnson"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition outline-none bg-slate-50/50 ${
                      fieldErrors.contactName
                        ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-400'
                        : 'border-slate-300 focus:border-am-red focus:ring-2 focus:ring-am-red/20'
                    }`}
                  />
                  {fieldErrors.contactName && (
                    <p className="text-xs font-semibold text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{fieldErrors.contactName}</span>
                    </p>
                  )}
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
                    onChange={handlePhoneChange}
                    placeholder="(555) 000-0000"
                    maxLength={14}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition outline-none bg-slate-50/50 font-medium ${
                      fieldErrors.phone
                        ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-400'
                        : 'border-slate-300 focus:border-am-red focus:ring-2 focus:ring-am-red/20'
                    }`}
                  />
                  {fieldErrors.phone && (
                    <p className="text-xs font-semibold text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{fieldErrors.phone}</span>
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Email Address (For Rate Confirmations) *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="dispatch@yourcarrier.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition outline-none bg-slate-50/50 ${
                      fieldErrors.email
                        ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-400'
                        : 'border-slate-300 focus:border-am-red focus:ring-2 focus:ring-am-red/20'
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="text-xs font-semibold text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{fieldErrors.email}</span>
                    </p>
                  )}
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
                    onChange={handleMCChange}
                    placeholder="MC# 1234567"
                    maxLength={12}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition outline-none bg-slate-50/50 font-bold ${
                      fieldErrors.mcNumber
                        ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-400 text-red-900'
                        : 'border-slate-300 focus:border-am-red focus:ring-2 focus:ring-am-red/20'
                    }`}
                  />
                  {fieldErrors.mcNumber && (
                    <p className="text-xs font-semibold text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{fieldErrors.mcNumber}</span>
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    USDOT Number (Optional)
                  </label>
                  <input
                    type="text"
                    value={form.dotNumber}
                    onChange={handleDOTChange}
                    placeholder="DOT# 891011"
                    maxLength={14}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition outline-none bg-slate-50/50 ${
                      fieldErrors.dotNumber
                        ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-400'
                        : 'border-slate-300 focus:border-am-red focus:ring-2 focus:ring-am-red/20'
                    }`}
                  />
                  {fieldErrors.dotNumber && (
                    <p className="text-xs font-semibold text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{fieldErrors.dotNumber}</span>
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Primary Equipment Type *
                  </label>
                  <select
                    value={form.equipmentType}
                    onChange={(e) => handleInputChange('equipmentType', e.target.value)}
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
                    onChange={(e) => handleInputChange('truckCount', e.target.value)}
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
                    onChange={(e) => handleInputChange('factoringCompany', e.target.value)}
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
                    onChange={(e) => handleInputChange('preferredLanes', e.target.value)}
                    placeholder="e.g. Midwest, Southeast, OTR"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-am-red outline-none bg-slate-50/50"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-xl text-base font-extrabold text-white bg-am-red hover:bg-am-red-hover transition shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Verifying &amp; Submitting Profile...</span>
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

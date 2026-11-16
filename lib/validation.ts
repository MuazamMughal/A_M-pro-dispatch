/**
 * Validation utilities for A&M Pro Dispatch forms
 * Protects against spam, false values, dummy data, and malformed submissions.
 */

// Known dummy / fake email patterns
const FAKE_EMAIL_PATTERNS = [
  /^test@/i,
  /^testing@/i,
  /^fake@/i,
  /^asdf@/i,
  /^qwerty@/i,
  /^123@/i,
  /^admin@/i,
  /^demo@/i,
  /@test\./i,
  /@fake\./i,
  /@asdf\./i,
  /@example\./i,
  /@sample\./i,
  /@mailinator\.com$/i,
  /@tempmail\./i,
  /@10minutemail\./i,
  /@guerrillamail\./i,
];

// Repetitive or sequential phone number patterns
const FAKE_PHONE_PATTERNS = [
  /^0{10,}$/,
  /^1{10,}$/,
  /^2{10,}$/,
  /^3{10,}$/,
  /^4{10,}$/,
  /^5{10,}$/,
  /^6{10,}$/,
  /^7{10,}$/,
  /^8{10,}$/,
  /^9{10,}$/,
  /^1234567890$/,
  /^0123456789$/,
  /^9876543210$/,
  /^0987654321$/,
];

// Spam / dummy name patterns
const FAKE_NAMES = ['test', 'asdf', 'qwerty', 'fake', 'admin', 'user', 'na', 'n/a', 'none', 'unknown', 'xxx', 'nobody', 'xyz'];

export function sanitizeText(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/[<>]/g, '') // Strip brackets
    .slice(0, 2000); // Limit length
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function validateName(name: string, fieldName = 'Name'): { isValid: boolean; error?: string; cleanValue: string } {
  const clean = sanitizeText(name);
  if (!clean || clean.length < 2) {
    return { isValid: false, error: `${fieldName} must be at least 2 characters long.`, cleanValue: clean };
  }
  if (clean.length > 80) {
    return { isValid: false, error: `${fieldName} is too long (maximum 80 characters).`, cleanValue: clean };
  }
  // Must contain at least two letters
  const letterCount = (clean.match(/[a-zA-Z]/g) || []).length;
  if (letterCount < 2) {
    return { isValid: false, error: `${fieldName} must contain genuine letters.`, cleanValue: clean };
  }
  // Check against obvious spam names
  if (FAKE_NAMES.includes(clean.toLowerCase())) {
    return { isValid: false, error: `Please enter a genuine ${fieldName.toLowerCase()}.`, cleanValue: clean };
  }
  return { isValid: true, cleanValue: clean };
}

export function validateEmail(email: string): { isValid: boolean; error?: string; cleanValue: string } {
  const clean = sanitizeText(email).toLowerCase();
  if (!clean) {
    return { isValid: false, error: 'Email address is required.', cleanValue: clean };
  }
  // Standard email format
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(clean)) {
    return { isValid: false, error: 'Please enter a valid email address (e.g. name@company.com).', cleanValue: clean };
  }
  // Ensure TLD is at least 2 letters
  const parts = clean.split('.');
  const tld = parts[parts.length - 1];
  if (!tld || tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) {
    return { isValid: false, error: 'Please enter a valid email with a proper domain extension.', cleanValue: clean };
  }
  // Check against fake email patterns
  for (const pattern of FAKE_EMAIL_PATTERNS) {
    if (pattern.test(clean)) {
      return { isValid: false, error: 'Please provide a genuine, active business or personal email.', cleanValue: clean };
    }
  }
  return { isValid: true, cleanValue: clean };
}

export function validatePhone(phone: string): { isValid: boolean; error?: string; cleanValue: string; formatted: string } {
  const raw = sanitizeText(phone);
  const digits = raw.replace(/\D/g, '');

  if (!digits) {
    return { isValid: false, error: 'Phone number is required.', cleanValue: raw, formatted: raw };
  }

  // Handle US numbers (10 digits, or 11 with country code 1)
  let normalized = digits;
  if (digits.length === 11 && digits.startsWith('1')) {
    normalized = digits.slice(1);
  }

  if (normalized.length < 10) {
    return {
      isValid: false,
      error: 'Phone number must be at least 10 digits (including area code).',
      cleanValue: raw,
      formatted: raw,
    };
  }

  if (normalized.length > 15) {
    return {
      isValid: false,
      error: 'Phone number is too long (maximum 15 digits).',
      cleanValue: raw,
      formatted: raw,
    };
  }

  // Check against dummy repetitive/sequential numbers
  for (const pattern of FAKE_PHONE_PATTERNS) {
    if (pattern.test(normalized)) {
      return {
        isValid: false,
        error: 'Please enter a valid, active phone number.',
        cleanValue: raw,
        formatted: raw,
      };
    }
  }

  // Format as (XXX) XXX-XXXX if 10 digits
  let formatted = raw;
  if (normalized.length === 10) {
    formatted = `(${normalized.slice(0, 3)}) ${normalized.slice(3, 6)}-${normalized.slice(6)}`;
  }

  return { isValid: true, cleanValue: normalized, formatted };
}

export function validateMCNumber(mc: string): { isValid: boolean; error?: string; cleanValue: string; formatted: string } {
  const raw = sanitizeText(mc);
  if (!raw) {
    return { isValid: false, error: 'MC Number is required for carrier verification.', cleanValue: raw, formatted: raw };
  }

  // Extract digits
  const digits = raw.replace(/\D/g, '');

  if (!digits || digits.length < 5 || digits.length > 8) {
    return {
      isValid: false,
      error: 'Please enter a valid 5 to 8 digit MC Number (e.g. MC# 1234567).',
      cleanValue: raw,
      formatted: raw,
    };
  }

  // Check for fake numbers like 00000, 11111, 12345
  if (/^(0+|1+|2+|3+|4+|5+|6+|7+|8+|9+)$/.test(digits) || digits === '12345' || digits === '123456' || digits === '1234567') {
    return {
      isValid: false,
      error: 'Please enter your genuine FMCSA MC Number.',
      cleanValue: raw,
      formatted: raw,
    };
  }

  const formatted = `MC# ${digits}`;
  return { isValid: true, cleanValue: digits, formatted };
}

export function validateDOTNumber(dot: string): { isValid: boolean; error?: string; cleanValue: string; formatted: string } {
  const raw = sanitizeText(dot);
  if (!raw) {
    return { isValid: true, cleanValue: '', formatted: '' }; // Optional
  }

  const digits = raw.replace(/\D/g, '');
  if (digits.length < 5 || digits.length > 9) {
    return {
      isValid: false,
      error: 'USDOT number must be between 5 and 9 digits (e.g. DOT# 2345678).',
      cleanValue: raw,
      formatted: raw,
    };
  }

  if (/^(0+|1+|2+|3+|4+|5+|6+|7+|8+|9+)$/.test(digits)) {
    return {
      isValid: false,
      error: 'Please enter a valid USDOT number.',
      cleanValue: raw,
      formatted: raw,
    };
  }

  return { isValid: true, cleanValue: digits, formatted: `DOT# ${digits}` };
}

export function validateMessage(msg: string): { isValid: boolean; error?: string; cleanValue: string } {
  const clean = sanitizeText(msg);
  if (clean && clean.length > 2000) {
    return { isValid: false, error: 'Message is too long (maximum 2,000 characters).', cleanValue: clean };
  }
  return { isValid: true, cleanValue: clean };
}

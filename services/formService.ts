const API_BASE = import.meta.env.VITE_API_BASE_URL || '';
const ENDPOINT = API_BASE
  ? `${API_BASE}/api/contact`
  : (import.meta.env.VITE_FORM_ENDPOINT || '/api/contact');

export interface FormErrors {
  [key: string]: string;
}

export interface FormResult {
  ok: boolean;
  message: string;
  errors?: FormErrors;
}

export function validateField(name: string, value: string): string {
  switch (name) {
    case 'name':
      if (!value || value.trim().length < 2) return 'Name is required (min 2 characters)';
      if (value.length > 200) return 'Name is too long';
      if (!/^[a-zA-Z\s\-'.,()]+$/.test(value)) return 'Name contains invalid characters';
      return '';
    case 'email':
      if (!value) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
      return '';
    case 'message':
      if (value && value.length > 5000) return 'Message is too long (max 5000 characters)';
      return '';
    case 'company':
      if (value && value.length > 200) return 'Company name is too long';
      return '';
    default:
      return '';
  }
}

export function validateForm(data: Record<string, string>): FormErrors {
  const errors: FormErrors = {};
  const required = ['name', 'email'];
  for (const field of required) {
    if (!data[field] || !data[field].trim()) {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
  }
  for (const key of Object.keys(data)) {
    const err = validateField(key, data[key]);
    if (err) errors[key] = err;
  }
  return errors;
}

export async function submitForm(data: Record<string, string>): Promise<FormResult> {
  const clientErrors = validateForm(data);
  if (Object.keys(clientErrors).length > 0) {
    return { ok: false, message: 'Please fix the errors below.', errors: clientErrors };
  }

  if (!ENDPOINT) {
    return { ok: false, message: 'Form endpoint is not configured.' };
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (res.ok) {
      return { ok: true, message: json.message || 'Message sent successfully.' };
    }
    return {
      ok: false,
      message: json.error || 'Submission failed.',
      errors: json.details ? Object.fromEntries(json.details.map((d: string) => ['form', d])) : undefined,
    };
  } catch {
    return { ok: false, message: 'Network error. Please check your connection and try again.' };
  }
}
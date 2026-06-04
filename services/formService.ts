const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '/api/contact';

export const formService = {
  async submit(payload: Record<string, unknown>) {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const err = await response.json().catch(() => ({ error: response.statusText }));
      throw new Error(err.error || 'Form submission failed');
    }
    return response.json();
  }
};

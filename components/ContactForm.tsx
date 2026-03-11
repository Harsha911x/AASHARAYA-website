'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  gdpr: boolean;
  honeypot: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    gdpr: false,
    honeypot: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (form.honeypot) return;

    if (!form.gdpr) {
      setErrorMsg('Please agree to our privacy policy to continue.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '', gdpr: false, honeypot: '' });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again or email us directly.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-12 text-center" role="status" aria-live="polite">
        <div className="w-12 h-12 border border-studio-black mx-auto mb-6 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M3.5 10.5l4 4 9-9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-2xl mb-3">Thank you</h3>
        <p className="font-body text-studio-muted">
          We've received your message and will be in touch within two working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      {/* Honeypot field — hidden from real users */}
      <div aria-hidden="true" style={{ position: 'absolute', opacity: 0, height: 0, overflow: 'hidden' }}>
        <input
          type="text"
          name="honeypot"
          value={form.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="name" className="block font-sans text-xs tracking-widest uppercase mb-2">
            Full Name <span aria-label="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className="w-full border border-studio-border px-4 py-3 font-body text-sm focus:outline-none focus:border-studio-black transition-colors bg-transparent"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-sans text-xs tracking-widest uppercase mb-2">
            Email Address <span aria-label="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="w-full border border-studio-border px-4 py-3 font-body text-sm focus:outline-none focus:border-studio-black transition-colors bg-transparent"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="phone" className="block font-sans text-xs tracking-widest uppercase mb-2">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel"
          className="w-full border border-studio-border px-4 py-3 font-body text-sm focus:outline-none focus:border-studio-black transition-colors bg-transparent"
          placeholder="+44 (0)20 7000 0000"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block font-sans text-xs tracking-widest uppercase mb-2">
          Message <span aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full border border-studio-border px-4 py-3 font-body text-sm focus:outline-none focus:border-studio-black transition-colors bg-transparent resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <div className="mb-7">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="gdpr"
            checked={form.gdpr}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 border-studio-border accent-studio-black"
            required
          />
          <span className="font-body text-sm text-studio-muted leading-relaxed">
            I agree to my data being stored and processed in accordance with AASHRAYA's{' '}
            <a href="/privacy" className="underline hover:text-studio-black transition-colors">
              Privacy Policy
            </a>
            . <span aria-label="required">*</span>
          </span>
        </label>
      </div>

      {errorMsg && (
        <p className="mb-5 font-body text-sm text-red-600" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full md:w-auto font-sans text-xs tracking-widest uppercase bg-studio-black text-white px-10 py-4 hover:bg-studio-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  );
}

import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, Send } from 'lucide-react';
import { profile } from '../data/site';
import { Section } from './Section';

const fieldClass =
  'w-full rounded-md border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/60 focus-visible:border-accent focus-visible:outline-accent';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [opened, setOpened] = useState(false);

  // The form opens the visitor's email app with the message filled in,
  // so it works without a server.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name} via your portfolio`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg text-muted">
        Have a role, a project or a question? Send a message and I will reply by email.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-flex items-center gap-3 font-display text-2xl font-bold tracking-tight transition-colors hover:text-accent"
      >
        <Mail size={24} aria-hidden="true" />
        {profile.email}
      </a>

      <form onSubmit={handleSubmit} className="mt-12 max-w-xl space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Your name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={fieldClass}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Your email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={fieldClass}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={fieldClass}
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 font-medium text-paper transition-colors hover:bg-accent"
        >
          <Send size={18} aria-hidden="true" />
          Send message
        </button>
        {opened && (
          <p role="status" className="text-sm text-muted">
            Your email app should open with the message ready to send. If it does not, write to{' '}
            <a href={`mailto:${profile.email}`} className="font-medium text-ink underline underline-offset-4">
              {profile.email}
            </a>
            .
          </p>
        )}
      </form>
    </Section>
  );
}

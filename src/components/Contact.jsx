import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.message) return;
    setSent(true);
    setForm({ email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider text-center scroll-fade-in" style={{ marginBottom: '4rem' }}>
          <span className="text-accent">CONTACT</span>{' '}
          <span className="text-text-primary">ME</span>
        </h2>

        <div
          className="scroll-fade-in"
          style={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '12px',
            padding: '2rem',
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                htmlFor="email"
                className="text-sm text-text-secondary"
                style={{ display: 'block', marginBottom: '0.5rem' }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="text-text-primary text-sm"
                style={{
                  width: '100%',
                  backgroundColor: '#0d0d0d',
                  border: '1px solid #2a2a2a',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  outline: 'none',
                  color: '#ffffff',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#00e5ff')}
                onBlur={(e) => (e.target.style.borderColor = '#2a2a2a')}
                placeholder="your@email.com"
                required
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                htmlFor="message"
                className="text-sm text-text-secondary"
                style={{ display: 'block', marginBottom: '0.5rem' }}
              >
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                className="text-text-primary text-sm"
                style={{
                  width: '100%',
                  backgroundColor: '#0d0d0d',
                  border: '1px solid #2a2a2a',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  outline: 'none',
                  resize: 'none',
                  color: '#ffffff',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#00e5ff')}
                onBlur={(e) => (e.target.style.borderColor = '#2a2a2a')}
                placeholder="Write your message..."
                required
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                type="submit"
                className="btn-glow"
                style={{
                  padding: '0.75rem 2rem',
                  border: '2px solid #00e5ff',
                  color: '#00e5ff',
                  borderRadius: '6px',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#00e5ff';
                  e.target.style.color = '#0d0d0d';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#00e5ff';
                }}
              >
                Send Message
              </button>
              {sent && (
                <span className="text-accent text-sm animate-pulse">
                  ✓ Message sent successfully!
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

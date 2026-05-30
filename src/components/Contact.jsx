import { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

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

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com' },
    { name: 'Email', icon: MdEmail, url: 'mailto:contact@example.com' },
  ];

  return (
    <section id="contact" className="py-24 px-6" style={{ padding: '0rem 1.5rem 3.5rem' }} >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider text-center scroll-fade-in" style={{ marginBottom: '3rem' }}>
          <span className="text-accent">CONTACT</span>{' '}
          <span className="text-text-primary">ME</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-fade-in">
          {/* Left Side - Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent mb-8" style={{ marginBottom: '2rem' }}>
              Connect With Me
            </h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-contact flex items-center gap-3 px-6 py-3 rounded-lg border-2 border-accent hover:bg-accent/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/40 flex-1"
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    borderColor: '#00e5ff',
                    display: 'inline-flex',
                    padding: '0.75rem 1.5rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 229, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <social.icon size={24} color="#00e5ff" />
                  <span style={{ color: '#00e5ff', fontWeight: 600, fontSize: '0.95rem' }}>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className="md:col-span-2"
            style={{
              backgroundColor: '#1a1a1a',
              border: '1px solid #2a2a2a',
              borderRadius: '12px',
              padding: '2rem',
            }}
          >
            <h3 className="text-2xl font-bold text-accent mb-8" style={{ marginBottom: '2rem' }}>
              Send Me a Message
            </h3>
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
      </div>
    </section>
  );
}

import { useState } from 'react';
import { 
  FaEnvelope, 
  FaGithub, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaCopy, 
  FaCheck, 
  FaTerminal 
} from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Security Role / Internship', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('2301104393@student.buksu.edu.ph');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.message) return;

    const subject = encodeURIComponent(`[Portfolio Inquiry] ${form.subject} from ${form.name || form.email}`);
    const body = encodeURIComponent(`Sender Name: ${form.name}\nSender Email: ${form.email}\nTopic: ${form.subject}\n\nMessage:\n${form.message}`);
    
    window.location.href = `mailto:2301104393@student.buksu.edu.ph?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setForm({ name: '', email: '', subject: 'Security Role / Internship', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative flex flex-col items-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-18 sm:mb-24 scroll-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span>[ SECTION: 05 // TRANSMISSION ]</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            GET IN <span className="text-cyan-400">TOUCH</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Looking for an IT or cybersecurity specialist with verified networking competencies? Let&apos;s connect.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start scroll-fade-in">
          
          {/* Left Column: Direct Channels & Status */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="cyber-card rounded-2xl p-8 sm:p-10 space-y-8">
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-white mb-3">
                  Communication Terminal
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Available for technical internships, entry-level cybersecurity operations, and network infrastructure roles.
                </p>
              </div>

              {/* Status Badge */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center gap-4">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 pulse-online flex-shrink-0"></span>
                <div>
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide">
                    STATUS: READY FOR ENGAGEMENT
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Open to remote or on-site opportunities
                  </div>
                </div>
              </div>

              {/* Contact Methods List */}
              <div className="space-y-4 font-mono text-xs">
                
                {/* Email Direct */}
                <div className="p-4.5 rounded-xl bg-slate-900 border border-cyan-500/20 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <FaEnvelope size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Primary Email</div>
                      <a 
                        href="mailto:2301104393@student.buksu.edu.ph" 
                        className="text-white hover:text-cyan-300 font-semibold truncate block transition-colors mt-0.5"
                      >
                        2301104393@student.buksu.edu.ph
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-cyan-950 text-slate-300 hover:text-cyan-400 transition-colors flex-shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  </button>
                </div>

                {/* GitHub */}
                <a
                  href="https://github.com/R17suu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4.5 rounded-xl bg-slate-900 border border-cyan-500/20 flex items-center gap-3.5 hover:border-cyan-400/50 hover:bg-slate-850 transition-all text-white group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <FaGithub size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">GitHub Repository</div>
                    <div className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors mt-0.5">
                      github.com/R17suu
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="p-4.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 flex-shrink-0">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Base Location</div>
                    <div className="font-semibold text-slate-200 mt-0.5">
                      Malaybalay City, Bukidnon, Philippines
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="cyber-card rounded-2xl p-8 sm:p-10">
              
              <div className="flex items-center gap-2.5 mb-8 pb-5 border-b border-slate-800">
                <FaTerminal className="text-cyan-400 text-sm" />
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
                  TRANSMIT DIRECT MESSAGE
                </span>
              </div>

              {submitted && (
                <div className="mb-8 p-5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex items-center gap-3.5 animate-modal">
                  <FaCheck className="text-emerald-400 text-lg flex-shrink-0" />
                  <div>
                    <div className="font-bold">TRANSMISSION DISPATCHED</div>
                    <div className="text-slate-300 text-xs mt-1">
                      Your default mail client has opened. Thank you for reaching out!
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-2.5 font-medium">
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe / Sec Corp"
                      required
                      className="w-full bg-[#07090e] border border-cyan-500/20 focus:border-cyan-400 rounded-xl px-4.5 py-3.5 text-xs font-mono text-white placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-2.5 font-medium">
                      Your Contact Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      required
                      className="w-full bg-[#07090e] border border-cyan-500/20 focus:border-cyan-400 rounded-xl px-4.5 py-3.5 text-xs font-mono text-white placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2.5 font-medium">
                    Inquiry Classification
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-[#07090e] border border-cyan-500/20 focus:border-cyan-400 rounded-xl px-4.5 py-3.5 text-xs font-mono text-white outline-none transition-colors cursor-pointer"
                  >
                    <option value="Security Role / Internship">Internship or Junior Security Role</option>
                    <option value="Network Infrastructure Project">Network Infrastructure &amp; Cisco Consulting</option>
                    <option value="Technical Project Management">Technical Project Management Collaboration</option>
                    <option value="General Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2.5 font-medium">
                    Message Payload
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Hello John, I came across your portfolio and wanted to discuss an opportunity..."
                    required
                    className="w-full bg-[#07090e] border border-cyan-500/20 focus:border-cyan-400 rounded-xl px-4.5 py-3.5 text-xs font-mono text-white placeholder-slate-600 outline-none transition-colors resize-none leading-relaxed"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-mono font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2.5 hover:-translate-y-0.5 cursor-pointer mt-2"
                >
                  <FaPaperPlane />
                  <span>Transmit Message</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

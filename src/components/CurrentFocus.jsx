import { useState } from 'react';
import { FaGraduationCap, FaShieldAlt, FaServer, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const milestones = [
  {
    id: 1,
    tag: 'ACADEMIC MILESTONE',
    title: 'Advanced Cisco CCNA 3 & Enterprise Networking',
    icon: FaGraduationCap,
    accentColor: '#3b82f6',
    status: 'IN PROGRESS',
    statusIcon: FaSpinner,
    description: 'Mastering enterprise networking, OSPF multi-area routing, network automation fundamentals, and preparing for the comprehensive CCNA certification exam.',
    targets: ['OSPF Multi-Area Tuning', 'Access Control & Port Security', 'WAN Technologies & VPNs', 'CCNA Composite Prep'],
  },
  {
    id: 2,
    tag: 'PROFESSIONAL CREDENTIAL',
    title: 'Google Cybersecurity & CompTIA Security+ Roadmap',
    icon: FaShieldAlt,
    accentColor: '#00e5ff',
    status: 'ACTIVE PURSUIT',
    statusIcon: FaSpinner,
    description: 'Completing the Google Cybersecurity Professional Certificate curriculum while studying toward CompTIA Security+ (SY0-701) to validate security posture, threat mitigation, and incident handling.',
    targets: ['SOC Analyst Operations', 'SIEM Tooling & Log Analysis', 'Vulnerability Assessment', 'CompTIA Security+ Exam Prep'],
  },
  // {
  //   id: 3,
  //   tag: 'PRACTICAL APPLICATION',
  //   title: 'Hands-On Penetration Testing & Homelab Infrastructure',
  //   icon: FaServer,
  //   accentColor: '#10b981',
  //   status: 'MAINTAINED & EXPANDING',
  //   statusIcon: FaCheckCircle,
  //   description: 'Maintaining a dedicated homelab environment for safe penetration testing, network packet captures with Wireshark, virtual firewall configurations, and secure automated pipelines.',
  //   targets: ['pfSense Rules & DMZ Setup', 'Snort Intrusion Detection Rules', 'Packet Capture Case Studies', 'Secure CI/CD Automation'],
  // },
];

export default function CurrentFocus() {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <section id="focus" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative flex flex-col items-center">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-18 sm:mb-24 scroll-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span>[ SECTION: 04 // ROADMAP ]</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            CURRENT <span className="text-cyan-400">FOCUS</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Active learning trajectories, professional certification roadmap, and hands-on laboratory goals.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Timeline Flow */}
        <div className="relative scroll-fade-in w-full">
          
          <div className="space-y-8 sm:space-y-10">
            {milestones.map((item) => {
              const Icon = item.icon;
              const StatusIcon = item.statusIcon;
              const isSelected = activeItem === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`relative flex flex-col sm:flex-row items-start gap-6 sm:gap-7 p-7 sm:p-9 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0f172a]/95 border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(0,229,255,0.18)] translate-x-1'
                      : 'cyber-card hover:border-cyan-500/30'
                  }`}
                >
                  {/* Timeline Icon Node */}
                  <div className="relative flex-shrink-0 z-10">
                    <div 
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(0,229,255,0.6)] scale-105' 
                          : 'bg-slate-900 border border-slate-700 text-slate-400'
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="flex-1 space-y-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <span className="font-mono text-xs font-bold tracking-widest uppercase text-cyan-400">
                        // {item.tag}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold px-3.5 py-1.5 rounded-full bg-slate-950 border border-cyan-500/30 text-cyan-300">
                        <StatusIcon className={item.status.includes('PROGRESS') || item.status.includes('ACTIVE') ? 'animate-spin' : ''} />
                        {item.status}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Target Milestones Pills */}
                    <div className="pt-2">
                      <div className="text-[11px] font-mono uppercase text-slate-400 mb-2.5 font-medium">
                        Active Target Objectives:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.targets.map((target, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-950/80 border border-slate-800 text-slate-300 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                            {target}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

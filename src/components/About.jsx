import { useState } from 'react';
import { FaNetworkWired, FaShieldAlt, FaTasks, FaTools, FaCheck } from 'react-icons/fa';

const skillCategories = [
  {
    id: 'networking',
    label: 'Networking & Infra',
    icon: FaNetworkWired,
    skills: [
      { name: 'Cisco IOS Configuration', level: 'Advanced' },
      { name: 'Cisco Packet Tracer Topology', level: 'Advanced' },
      { name: 'VLANs & 802.1Q Trunking', level: 'Advanced' },
      { name: 'VLSM IPv4 / IPv6 Subnetting', level: 'Advanced' },
      { name: 'Inter-VLAN Routing & Switches', level: 'Proficient' },
      { name: 'DHCP Snooping & Port Security', level: 'Proficient' },
    ],
  },
  {
    id: 'security',
    label: 'Cybersecurity & Defense',
    icon: FaShieldAlt,
    skills: [
      { name: 'Threat Detection & Defense', level: 'Proficient' },
      { name: 'NIST CSF & ISO 27001 Analysis', level: 'Proficient' },
      { name: 'Network Access Control (ACLs)', level: 'Proficient' },
      { name: 'Network Segmentation', level: 'Proficient' },
      { name: 'Security Risk Assessment', level: 'Proficient' },
      { name: 'Incident Response Workflows', level: 'Familiar' },
    ],
  },
  {
    id: 'management',
    label: 'Project Leadership',
    icon: FaTasks,
    skills: [
      { name: 'Technical Project Management', level: 'Lead' },
      { name: 'Agile Team Collaboration', level: 'Lead' },
      { name: 'Lean Six Sigma White Belt', level: 'Certified' },
      { name: 'Technical Documentation', level: 'Advanced' },
      { name: 'Cross-functional Communication', level: 'Lead' },
      { name: 'Resource & Scope Planning', level: 'Advanced' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Environments',
    icon: FaTools,
    skills: [
      { name: 'Cisco Packet Tracer', level: 'Tool' },
      { name: 'Wireshark Protocol Analyzer', level: 'Tool' },
      { name: 'Linux / Kali / Ubuntu', level: 'OS' },
      { name: 'Git & GitHub', level: 'Tool' },
      { name: 'React & Modern Web', level: 'Tool' },
      { name: 'VS Code & CLI Workflows', level: 'Tool' },
    ],
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('networking');

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-18 sm:mb-24 scroll-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span>[ SECTION: 01 // IDENTITY ]</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            ABOUT <span className="text-cyan-400">ME</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Profile + Bio Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-28 scroll-fade-in">
          
          {/* Profile Photo with Cyber Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-68 h-68 sm:w-80 sm:h-80 group">
              
              {/* Outer Glowing Cyber Ring */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-cyan-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

              {/* Holographic Border Box */}
              <div className="relative w-full h-full rounded-2xl bg-[#0b101b] border-2 border-cyan-400/40 p-2.5 shadow-2xl overflow-hidden cyber-corners">
                <img
                  src="/Profile.jpg"
                  alt="John Pruds Colot"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 filter contrast-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                  }}
                />

                {/* Cyber HUD Overlay Bar */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#07090e]/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-cyan-500/30 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-cyan-400 font-bold">COLOT, J.P.</span>
                  <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-online"></span> ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                // Professional Profile
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-4xl text-white leading-tight">
                Hi there, I&apos;m <span className="text-cyan-400">John Pruds Colot</span>
              </h3>
              <p className="text-xs sm:text-sm font-mono text-slate-400">
                Information Technology Student &bull; Technical Project Manager &bull; Security Enthusiast
              </p>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                As an Information Technology student and active student leader, I excel at organizing collaborative teams, facilitating clear technical communication, and driving complex projects from conception to completion.
              </p>
              <p>
                Driven by a deep passion for cybersecurity and network infrastructure, I am continuously deepening my hands-on mastery of threat defense, packet inspection, VLAN segmentation, and enterprise routing. I bring adaptability, unshakeable integrity, and rigorous organizational skills&mdash;ready to coordinate high-performing technical initiatives and support modern security operations.
              </p>
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-[#0f1623] border border-cyan-500/20">
                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">LOCATION</div>
                <div className="text-sm font-bold text-white mt-1">Malaybalay, Bukidnon</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0f1623] border border-cyan-500/20">
                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">ACADEMICS</div>
                <div className="text-sm font-bold text-white mt-1">BS Info Tech</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0f1623] border border-cyan-500/20">
                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">STATUS</div>
                <div className="text-sm font-bold text-emerald-400 mt-1">Ready for Roles</div>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Competency Matrix */}
        <div className="cyber-card rounded-2xl p-7 sm:p-10 scroll-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
            <div>
              <h4 className="font-heading font-bold text-xl sm:text-2xl text-white flex items-center gap-2.5">
                <span className="text-cyan-400">&gt;</span> Technical Competencies &amp; Skills
              </h4>
              <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                Categorized skill matrix across networks, defense, leadership, and toolchains
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
              {skillCategories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,229,255,0.4)]'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="text-xs" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-cyan-500/15 hover:border-cyan-400/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-md bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs">
                    <FaCheck className="text-[10px]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 font-semibold">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

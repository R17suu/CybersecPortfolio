import { useState } from 'react';
import { 
  FaNetworkWired, 
  FaShieldAlt, 
  FaServer, 
  FaCalculator, 
  FaTimes, 
  FaExternalLinkAlt, 
  FaCheck, 
  FaDownload,
  FaTerminal
} from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Enterprise Campus Network & VLAN Segmentation',
    category: 'Network Engineering',
    tag: 'Cisco IOS & Packet Tracer',
    icon: FaNetworkWired,
    status: 'COMPLETED LAB ARCHITECTURE',
    summary: 'A resilient multi-tier campus network architecture isolating 5 departmental broadcast domains with inter-VLAN routing, ACL traffic filters, and trunking.',
    architecture: 'Core-Distribution-Access 3-tier hierarchy simulated in Cisco Packet Tracer with redundant trunking and strict access policies.',
    technologies: ['Cisco Packet Tracer', 'VLANs (802.1Q)', 'Inter-VLAN Routing', 'ACLs', 'DHCP Snooping', 'RSTP'],
    keyFeatures: [
      'Segmented 5 distinct department zones: Guest (100 hosts), IT (60), Finance (30), HR (20), and Management (10)',
      'Configured 802.1Q trunking and native VLAN isolation to prevent VLAN hopping attacks',
      'Implemented Extended Access Control Lists (ACLs) restricting Guest access to internal management interfaces',
      'Hardened switch ports using Port Security with sticky MAC addresses and maximum host limits',
    ],
    technicalHighlights: [
      { label: 'Subnets Isolated', value: '5 Departments' },
      { label: 'Security Level', value: 'Port Security + ACLs' },
      { label: 'Protocol', value: 'OSPF & Inter-VLAN' },
      { label: 'Topology', value: 'Redundant Hierarchical' }
    ]
  },
  {
    id: 2,
    title: 'Cybersecurity Risk Assessment & NIST CSF vs. ISO 27001',
    category: 'Governance & Security Audits',
    tag: 'Compliance & Threat Modeling',
    icon: FaShieldAlt,
    status: 'CASE STUDY & AUDIT REPORT',
    summary: 'Comparative governance framework analysis identifying threat exposure, asset criticality, compliance gaps, and structured mitigation roadmaps.',
    architecture: 'Cross-mapped organizational threat vectors against NIST Cybersecurity Framework (CSF 2.0) functions and ISO/IEC 27001 control objectives.',
    technologies: ['NIST CSF', 'ISO/IEC 27001', 'Threat Modeling', 'Risk Assessment', 'Compliance Checklists', 'Gap Analysis'],
    keyFeatures: [
      'Conducted organizational risk analysis balancing technical defense versus business operational needs',
      'Formulated risk mitigation matrix across Confidentiality, Integrity, and Availability (CIA triad)',
      'Constructed comprehensive controls and compliance checklist for internal auditing standards',
      'Synthesized action plan for Incident Response and vendor supply-chain threat governance',
    ],
    technicalHighlights: [
      { label: 'Frameworks', value: 'NIST CSF & ISO 27001' },
      { label: 'Analysis Type', value: 'Comparative Gap Audit' },
      { label: 'Focus', value: 'Enterprise Tech Growth' },
      { label: 'Outcome', value: 'Structured Risk Controls' }
    ]
  },
  {
    id: 3,
    title: 'Penetration Testing & Threat Defense Homelab',
    category: 'Practical Security Lab',
    tag: 'Active Defensive Environment',
    icon: FaServer,
    status: 'ACTIVE HOMELAB ENVIRONMENT',
    summary: 'Virtual lab environment designed for inspecting suspicious network traffic, testing intrusion signatures, and practicing defensive hardening.',
    architecture: 'Segmented virtual networks utilizing pfSense as gateway firewall, Kali Linux for security audits, and vulnerable targets for detection testing.',
    technologies: ['Kali Linux', 'pfSense Firewall', 'Snort IDS/IPS', 'Wireshark', 'VirtualBox', 'Metasploitable'],
    keyFeatures: [
      'Configured pfSense virtual firewall with isolated WAN, LAN, and DMZ network segments',
      'Captured and analyzed raw network packets using Wireshark to identify reconnaissance scans and anomalous traffic',
      'Configured intrusion detection signatures to trigger alerts on unauthorized port scanning',
      'Documented remediation steps for hardening SSH, disabling insecure legacy protocols, and enforcing key auth',
    ],
    technicalHighlights: [
      { label: 'Hypervisor', value: 'VirtualBox / KVM' },
      { label: 'Firewall', value: 'pfSense Virtual Router' },
      { label: 'Inspection', value: 'Wireshark & Snort' },
      { label: 'Lab Isolation', value: 'Strict Host-Only DMZ' }
    ]
  },
  {
    id: 4,
    title: 'Hierarchical VLSM IPv4 Addressing Architecture',
    category: 'Network Engineering',
    tag: 'Address Planning & Subnetting',
    icon: FaCalculator,
    status: 'TECHNICAL LAB REPORT',
    summary: 'Algorithmic Variable Length Subnet Masking (VLSM) design that allocates non-overlapping subnets across departments while eliminating IPv4 waste.',
    architecture: 'Calculated variable mask boundaries based on department host density, supporting future expansion and clean route summarization.',
    technologies: ['VLSM', 'IPv4 Addressing', 'Binary Subnetting', 'CIDR Notation', 'Route Summarization', 'Network Allocation'],
    keyFeatures: [
      'Formulated complete VLSM allocation plan satisfying varying host tiers without address waste',
      'Determined optimal block sizes (/25, /26, /27, /28) maintaining contiguous routing boundaries',
      'Mapped usable IP host ranges, default gateways, network addresses, and broadcast vectors',
      'Engineered scalable addressing layout ready for future branch office expansion and VPN tunneling',
    ],
    technicalHighlights: [
      { label: 'Efficiency', value: '>92% Address Utilization' },
      { label: 'Departments', value: '5 Distinct Tiers' },
      { label: 'Notation', value: 'CIDR & Binary Mask' },
      { label: 'Status', value: 'Lab Verified' }
    ]
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const downloadSpecs = (project) => {
    const text = `=====================================================
PROJECT: ${project.title}
CATEGORY: ${project.category}
STATUS: ${project.status}
AUTHOR: John Pruds Colot (PJohn)
=====================================================

OVERVIEW:
${project.summary}

ARCHITECTURE & IMPLEMENTATION:
${project.architecture}

TECHNOLOGIES & PROTOCOLS:
${project.technologies.join(', ')}

KEY FEATURES & CONTROLS:
${project.keyFeatures.map((f, i) => `${i + 1}. ${f}`).join('\n')}

TECHNICAL HIGHLIGHTS:
${project.technicalHighlights.map(h => `- ${h.label}: ${h.value}`).join('\n')}

=====================================================
Generated from John Pruds Colot's Portfolio
Contact: colotjohn66@gmail.com
GitHub: https://github.com/R17suu
`;

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.title.replace(/[^a-zA-Z0-9]/g, '_')}_spec.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-18 sm:mb-24 scroll-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span>[ SECTION: 03 // PROJECTS ]</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            FEATURED <span className="text-cyan-400">PROJECTS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Hands-on technical architectures across enterprise network simulation, security risk audits, packet inspection, and subnet engineering.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 scroll-fade-in">
          {projectsData.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="cyber-card rounded-2xl p-8 sm:p-10 cursor-pointer group flex flex-col justify-between hover:border-cyan-400/60 transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Icon & Status */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-13 h-13 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">
                      <Icon size={26} />
                    </div>
                    <span className="font-mono text-[10px] uppercase px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 font-bold tracking-wider">
                      {project.status}
                    </span>
                  </div>

                  {/* Category & Title */}
                  <div className="mb-4">
                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-1.5 font-semibold">
                      {project.category}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-8">
                    {project.summary}
                  </p>

                  {/* Technical Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {project.technicalHighlights.map((stat, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                        <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">{stat.label}</div>
                        <div className="font-mono text-xs font-semibold text-slate-200 mt-1">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Technologies Pills */}
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-800 mb-5">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-md text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center text-xs font-mono font-bold text-cyan-400 group-hover:text-cyan-300 gap-2 transition-colors pt-1">
                    <span>INSPECT ARCHITECTURE DETAILS</span>
                    <FaExternalLinkAlt className="text-[10px] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c111a] border-2 border-cyan-400/50 rounded-2xl shadow-[0_0_60px_rgba(0,229,255,0.25)] flex flex-col overflow-hidden animate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-7 py-4.5 bg-[#07090e] border-b border-cyan-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FaTerminal className="text-cyan-400 text-sm" />
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
                  PROJECT SPECIFICATION // {selectedProject.tag}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => downloadSpecs(selectedProject)}
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors shadow-[0_0_12px_rgba(0,229,255,0.3)] cursor-pointer"
                  title="Download Project Spec Document"
                >
                  <FaDownload className="text-[10px]" />
                  <span className="hidden sm:inline">Export Spec</span>
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-red-950 text-slate-300 hover:text-red-400 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-7 sm:p-9 overflow-y-auto space-y-7">
              
              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-1.5 font-semibold">
                  {selectedProject.category}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Architecture Overview */}
              <div className="p-5 rounded-xl bg-slate-950 border border-cyan-500/20">
                <h4 className="font-mono text-xs uppercase text-cyan-400 font-bold mb-2">
                  System Architecture
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-mono">
                  {selectedProject.architecture}
                </p>
              </div>

              {/* Technical Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {selectedProject.technicalHighlights.map((h, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#0f1623] border border-slate-800">
                    <div className="font-mono text-[10px] text-slate-400 uppercase">{h.label}</div>
                    <div className="font-mono text-xs font-bold text-cyan-300 mt-1.5">{h.value}</div>
                  </div>
                ))}
              </div>

              {/* Key Features & Controls */}
              <div>
                <h4 className="font-heading font-bold text-lg text-white mb-3.5 flex items-center gap-2">
                  <span className="text-cyan-400">&gt;</span> Key Security &amp; Network Controls
                </h4>
                <div className="space-y-3">
                  {selectedProject.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="w-5 h-5 rounded-md bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                        <FaCheck className="text-[10px]" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="font-heading font-bold text-base text-white mb-3">
                  Technologies &amp; Frameworks
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {selectedProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}

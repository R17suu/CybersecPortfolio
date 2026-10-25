import { useState, useEffect } from 'react';
import { 
  FaCertificate, 
  FaSearch, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight, 
  FaExternalLinkAlt, 
  FaCheckCircle, 
  FaNetworkWired, 
  FaShieldAlt, 
  FaAward, 
  FaUsers 
} from 'react-icons/fa';

const certificatesData = [
  {
    id: 1,
    title: 'CCNA: Introduction to Networks (ITN)',
    issuer: 'Cisco Networking Academy',
    category: 'networking',
    image: '/cert_img/CCNAITNUpdated20250516-24-crvuos_page-0001.jpg',
    description: 'Foundational Cisco networking credential covering architecture, IPv4/IPv6 addressing schemes, Ethernet switching, and transport layer protocols.',
    date: '2025',
    skills: ['Cisco IOS', 'IPv4 & IPv6 Addressing', 'Subnetting', 'Ethernet Switching', 'Network Protocols']
  },
  {
    id: 2,
    title: 'CCNA: Switching, Routing & Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    category: 'networking',
    image: '/cert_img/Switching_Routing and Wireless Essentials Cert_page-0001.jpg',
    description: 'Comprehensive networking validation focusing on VLANs, Inter-VLAN routing, STP, EtherChannel, DHCPv4/v6, and WLAN security configurations.',
    date: '2025',
    skills: ['VLANs & 802.1Q', 'Inter-VLAN Routing', 'STP & EtherChannel', 'DHCP Security', 'Wireless LANs']
  },
  {
    id: 3,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    category: 'cybersecurity',
    image: '/cert_img/Introduction to cybersec.jpg',
    description: 'Core cybersecurity training covering threat analysis, attack vectors, defense in depth, encryption fundamentals, and risk mitigation strategies.',
    date: '2025',
    skills: ['Cyber Threats & Attacks', 'Defense in Depth', 'Confidentiality & Integrity', 'Security Operations']
  },
  {
    id: 4,
    title: 'Introduction to Networks Certification',
    issuer: 'Cisco Networking Academy',
    category: 'networking',
    image: '/cert_img/Introduction to networks cert_page-0001.jpg',
    description: 'Formal course completion certification validating end-to-end network setup, router configuration, and packet transmission troubleshooting.',
    date: '2025',
    skills: ['Network Hardware', 'Routing Basics', 'CLI Configuration', 'Troubleshooting']
  },
  {
    id: 5,
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    category: 'networking',
    image: '/cert_img/Networking_Basics_certificate_2301104393-student-buksu-edu-ph_000150c4-129d-4b9a-8860-2dba26b0b080_page-0001.jpg',
    description: 'Foundational networking credential detailing network device roles, physical medium types, IP communication, and local area network connectivity.',
    date: '2025',
    skills: ['Network Models', 'LAN Topologies', 'IP Fundamentals', 'Device Roles']
  },
  {
    id: 6,
    title: 'Getting Started with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    category: 'networking',
    image: '/cert_img/Getting_Started_with_Cisco_Packet_Tracer_certificate_2301104393-student-buksu-edu-ph_747728e0-6b74-4f53-8987-02e1babbe4a7.jpg',
    description: 'Hands-on practical simulation training for constructing complex network topologies, cabling virtual hardware, and debugging live traffic flows.',
    date: '2025',
    skills: ['Packet Tracer Simulation', 'Topology Design', 'PDU Inspection', 'Virtual Cabling']
  },
  {
    id: 7,
    title: 'VLAN Fundamentals Certification',
    issuer: 'Cisco / Technical Training',
    category: 'networking',
    image: '/cert_img/Certificate for John Pruds for _Completion Certificate Request_vlan Fundamentals_page-0001.jpg',
    description: 'Specialized credential on VLAN creation, access and trunk port configuration, 802.1Q frame tagging, and broadcast domain isolation.',
    date: '2025',
    skills: ['VLAN Segmentation', 'Trunk Links', '802.1Q Tagging', 'Broadcast Containment']
  },
  {
    id: 8,
    title: 'Lean Six Sigma White Belt (Service Industry)',
    issuer: 'Lean Six Sigma Institute',
    category: 'professional',
    image: '/cert_img/Certificate for Lean Six Sigma White Belt Certification for Service Industry_page-0001.jpg',
    description: 'Accredited process improvement certification applying DMAIC methodology, waste elimination, quality control, and structured project efficiency.',
    date: '2025',
    skills: ['DMAIC Methodology', 'Quality Assurance', 'Process Optimization', 'Project Efficiency']
  },
  {
    id: 9,
    title: 'TOPCIT Competency Assessment',
    issuer: 'Test of Practical Competency in IT',
    category: 'professional',
    image: '/cert_img/TOPCIT_page-0001.jpg',
    description: 'Standardized assessment evaluating real-world competency across software engineering, cybersecurity, database management, and technical business acumen.',
    date: '2025',
    skills: ['IT Practical Competency', 'Software Engineering', 'Information Security', 'IT Governance']
  },
  {
    id: 10,
    title: 'DEVCON: Sui Code Camp Certification',
    issuer: 'DEVCON Philippines',
    category: 'professional',
    image: '/cert_img/DEVCON Sui Code Camp Tracker.jpg',
    description: 'Intensive technology camp covering decentralized computing architecture, smart contracts, modern protocols, and software deployment.',
    date: '2025',
    skills: ['Distributed Systems', 'Blockchain Concepts', 'Software Deployment', 'Technical Workshops']
  },
  {
    id: 11,
    title: 'ACF x PCCI Business & Innovation',
    issuer: 'Philippine Chamber of Commerce and Industry',
    category: 'leadership',
    image: '/cert_img/ACF x PCCI_Certificate of Completion - John Pruds Colot_page-0001.jpg',
    description: 'Executive industry immersion program emphasizing technical entrepreneurship, innovation management, and corporate technology strategy.',
    date: '2025',
    skills: ['Enterprise Innovation', 'Technology Strategy', 'Cross-Functional Collaboration']
  },
  {
    id: 12,
    title: 'Introduction to Bookkeeping & Financial Records',
    issuer: 'Professional Training Institute',
    category: 'professional',
    image: '/cert_img/Certificate_of_Completion_INTRODUCTION TO BOOKKEEPING_page-0001.jpg',
    description: 'Certification validating fiscal accountability, transaction audits, record-keeping, and resource management for project governance.',
    date: '2025',
    skills: ['Fiscal Accountability', 'Audit Trail', 'Project Budgeting', 'Documentation']
  },
  {
    id: 13,
    title: 'Student Capacity Development Program',
    issuer: 'East-West Center (EWC)',
    category: 'leadership',
    image: '/cert_img/E-Certificate_EWC_Student CapDev_John Pruds B. Colot.jpg',
    description: 'Leadership and organizational governance training focused on project management, ethical leadership, team mentorship, and civic technology initiatives.',
    date: '2025',
    skills: ['Student Leadership', 'Project Coordination', 'Mentorship', 'Public Communication']
  },
  {
    id: 14,
    title: 'Wadhwani Foundation Professional Skills',
    issuer: 'Wadhwani Foundation',
    category: 'leadership',
    image: '/cert_img/Wadhwani Foundation Certificate - 693d17ec49e895be1f17322f_page-0001.jpg',
    description: 'Workplace readiness and 21st-century leadership accreditation emphasizing agile team execution, critical reasoning, and technical presentation skills.',
    date: '2025',
    skills: ['Agile Collaboration', 'Critical Problem Solving', 'Professional Communication']
  },
  {
    id: 15,
    title: 'Higher Education IT Microcredentials',
    issuer: 'Higher Education Commission / CHED',
    category: 'professional',
    image: '/cert_img/Colot_Microcredentials Certi(1).jpg',
    description: 'Verified industry-aligned microcredentials endorsing practical IT skills, laboratory mastery, and computing curriculum standards.',
    date: '2025',
    skills: ['Applied Computing', 'System Analysis', 'Lab Performance', 'Technical Verification']
  },
  {
    id: 16,
    title: 'Technical Competency Completion',
    issuer: 'Technical Academy Assessment',
    category: 'professional',
    image: '/cert_img/Certificate for John Pruds for _Completion Certificate Request__page-0001.jpg',
    description: 'Comprehensive certificate of completion acknowledging successful delivery of IT infrastructure projects and system testing criteria.',
    date: '2025',
    skills: ['System Testing', 'Project Delivery', 'Technical Troubleshooting']
  },
  {
    id: 17,
    title: 'Enterprise Systems & Defense Training',
    issuer: 'Accredited Training Partner',
    category: 'cybersecurity',
    image: '/cert_img/John_Pruds_Batistil_Colot_69044bc77008a23b07dcf49a_page-0001.jpg',
    description: 'Specialized technical upskilling in enterprise network administration, system safeguards, and incident handling procedures.',
    date: '2025',
    skills: ['Operational Security', 'System Safeguards', 'Infrastructure Admin', 'Hardening']
  },
  {
    id: 18,
    title: 'National IT & Leadership Summit',
    issuer: 'Technology Education Council',
    category: 'leadership',
    image: '/cert_img/Certificate_of_Participation_John_Pruds_Colot_page-0001.jpg',
    description: 'Recognition of active participation and institutional representation in national conferences on emerging cyber trends and IT infrastructure.',
    date: '2025',
    skills: ['Industry Trends', 'Tech Networking', 'Institutional Representation']
  },
];

const categoryTabs = [
  { id: 'all', label: 'All Credentials', icon: FaCertificate, count: 18 },
  { id: 'networking', label: 'Cisco & Networking', icon: FaNetworkWired, count: 6 },
  { id: 'cybersecurity', label: 'Cybersecurity', icon: FaShieldAlt, count: 2 },
  { id: 'professional', label: 'Professional & Tech', icon: FaAward, count: 6 },
  { id: 'leadership', label: 'Leadership & Dev', icon: FaUsers, count: 4 },
];

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxCert, setLightboxCert] = useState(null);

  // Filter logic
  const filteredCerts = certificatesData.filter((cert) => {
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
    const matchesSearch = 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Modal navigation
  const currentIndex = lightboxCert ? filteredCerts.findIndex((c) => c.id === lightboxCert.id) : -1;

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (currentIndex > 0) {
      setLightboxCert(filteredCerts[currentIndex - 1]);
    } else {
      setLightboxCert(filteredCerts[filteredCerts.length - 1]);
    }
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (currentIndex < filteredCerts.length - 1) {
      setLightboxCert(filteredCerts[currentIndex + 1]);
    } else {
      setLightboxCert(filteredCerts[0]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxCert) return;
      if (e.key === 'Escape') setLightboxCert(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxCert, currentIndex, filteredCerts]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (lightboxCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxCert]);

  return (
    <section id="certifications" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-18 sm:mb-24 scroll-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span>[ SECTION: 02 // CREDENTIALS ]</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            CERTIFICATIONS &amp; <span className="text-cyan-400">ACCREDITATIONS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            18 authentic certifications and training credentials across Cisco networking, cybersecurity defense, Lean Six Sigma, and technical leadership.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-12 sm:mb-14 scroll-fade-in">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 p-2 rounded-2xl bg-[#0b101b] border border-cyan-500/20">
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="text-xs" />
                  <span>{tab.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                    isSelected ? 'bg-slate-950/30 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search credentials..."
              className="w-full bg-[#0b101b] border border-cyan-500/20 focus:border-cyan-400 rounded-xl pl-11 pr-5 py-3 text-xs font-mono text-slate-200 placeholder-slate-500 outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
              >
                <FaTimes size={13} />
              </button>
            )}
          </div>
        </div>

        {/* Counter readout */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-400 mb-10 px-1">
          <span>SHOWING {filteredCerts.length} OF {certificatesData.length} VERIFIED CREDENTIALS</span>
          <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
            <FaCheckCircle className="text-emerald-400" /> ALL CREDENTIALS AUTHENTICATED
          </span>
        </div>

        {/* Certificate Cards Grid - Spacious 3-Column on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 scroll-fade-in">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setLightboxCert(cert)}
              className="cyber-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col hover:border-cyan-400/60 transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/11] bg-slate-950 overflow-hidden border-b border-cyan-500/15">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-108"
                />
                
                {/* Cyber Scanline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b101b] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Status Badge */}
                <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-md border border-cyan-500/30 flex items-center gap-1.5 text-[10px] font-mono font-bold text-cyan-300">
                  <FaCheckCircle className="text-emerald-400 text-xs" />
                  <span>VERIFIED</span>
                </div>

                {/* Inspect Overlay Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/60 backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,229,255,0.6)] flex items-center gap-2">
                    <FaExternalLinkAlt className="text-xs" /> Inspect Credential
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
                    <span className="truncate max-w-[200px] font-semibold">{cert.issuer}</span>
                    <span className="text-slate-500">{cert.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug mb-2.5">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Skill Pills preview */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {cert.skills.slice(0, 3).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-cyan-950/50 text-cyan-400 border border-cyan-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-slate-800 text-slate-400">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-20 cyber-card rounded-2xl">
            <FaCertificate className="text-cyan-400 text-4xl mx-auto mb-4 opacity-60" />
            <p className="font-heading font-semibold text-xl text-white">No credentials match your filter</p>
            <p className="text-xs sm:text-sm font-mono text-slate-400 mt-2">Try resetting search keywords or category filters</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-6 px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-mono text-xs font-bold uppercase cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxCert(null)}
        >
          <div 
            className="relative w-full max-w-5xl max-h-[92vh] bg-[#0c111a] border-2 border-cyan-400/50 rounded-2xl shadow-[0_0_60px_rgba(0,229,255,0.25)] flex flex-col overflow-hidden animate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#07090e] border-b border-cyan-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
                  CREDENTIAL VIEWER // {currentIndex + 1} OF {filteredCerts.length}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={lightboxCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-950 text-slate-300 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/40 text-xs font-mono flex items-center gap-1.5 transition-colors"
                  title="Open original high-res in new tab"
                >
                  <FaExternalLinkAlt className="text-[10px]" />
                  <span className="hidden sm:inline">Original</span>
                </a>
                <button
                  onClick={() => setLightboxCert(null)}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-red-950 text-slate-300 hover:text-red-400 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close credential viewer"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-center">
              
              {/* Full Image Preview with Navigation Chevrons */}
              <div className="relative w-full lg:w-2/3 bg-slate-950 rounded-2xl overflow-hidden border border-cyan-500/30 flex items-center justify-center min-h-[300px] sm:min-h-[460px] p-4">
                <img
                  src={lightboxCert.image}
                  alt={lightboxCert.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
                />

                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/85 hover:bg-cyan-500 border border-cyan-500/40 text-cyan-300 hover:text-slate-950 flex items-center justify-center transition-all shadow-lg cursor-pointer"
                  aria-label="Previous certificate"
                >
                  <FaChevronLeft size={16} />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/85 hover:bg-cyan-500 border border-cyan-500/40 text-cyan-300 hover:text-slate-950 flex items-center justify-center transition-all shadow-lg cursor-pointer"
                  aria-label="Next certificate"
                >
                  <FaChevronRight size={16} />
                </button>
              </div>

              {/* Credential Details Sidebar */}
              <div className="w-full lg:w-1/3 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold">
                    <FaCheckCircle /> VERIFIED AUTHENTIC
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white leading-snug">
                    {lightboxCert.title}
                  </h3>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 font-mono text-xs">
                    <div className="text-slate-400">
                      ISSUER: <span className="text-cyan-300 font-semibold">{lightboxCert.issuer}</span>
                    </div>
                    <div className="text-slate-400">
                      CATEGORY: <span className="text-slate-200 uppercase font-semibold">{lightboxCert.category}</span>
                    </div>
                    <div className="text-slate-400">
                      YEAR: <span className="text-slate-200">{lightboxCert.date}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {lightboxCert.description}
                  </p>

                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-wider text-cyan-400 mb-2.5 font-semibold">
                      Competencies Validated
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {lightboxCert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 rounded-md text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 font-mono text-xs text-slate-300 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <FaChevronLeft size={10} /> Prev
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-mono text-xs font-bold text-slate-950 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.4)] cursor-pointer transition-all"
                  >
                    Next <FaChevronRight size={10} />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}

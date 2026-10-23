import {
  QrCode, HardHat, Boxes, Link2, Nfc, Wrench,
  Zap, Flame, Mountain, Atom, Leaf, Building2,
  ShieldCheck, MapPin, Cpu, Handshake
} from 'lucide-react';

export const services = [
  {
    icon: QrCode,
    title: 'Asset Management',
    tagline: 'Smart Tracking, Smarter Business',
    desc: 'Intelligent asset tracking and maintenance system that helps companies monitor, maintain, and optimize their movable assets with real-time insights and predictive analytics.',
    a: '#074E84',
  },
  {
    icon: HardHat,
    title: 'Construction Management',
    tagline: 'Building Tomorrow, Digitally',
    desc: 'End-to-end project management platform offering real-time control, monitoring, and analytics for construction projects of any scale.',
    a: '#2380C6',
  },
  {
    icon: Boxes,
    title: 'Operations Excellence',
    tagline: 'Optimize, Track, Thrive',
    desc: 'Advanced inventory management system with AI-powered cataloging, waste reduction, and smart classification of materials and spares to maximize operational efficiency.',
    a: '#0E9F8A',
  },
  {
    icon: Link2,
    title: 'Supply Chain Solutions',
    tagline: 'Connect, Control, Succeed',
    desc: 'Comprehensive vendor management and mini-ERP system for streamlined contract management, strategic sourcing, and efficient procurement processes.',
    a: '#7C5CD6',
  },
  {
    icon: Nfc,
    title: 'Digital Business Cards',
    tagline: 'Go Green, Stay Connected',
    desc: 'Eco-friendly NFC-enabled digital business cards that update in real-time, reducing environmental impact while maintaining professional connections.',
    a: '#E8A020',
  },
  {
    icon: Wrench,
    title: 'Industrial Support',
    tagline: 'Maintain, Optimize, Excel',
    desc: 'Comprehensive maintenance, logistics, and operational support services backed by digital solutions for enhanced industrial performance.',
    a: '#D64550',
  },
];

export const industries = [
  { icon: Zap, name: 'Power Generation', desc: 'Digital solutions for power plants and utilities, optimizing operations and maintenance' },
  { icon: Flame, name: 'Oil & Gas Upstream', desc: 'Solutions for exploration, drilling, and production operations' },
  { icon: Mountain, name: 'Refineries & Mining', desc: 'Digital transformation for refining operations and mineral processing' },
  { icon: Atom, name: 'Petrochemicals', desc: 'Integrated solutions for petrochemical plants and processing facilities' },
  { icon: Leaf, name: 'Infrastructure & Green Energy', desc: 'Smart solutions for infrastructure development and renewable energy projects' },
  { icon: Building2, name: 'Construction & EPC', desc: 'Digital transformation solutions for construction and engineering projects' },
];

export const valueProps = [
  { icon: MapPin, title: 'Resilient Sourcing', desc: 'Mitigate geopolitical and de-globalization risks by prioritizing local sourcing and reducing import reliance.', a: '#074E84' },
  { icon: ShieldCheck, title: 'Risk Mitigation', desc: 'Identify, assess, and neutralize project risks before they become delays — with compliance and safety built into every workflow.', a: '#2380C6' },
  { icon: Cpu, title: 'Digital First', desc: 'AI-powered solutions that automate the busywork and put real-time asset, material, and project data at your team\u2019s fingertips.', a: '#E8A020' },
  { icon: Handshake, title: 'Flexible Models', desc: 'From pilot rollouts to full digital transformation — engagement models shaped around your budget, timeline, and team.', a: '#0E9F8A' },
];

export const stats = [
  { value: 6, suffix: '', label: 'Digital Solutions' },
  { value: 6, suffix: '', label: 'Industries Served' },
  { value: 30, suffix: '+', label: 'Years of EPC Expertise' },
  { value: 100, suffix: 's', label: 'Mega Projects Executed' },
];

export const footerServices = [
  { name: 'Asset Management', tag: 'SmartTagScan' },
  { name: 'Project Management', tag: 'SmartProject' },
  { name: 'Materials Cataloguing', tag: 'SmartClass' },
  { name: 'Supply Chain Solutions', tag: 'SmartLink' },
  { name: 'E-marketplace', tag: 'SmartWave' },
  { name: 'Vendor Management', tag: 'SmartFlow' },
];

export const footerProducts = [
  { name: 'SmartTagScan', tag: 'Asset Intelligence', href: '/products/scanitsimple' },
  { name: 'SmartProject', tag: 'Project Controls', href: '/products/smartproject' },
  { name: 'SmartProcureSimple', tag: 'Vendor Bidding', href: '/products/smartprocuresimple' },
  { name: 'SmartExpediteSimple', tag: 'Post-PO Expediting', href: '/products/smartexpeditesimple' },
  { name: 'SmartClass', tag: 'Materials Intelligence', href: '/products/smartclass' },
  { name: 'SmartWave', tag: 'Community & Commerce', href: '/products/smartwave' },
  { name: 'SmartLink', tag: 'On the works' },
  { name: 'SmartFlow', tag: 'On the works' },
  { name: 'xBeyond ERP', tag: 'On the works' },
];

export const serviceDetails = [
  {
    product: 'SmartTagScan',
    title: 'Asset Management',
    summary: 'Asset Management services',
    desc: 'Intelligent asset tracking and maintenance that helps companies monitor, maintain, and optimize their movable assets with real-time insights and predictive analytics.',
    features: ['QR-native asset registry and instant scan-to-profile lookup', 'Real-time asset visibility across sites and warehouses', 'Calibration & certificate expiry alerts before deadlines', 'Custody and PPE issue workflows with full audit trail'],
    a: '#074E84',
  },
  {
    product: 'SmartProject',
    title: 'Project Management',
    summary: 'Project Management solutions',
    desc: 'End-to-end project management platform offering real-time control, monitoring, and analytics for construction projects of any scale.',
    features: ['Live Gantt timelines, milestones and progress tracking', 'Budgets, resources and risks in one dashboard', 'Vendor and client collaboration workspaces', 'ROI and performance analytics built in'],
    a: '#2380C6',
  },
  {
    product: 'SmartClass',
    title: 'Materials Cataloguing & Classification',
    summary: 'Materials and services classification and cataloguing solutions',
    desc: 'Advanced inventory management with AI-powered cataloging, waste reduction, and smart classification of materials and spares to maximize operational efficiency.',
    features: ['AI-powered material description cleansing and enrichment', 'Standardized classification across MRO, spares and consumables', 'Duplicate detection and waste reduction', 'Clean, searchable masters that plug into any ERP'],
    a: '#0E9F8A',
  },
  {
    product: 'SmartLink',
    title: 'Supply Chain Solutions',
    summary: 'Complete supply chain, procurement, warehousing and logistics',
    desc: 'Comprehensive vendor management and mini-ERP for streamlined contract management, strategic sourcing, and efficient procurement processes.',
    features: ['End-to-end procurement, warehousing and logistics visibility', 'Strategic sourcing and contract lifecycle management', 'Mini-ERP that integrates with your existing stack', 'Supplier performance and delivery analytics'],
    a: '#7C5CD6',
  },
  {
    product: 'SmartWave',
    title: 'E-marketplace',
    summary: 'E-marketplace connecting material and service providers to EPC',
    desc: 'A marketplace where vendors showcase products and services — private or exposed to the specific clients they choose.',
    features: ['Curated vendor storefronts for materials and services', 'Private or client-scoped product listings', 'Direct RFQ and quotation workflows', 'Faster, more transparent procurement cycles'],
    a: '#E8A020',
  },
  {
    product: 'SmartFlow',
    title: 'Vendor Management Solutions',
    summary: 'Vendor prequalification, onboarding, evaluation and management',
    desc: 'Comprehensive maintenance, logistics, and operational support backed by digital solutions for enhanced industrial performance.',
    features: ['Structured vendor prequalification and onboarding', 'Ongoing evaluation, scoring and compliance tracking', 'Document and certificate management with expiry alerts', 'Performance dashboards across your vendor base'],
    a: '#D64550',
  },
];

export const industryDetails = [
  {
    name: 'Power',
    summary: 'Digital solutions for power generation and distribution',
    desc: 'From generation plants to distribution networks, we help utilities digitize asset registers, maintenance schedules and spare-parts inventories — so uptime stops depending on paperwork.',
    points: ['Plant asset registers & calibration tracking', 'Spares cataloguing and materials masters', 'Maintenance workflow digitization'],
    iconName: 'Zap', a: '#E8A020',
  },
  {
    name: 'Oil & Gas Upstream',
    summary: 'Optimizing upstream operations and asset management',
    desc: 'Exploration, drilling and production operations run on thousands of moving assets. We bring real-time visibility, custody control and predictive maintenance to the field.',
    points: ['Field asset tracking across remote sites', 'MME and lifting-gear compliance', 'Custody chains for tools and PPE'],
    iconName: 'Flame', a: '#D67A2E',
  },
  {
    name: 'Refineries & Mining',
    summary: 'Streamlining downstream operations and mining',
    desc: 'Refining and mineral processing demand precision. Our platforms digitize refining operations, materials classification and vendor ecosystems for downstream excellence.',
    points: ['Downstream materials classification', 'Vendor prequalification networks', 'Inventory optimization and waste reduction'],
    iconName: 'Mountain', a: '#7C5CD6',
  },
  {
    name: 'Petrochemicals',
    summary: 'Enhanced solutions for petrochemical facilities',
    desc: 'Integrated solutions for petrochemical plants and processing facilities — from catalogued spares to calibrated instruments, every asset accounted for.',
    points: ['Instrument calibration governance', 'Spares and MRO cataloguing', 'Contractor and vendor management'],
    iconName: 'Atom', a: '#0E9F8A',
  },
  {
    name: 'Infrastructure & Green Energy',
    summary: 'Supporting sustainable infrastructure development',
    desc: 'Smart solutions for infrastructure development and renewable energy projects — digital from day one, sustainable by design.',
    points: ['Renewable project asset intelligence', 'Green procurement marketplaces', 'Digital-first project management'],
    iconName: 'Leaf', a: '#3F9E4D',
  },
  {
    name: 'Construction & EPC',
    summary: 'Digital solutions for construction and EPC projects',
    desc: 'Our home turf. End-to-end digital transformation for construction and EPC — project control, asset intelligence, supply chain and vendor ecosystems in one stack.',
    points: ['Project dashboards and Gantt control', 'Site asset and materials tracking', 'Integrated supply chain and e-marketplace'],
    iconName: 'Building2', a: '#074E84',
  },
];

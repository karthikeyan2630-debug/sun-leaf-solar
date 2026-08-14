import { ServiceItem, ProductItem, ProjectItem } from '../types';

export const SOLAR_IMAGES = {
  headerLogo: '/assets/sunleaf-official-logo.png',
  footerLogo: '/assets/sunleaf-official-logo.png',
  heroBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq2zgKDdRN1WGVEXvzv9iTVNPAHbzzoxz0tFVYPWe41Uofz9DeJXu9tmXJTZLS9DZ7TZV7IxP-6JfolPondaiO9L5jvWmj_vkCW_HJWEfZao9VgZoOeNR5s0zR96cSCfKYFofvW5SK8JYgO0RWW9lxGM6PAvKAmePo9n-h4vyM-syBlWZnXR5VyIcvdAdnZXyOc7-PKRD34wJrR4FjkAVgE-ZDKOmlo8FT5lFew1YAb7QmsM8dAsVDBQRVWep9PTUnlRo',
  industrial: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6mv2YHaqseIApCjXTBitH2w_BGSuJZlpY-WyTU9rfc6VbpiemnsrJv9azuum3cI31Iz6j3C3d-EiymWtJ9DxglqiOFizojtK40-v2zjxOjMHHxXGHzgC2EYcff_P4kAmkC9q6ZWNugyJv0IQ7wG0bI2Z3yNrgCs6C9Kg-cJAgpLv82F3sbP-XRwYBlKqH1MNce8KJH6s-F5Bba4zThwe4C_Ye7EHQsGPhsJUK4Hn5YVpDZExj9CZ2fhLNfs2q_x0dXsM',
  residential: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC22SkK9gQmalySgPSc5V-YMuDhW6tH3wPolL6LQand69e_g7VLoralH5l7FLOuupKC_PPwrC8z6TyzGIMSg1f9u-ooPouc81_c3iDt4EXRewNJbXXD_E-rcd1W0wjC0IVh3dYiGeOt6rGAV6QhfMtgpeVHRWB26ZOOwQfBDLnv5wgPzPBLH68LHxUWpNg4Xe8hc216Y5sQ7bhdLyt6TNxv2rYAjTDpjArm5oQq7S1r5ZeXr7QsUIBNimrhQaZgk634nU',
  agriPump: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFWWH4ntPX8oVGKyqfenQz5b1atMSkXbHowaLUfjdBVqBugFG2alukubMNUl-aFxcUMYVuab-0pDTLbnno5AXMXRSLH2wzGBIqtjyEO8lN-_FeXp-QAi28qQfMcKjKIjPsBjsifX7qqwrP4lMW-d4c9EpGMKyCeKBUarlOajb7NpTiqa5ih3JEJtoC33Hk5V8JRQq-Fe3DqPmViwyohWVP89GkKZlSC_8dI6qSxb1i0fUhuoG8riiqlecPN9YzV7Lx1vE',
  omTech: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-F8dd0gJEbsdBDlOvLwF2s97kW5YApOguCyD5ieiM47R2SOpxn7-5v1ysz175XOG6iIgeBH6uCrdAw0BBc0Wrk3JY0X9hnvJJGFMN1EoTIU-KKzVTJ1xN4e57D9A4Tqi8Ykgp3uZ87Bowl3gRCj2R4cLI-q2PQhv-efrcIaN4OQJ1iZ0Fsv_VCvuzL8O5zriN5iJgsfoM_qRGvjPCTeI8_F3pLDw5KEuZpiphBAtsYJpfXdVW1JmAUS_1W4FuTzrxOag',
  alphaComplex: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU8jS1NnmmWUF5UoL1IIFZ3rcsIrW02I8eH-sA5Cb9NZjL-5QmBVRKuqApIcSKzT5zFpJbsbUeek9nmr_3VvlIJDYHF8ZMhIWRCjr6482TxFOl7Q0xEdYx9ef1lEMV12ZM5nh62VYLhbrOf8sugJStt0iGHR9VD8RlnYa4BPuqMv4NA2nvHvixfkN0BZKaplNNKrI_Wvn-5Rfr25nhzciEuGx0B2ZxnwBJdDvH-q7LY1F-w7FX6MOXH-VGfFO2cH9sAGs',
  agriFrame: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx0iwmcwtk_aApWmy2r_U0Iok4y0KXpByM6PoeZIvdB8Z_nWEx3dgOSaUzSIsMfMm1VeLLp_dwq5-ASawEsMcdw0O3RBZK9bDcYHLTm7Zurt5hPpFsg5eSYu-dndV1xSr_YtoxKlFYRfDNfGnopI3DB4ZcfTsgDDyiXH1nukULjj1abkf_tGJngQx_kNDgDoVuW8LvaEgDlGYW2eQwQEfdIZH7CrR60Jb3KSR71kxpAxcEkWm8Wuk07t02vA4R3ZnRAQM',
  powerElectronics: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASaH6JLSF7T7600F_VyyVyhleF8wAqQHg0ugjAuMADg6kIAFePQf2jx92qlhyMiNwtBuOVtQublz-3dK5mgvmcFbyTDXpMTeiaFVmze2bblR4vjGskfddLA-7F9gHF-CqPAUxHqFshe9FBcmaZVVyw--MpQDyyO9cHVKcmrfJv1K_YDc2GTW6__nWQ1M6Ii2ISsDPUnXUU0NEpwcHhl7dwphjdLdY23aiBMo9Pgc-kf6mf9yDUZtDo81VHbSBoJ2hYn0M'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'industrial',
    title: 'Industrial Scale',
    subtitle: 'High-capacity arrays for manufacturing & industrial processing',
    description: 'High-capacity arrays engineered for manufacturing facilities and large-scale operations requiring robust power consistency, peak-shaving, and high voltage grid interconnects.',
    capacityBadge: '100kW+',
    typeBadge: 'Grid-Tied',
    icon: 'factory',
    imageUrl: SOLAR_IMAGES.industrial,
    features: [
      'High-voltage grid synchronization & net metering setup',
      'Structural ballast load analysis & custom elevated racking',
      'SCADA system integration for real-time plant telemetry',
      'Harmonic filtering & industrial power factor correction'
    ],
    specs: {
      maxCapacity: 'Custom (100kW to 5MW)',
      gridConnection: 'High Voltage 3-Phase',
      efficiencyRating: '22.8% Module Yield',
      warrantyYears: '25-Year Performance Guarantee'
    }
  },
  {
    id: 'residential',
    title: 'Residential Excellence',
    subtitle: 'Aesthetic, high-efficiency solar for premium homes',
    description: 'Flush-mount architectural panels paired with intelligent string or micro-inverters. Engineered for sleek roof aesthetic, high shading tolerance, and zero-compromise home backup.',
    capacityBadge: 'Up to 20kW',
    typeBadge: 'Hybrid & Storage',
    icon: 'home',
    imageUrl: SOLAR_IMAGES.residential,
    features: [
      'All-black glass panels with ultra-low profile mounting',
      'Smart app monitoring for real-time household consumption',
      'Modular battery expansion options for seamless power backup',
      'Rapid shutdown security compliant with NEC guidelines'
    ],
    specs: {
      maxCapacity: '5kW - 20kW Systems',
      gridConnection: 'Single & Split Phase',
      efficiencyRating: '23.1% Tier-1 N-Type TOPCon',
      warrantyYears: '25-Year Product & Yield Warranty'
    }
  },
  {
    id: 'agricultural',
    title: 'Agri-Solar Pumps',
    subtitle: 'Reliable off-grid irrigation & pumping systems',
    description: 'Direct solar-powered irrigation controllers, off-grid water pumping, and elevated bifacial arrays allowing simultaneous crop cultivation and maximum solar generation.',
    capacityBadge: 'Off-Grid',
    typeBadge: 'High Torque VFD',
    icon: 'water_drop',
    imageUrl: SOLAR_IMAGES.agriPump,
    features: [
      'Variable Frequency Drive (VFD) controllers for solar pumps',
      'Dual-land utilization elevated framework for tractors',
      'Zero battery cost direct solar water lifting solutions',
      'Weatherproof IP65 outdoor telemetry enclosures'
    ],
    specs: {
      maxCapacity: '3HP to 50HP Pumps',
      gridConnection: 'Standalone Off-Grid / Hybrid',
      efficiencyRating: 'MPPT Efficiency >99.5%',
      warrantyYears: '10-Year Inverter & Frame Warranty'
    }
  },
  {
    id: 'om-services',
    title: 'O&M Services',
    subtitle: 'Operations & Maintenance for guaranteed uptime',
    description: 'Comprehensive Operations & Maintenance protocols to ensure peak system performance, early defect diagnosis, thermal anomaly detection, and maximum financial yield.',
    capacityBadge: '24/7 Monitoring',
    typeBadge: 'Certified Audit',
    icon: 'build_circle',
    imageUrl: SOLAR_IMAGES.omTech,
    features: [
      'FLIR Thermal imaging drone scans for cell hotspot detection',
      'Inverter diagnostic testing & firmware calibration',
      'De-ionized water robotic panel cleaning services',
      'String voltage & IV-curve trace analysis reports'
    ],
    specs: {
      maxCapacity: 'All System Sizes',
      gridConnection: 'On-Site & Remote Audit',
      efficiencyRating: 'SLA < 4hr Emergency Response',
      warrantyYears: 'Performance Recovery Guarantee'
    }
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'alpha-industrial',
    title: 'Alpha Industrial Complex',
    location: 'Industrial Park Phase II, Sector 4',
    capacity: '50kW System',
    systemType: 'Grid-Tied Commercial',
    description: 'A full structural redesign to support a high-yield 50kW array, optimizing tilt angles for maximum winter irradiance and heavy factory machinery loads.',
    imageUrl: SOLAR_IMAGES.alphaComplex,
    year: '2024',
    annualGeneration: '78,500 kWh',
    co2SavedTonnes: '55.2 Tonnes/Yr',
    highlights: [
      'Custom wind-tunnel load tested aluminum mounting structural frames',
      'Dual three-phase smart solar inverters with automated power factor control',
      'Integrated net-metering setup reducing factory utility costs by 68%'
    ]
  },
  {
    id: 'agri-solar-integration',
    title: 'Agri-Solar Integration',
    location: 'Greenfield Valley Agriculture',
    capacity: '35kW System',
    systemType: 'Dual-Use Agrivoltaic',
    description: 'Elevated structural framework mounted at 3.8 meters height to enable tractor operations below while producing green energy for automated drip irrigation.',
    imageUrl: SOLAR_IMAGES.agriFrame,
    year: '2024',
    annualGeneration: '52,100 kWh',
    co2SavedTonnes: '36.8 Tonnes/Yr',
    highlights: [
      'Bifacial glass-glass modules harvesting ground reflection light',
      'Direct MPPT solar pump interface running 15HP submersible pumps',
      'Custom anti-corrosion galvanized steel posts for long soil lifespan'
    ]
  },
  {
    id: 'power-electronics-rack',
    title: 'Power Electronics Hub',
    location: 'Sirumugai, Coimbatore Dt.',
    capacity: '120kW / 240kWh Storage',
    systemType: 'Microgrid & ESS Storage',
    description: 'Tier-1 inverters and modular storage racks delivering uninterrupted emergency microgrid power for critical datacenter operations.',
    imageUrl: SOLAR_IMAGES.powerElectronics,
    year: '2023',
    annualGeneration: '185,000 kWh',
    co2SavedTonnes: '130.5 Tonnes/Yr',
    highlights: [
      'Sub-10ms transfer switch time for zero downtime server protection',
      'Lithium Iron Phosphate (LFP) rack batteries with liquid cooling',
      'Automated peak-shaving algorithm discharging during high tariff hours'
    ]
  },
  {
    id: 'coastal-residential-villa',
    title: 'Coastal Residential Estate',
    location: 'Palm Horizon Estate',
    capacity: '18kW System',
    systemType: 'Hybrid Storage',
    description: 'Sleek architectural black-on-black monocrystalline solar roof installation engineered to resist high wind speeds and salt-mist corrosion.',
    imageUrl: SOLAR_IMAGES.residential,
    year: '2024',
    annualGeneration: '27,800 kWh',
    co2SavedTonnes: '19.4 Tonnes/Yr',
    highlights: [
      'Integrated 15kWh wall-mounted lithium energy storage system',
      'Marine-grade anodized aluminum racking hardware',
      'Individual panel optimizer architecture overcoming tree shading'
    ]
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'topcon-580w',
    name: 'SunLeaf Pro 580W N-Type TOPCon Panel',
    category: 'panels',
    brand: 'Sun Leaf Modular',
    description: 'Tier-1 ultra-high efficiency bifacial solar module built with multi-busbar cell technology for maximum thermal performance in high ambient heat.',
    efficiency: '22.8%',
    specs: {
      'Nominal Power': '580 Wp',
      'Module Efficiency': '22.8%',
      'Cell Type': 'N-Type Monocrystalline TOPCon',
      'Dimensions': '2278 x 1134 x 35 mm',
      'Degradation': '< 0.40% / year (30-yr output)',
      'Frame': 'Anodized Aluminum Alloy (Black/Silver)'
    },
    imageUrl: SOLAR_IMAGES.industrial,
    featured: true
  },
  {
    id: 'poly-inverter-50k',
    name: 'SunLeaf PolyCab 50kW Industrial Inverter',
    category: 'inverters',
    brand: 'PolyCab Industrial',
    description: 'Commercial 3-phase grid-tied string inverter featuring 4 MPPT trackers, active cooling, and built-in Type II AC/DC surge protection.',
    efficiency: '98.8%',
    specs: {
      'Rated Power': '50 kW',
      'Max DC Input Voltage': '1100 V',
      'MPPT Quantity': '4 Independent Trackers',
      'Communication': 'RS485, Wi-Fi, Ethernet, CAN',
      'Protection Class': 'IP66 Outdoor Enclosure',
      'Weight': '48 kg'
    },
    imageUrl: SOLAR_IMAGES.omTech,
    featured: true
  },
  {
    id: 'lfp-storage-rack',
    name: 'SunLeaf Modular LFP Battery Rack 30kWh',
    category: 'storage',
    brand: 'Sun Leaf Power',
    description: 'High-voltage modular LiFePO4 battery cabinet designed for industrial microgrids, offering 6,000+ deep discharge cycles and active fire suppression.',
    efficiency: '96.5% Round-Trip',
    specs: {
      'Capacity': '30.72 kWh per cabinet',
      'Nominal Voltage': '512 V',
      'Max Charge/Discharge': '60 A continuous',
      'Cell Chemistry': 'Lithium Iron Phosphate (LFP)',
      'Cycle Life': '> 6,000 cycles @ 80% DoD',
      'Safety': 'Built-in Aerosol Fire Suppression'
    },
    imageUrl: SOLAR_IMAGES.powerElectronics,
    featured: true
  },
  {
    id: 'agri-vfd-pump-controller',
    name: 'SunLeaf AgDrive VFD Solar Controller 20HP',
    category: 'pumps',
    brand: 'Sun Leaf Solar Engine',
    description: 'Automated solar pump drive with dynamic MPPT algorithm, dry-run sensor input, and automated motor soft-start for deep agricultural borewells.',
    efficiency: '99.2% MPPT',
    specs: {
      'Motor Rating': 'Up to 20 HP / 15 kW',
      'Input Voltage Range': '250V - 800V DC',
      'Output': '3-Phase AC 380V/415V',
      'Features': 'Dry Run, Tank Full, Overvoltage Protection',
      'Enclosure': 'NEMA 4X / IP65 Dustproof'
    },
    imageUrl: SOLAR_IMAGES.agriPump,
    featured: true
  }
];

export const COMPANY_INFO = {
  name: 'Sun Leaf Solar',
  tagline: 'Engineering Excellence. ISO 9001:2015 Certified.',
  isoBadge: 'ISO 9001:2015 Certified Quality Management System',
  address: 'Amman Complex, Theatre Medu, Sirumugai - 641 302, Coimbatore Dt.',
  phone: '+91 99443 38532 / +91 90434 27215',
  whatsapp: '+919944338532',
  email: 'sunleafsolar2022@gmail.com',
  workingHours: 'Mon - Sat: 8:30 AM - 6:30 PM IST'
};

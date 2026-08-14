export type NavigationTab = 'home' | 'services' | 'products' | 'projects' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capacityBadge: string;
  typeBadge: string;
  icon: string;
  imageUrl: string;
  features: string[];
  specs: {
    maxCapacity: string;
    gridConnection: string;
    efficiencyRating: string;
    warrantyYears: string;
  };
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'panels' | 'inverters' | 'storage' | 'pumps' | 'monitoring';
  brand: string;
  description: string;
  efficiency: string;
  specs: Record<string, string>;
  imageUrl: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  capacity: string;
  systemType: string;
  description: string;
  imageUrl: string;
  year: string;
  annualGeneration: string;
  co2SavedTonnes: string;
  highlights: string[];
}

export interface SolarCalculatorState {
  propertyType: 'industrial' | 'commercial' | 'residential' | 'agricultural';
  monthlyBillInr: number;
  roofAreaSqFt: number;
  desiredBackupHours: number;
  stateOrRegion: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  propertyType: 'industrial' | 'commercial' | 'residential' | 'agricultural';
  estimatedBudget: string;
  monthlyBill: string;
  address: string;
  systemInterest: string[];
  additionalNotes: string;
}

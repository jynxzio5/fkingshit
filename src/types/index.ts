export interface EnergyData {
  timestamp: string;
  usage: number;
}

export interface SmartDevice {
  id: string;
  name: string;
  isOn: boolean;
  type: 'light' | 'ac' | 'heater' | 'tv' | 'other';
  consumption: number; // watts
}

export interface EnergyTip {
  id: string;
  title: string;
  description: string;
  savingPotential: string;
} 
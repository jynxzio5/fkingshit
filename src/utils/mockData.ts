import { EnergyData, SmartDevice, EnergyTip } from '../types';
import { translations } from './translations';

export const generateEnergyData = (): EnergyData[] => {
  const data: EnergyData[] = [];
  const now = new Date();
  
  // نمط استهلاك نموذجي خلال اليوم
  const hourlyPatterns = [
    0.4, 0.3, 0.2, 0.2, 0.3, 0.5,  // 12am - 6am
    0.8, 1.2, 1.0, 0.9, 0.8, 0.9,  // 6am - 12pm
    1.1, 1.3, 1.2, 1.1, 1.4, 1.6,  // 12pm - 6pm
    2.0, 1.8, 1.5, 1.2, 0.8, 0.5   // 6pm - 12am
  ];
  
  for (let i = 0; i < 24; i++) {
    const hour = (23 - i + now.getHours()) % 24;
    const timestamp = new Date(now.getTime() - (i * 3600000)).toISOString();
    // استخدام النمط مع إضافة تغير عشوائي صغير (±10%)
    const baseUsage = hourlyPatterns[hour];
    const variation = baseUsage * (0.9 + Math.random() * 0.2);
    const usage = Number(variation.toFixed(3));
    data.unshift({ timestamp, usage });
  }
  
  return data;
};

export const getMockDevices = (lang: 'en' | 'ar'): SmartDevice[] => [
  {
    id: '1',
    name: translations[lang].deviceNames.livingRoomLights,
    isOn: false,
    type: 'light',
    consumption: 60
  },
  {
    id: '2',
    name: translations[lang].deviceNames.airConditioner,
    isOn: false,
    type: 'ac',
    consumption: 1500
  },
  {
    id: '3',
    name: translations[lang].deviceNames.smartTV,
    isOn: false,
    type: 'tv',
    consumption: 100
  },
  {
    id: '4',
    name: translations[lang].deviceNames.heater,
    isOn: false,
    type: 'heater',
    consumption: 1000
  }
];

export const getEnergyTips = (lang: 'en' | 'ar'): EnergyTip[] => [
  {
    id: '1',
    ...translations[lang].tips.acTemp
  },
  {
    id: '2',
    ...translations[lang].tips.ledLights
  },
  {
    id: '3',
    ...translations[lang].tips.smartPower
  }
]; 
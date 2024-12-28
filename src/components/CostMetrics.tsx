import { useEffect, useState } from 'react';
import { TrendingUp, AlertTriangle } from 'lucide-react';
import { SmartDevice } from '../types';

// أسعار الكهرباء في الأردن (2024) - تعرفة المنزلي
const JORDAN_ELECTRICITY_RATES = [
  { limit: 300, rate: 0.033 },  // 0-300 كيلوواط
  { limit: 600, rate: 0.072 },  // 301-600 كيلوواط
  { limit: 750, rate: 0.086 },  // 601-750 كيلوواط
  { limit: 1000, rate: 0.114 }, // 751-1000 كيلوواط
  { limit: Infinity, rate: 0.158 } // أكثر من 1000 كيلوواط
];

interface Props {
  devices: SmartDevice[];
  translations: {
    title: string;
    currentRate: string;
    estimatedBill: string;
    currency: string;
    perKwh: string;
    consumption: string;
    highUsageWarning: string;
  };
  isRtl: boolean;
}

export const CostMetrics = ({ devices, translations, isRtl }: Props) => {
  const [totalKwh, setTotalKwh] = useState(0);
  const [currentRate, setCurrentRate] = useState(0);
  const [estimatedBill, setEstimatedBill] = useState(0);

  useEffect(() => {
    // حساب الاستهلاك اليومي بالكيلوواط ساعة
    const activeDevices = devices.filter(d => d.isOn);
    const dailyKwh = activeDevices.reduce((acc, device) => {
      return acc + (device.consumption / 1000) * 24; // تحويل من واط إلى كيلوواط وضرب بساعات اليوم
    }, 0);
    
    // تقدير الاستهلاك الشهري
    const monthlyKwh = dailyKwh * 30;
    setTotalKwh(monthlyKwh);

    // حساب التعرفة والفاتورة
    let bill = 0;
    let lastLimit = 0;
    
    for (const { limit, rate } of JORDAN_ELECTRICITY_RATES) {
      if (monthlyKwh > lastLimit) {
        const consumptionInBracket = Math.min(monthlyKwh - lastLimit, limit - lastLimit);
        bill += consumptionInBracket * rate;
        
        if (monthlyKwh <= limit) {
          setCurrentRate(rate);
          break;
        }
      }
      lastLimit = limit;
    }

    setEstimatedBill(bill);
  }, [devices]);

  const isHighUsage = totalKwh > 600; // تحذير عند تجاوز 600 كيلوواط شهرياً

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 shadow-lg">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
        <TrendingUp className="w-5 h-5" />
        {translations.title}
      </h2>
      
      <div className="space-y-4">
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${isRtl ? 'sm:rtl' : 'sm:ltr'}`}>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">{translations.consumption}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {totalKwh.toFixed(1)} kWh
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">{translations.currentRate}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {currentRate.toFixed(3)} {translations.currency}{translations.perKwh}
            </p>
          </div>
        </div>

        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-3">
          <p className="text-sm text-primary-600 dark:text-primary-400">{translations.estimatedBill}</p>
          <p className="text-3xl font-bold text-primary-700 dark:text-primary-300">
            {estimatedBill.toFixed(2)} {translations.currency}
          </p>
        </div>

        {isHighUsage && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              {translations.highUsageWarning}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}; 
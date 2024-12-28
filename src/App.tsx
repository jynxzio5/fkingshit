import { useState, useEffect } from 'react';
import { SmartDeviceList } from './components/SmartDeviceList';
import { EnergyTips } from './components/EnergyTips';
import { DarkModeToggle } from './components/DarkModeToggle';
import { generateEnergyData, getMockDevices, getEnergyTips } from './utils/mockData';
import { SmartDevice } from './types';
import { LanguageSelector } from './components/LanguageSelector';
import { translations, Language } from './utils/translations';
import { CostMetrics } from './components/CostMetrics';
import { EnergyUsageChart } from './components/EnergyUsageChart';
import { LoginModal } from './components/LoginModal';
import { SmartProducts } from './components/SmartProducts';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [devices, setDevices] = useState<SmartDevice[]>(() => getMockDevices(language));
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const energyData = generateEnergyData();
  const t = translations[language];

  useEffect(() => {
    setDevices(getMockDevices(language));
  }, [language]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleToggleDevice = (deviceId: string) => {
    setDevices(devices.map(device =>
      device.id === deviceId ? { ...device, isOn: !device.isOn } : device
    ));
  };

  const handleUpdateDevicePower = (deviceId: string, newPower: number) => {
    setDevices(devices.map(device =>
      device.id === deviceId ? { ...device, consumption: newPower } : device
    ));
  };

  const handleAddDevice = (newDevice: Omit<SmartDevice, 'id'>) => {
    const id = (devices.length + 1).toString();
    setDevices([...devices, { ...newDevice, id }]);
  };

  return (
    <div className={`min-h-screen overflow-x-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl sm:text-2xl font-bold dark:text-white">{t.title}</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={language === 'ar' ? 'تسجيل الدخول' : 'Login'}
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <LanguageSelector currentLang={language} onLanguageChange={setLanguage} />
            <DarkModeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          <EnergyUsageChart 
            data={energyData}
            title={t.energyUsage}
            language={language}
          />
          <SmartDeviceList 
            devices={devices} 
            onToggleDevice={handleToggleDevice}
            onUpdateDevicePower={handleUpdateDevicePower}
            onAddDevice={handleAddDevice}
            title={t.smartDevices}
            wattsLabel={t.watts}
            translations={t.deviceControls}
          />
        </div>
        
        <div className="mt-4 sm:mt-6">
          <CostMetrics 
            devices={devices}
            translations={t.costMetrics}
            isRtl={language === 'ar'}
          />
        </div>

        <div className="mt-4 sm:mt-6">
          <SmartProducts language={language} />
        </div>
        
        <div className="mt-4 sm:mt-6">
          <EnergyTips tips={getEnergyTips(language)} title={t.energySavingTips} />
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        language={language}
      />
    </div>
  );
}

export default App;

export const translations = {
  en: {
    title: 'Energy Monitor',
    energyUsage: 'Energy Usage',
    smartDevices: 'Smart Devices',
    energySavingTips: 'Energy Saving Tips',
    watts: 'W',
    costMetrics: {
      title: 'Cost Metrics',
      currentRate: 'Current Rate',
      estimatedBill: 'Estimated Monthly Bill',
      currency: 'JOD',
      perKwh: '/kWh',
      consumption: 'Total Consumption',
      highUsageWarning: 'High consumption detected!'
    },
    deviceNames: {
      livingRoomLights: 'Living Room Lights',
      airConditioner: 'Air Conditioner',
      smartTV: 'Smart TV',
      heater: 'Heater'
    },
    deviceControls: {
      editPower: 'Edit Power',
      savePower: 'Save',
      cancel: 'Cancel',
      powerPlaceholder: 'Enter watts...',
      invalidPower: 'Please enter a valid power value',
      invalidName: 'Please enter a device name',
      addDevice: 'Add New Device',
      deviceName: 'Device Name',
      deviceType: 'Device Type',
      devicePower: 'Power (Watts)',
      addNewDevice: 'Add Device',
      namePlaceholder: 'Enter device name...',
      selectType: 'Select device type...',
      deviceTypes: {
        light: '💡 Light',
        ac: '❄️ AC',
        tv: '📺 TV',
        heater: '🔥 Heater',
        other: '📱 Other'
      }
    },
    tips: {
      acTemp: {
        title: 'Optimize AC Temperature',
        description: 'Set your AC to 24°C (75°F) for optimal energy efficiency.',
        savingPotential: 'Save up to 10% on cooling costs'
      },
      ledLights: {
        title: 'LED Lighting',
        description: 'Switch to LED bulbs to reduce lighting energy consumption.',
        savingPotential: 'Save up to 75% on lighting costs'
      },
      smartPower: {
        title: 'Smart Power Strips',
        description: 'Use smart power strips to eliminate phantom energy usage.',
        savingPotential: 'Save up to 5% on electricity bills'
      }
    }
  },
  ar: {
    title: 'مراقب الطاقة',
    energyUsage: 'استهلاك الطاقة',
    smartDevices: 'الأجهزة الذكية',
    energySavingTips: 'نصائح توفير الطاقة',
    watts: 'واط',
    costMetrics: {
      title: 'مؤشرات التكلفة',
      currentRate: 'التعرفة الحالية',
      estimatedBill: 'الفاتورة الشهرية التقديرية',
      currency: 'د.أ',
      perKwh: '/ك.و.س',
      consumption: 'إجمالي الاستهلاك',
      highUsageWarning: 'تم رصد استهلاك مرتفع!'
    },
    deviceNames: {
      livingRoomLights: 'إضاءة غرفة المعيشة',
      airConditioner: 'مكيف الهواء',
      smartTV: 'التلفاز الذكي',
      heater: 'المدفأة'
    },
    deviceControls: {
      editPower: 'تعديل الطاقة',
      savePower: 'حفظ',
      cancel: 'إلغاء',
      powerPlaceholder: 'أدخل الواط...',
      invalidPower: 'الرجاء إدخال قيمة طاقة صحيحة',
      invalidName: 'الرجاء إدخال اسم الجهاز',
      addDevice: 'إضافة جهاز جديد',
      deviceName: 'اسم الجهاز',
      deviceType: 'نوع الجهاز',
      devicePower: 'الطاقة (واط)',
      addNewDevice: 'إضافة جهاز',
      namePlaceholder: 'أدخل اسم الجهاز...',
      selectType: 'اختر نوع الجهاز...',
      deviceTypes: {
        light: '💡 إضاءة',
        ac: '❄️ مكيف',
        tv: '📺 تلفاز',
        heater: '🔥 مدفأة',
        other: '📱 آخر'
      }
    },
    tips: {
      acTemp: {
        title: 'ضبط درجة حرارة المكيف',
        description: 'اضبط درجة حرارة المكيف على 24 درجة مئوية للحصول على أفضل كفاءة للطاقة',
        savingPotential: 'وفر حتى 10٪ من تكاليف التبريد'
      },
      ledLights: {
        title: 'إضاءة LED',
        description: 'قم بالتبديل إلى مصابيح LED لتقليل استهلاك الطاقة في الإضاءة',
        savingPotential: 'وفر حتى 75٪ من تكاليف الإضاءة'
      },
      smartPower: {
        title: 'أشرطة الطاقة الذكية',
        description: 'استخدم أشرطة الطاقة الذكية للقضاء على استهلاك الطاقة الوهمي',
        savingPotential: 'وفر حتى 5٪ من فواتير الكهرباء'
      }
    }
  }
};

export type Language = keyof typeof translations; 
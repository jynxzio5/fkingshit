interface Props {
  language: 'en' | 'ar';
}

interface Product {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  features: {
    ar: string[];
    en: string[];
  };
  imagePath: string;
  price: number;
}

const products: Product[] = [
  {
    id: 'smart-plug-1',
    name: {
      ar: 'قابس الطاقة الذكي برو',
      en: 'Smart Power Plug Pro'
    },
    description: {
      ar: 'قابس ذكي متطور يتيح لك مراقبة والتحكم في استهلاك الطاقة لأجهزتك الكهربائية في الوقت الفعلي عبر تطبيقنا وموقعنا الإلكتروني.',
      en: 'Advanced smart plug that allows you to monitor and control your electrical devices\' power consumption in real-time through our app and website.'
    },
    features: {
      ar: [
        'اتصال WiFi سريع وآمن',
        'قياس دقيق للطاقة المستهلكة',
        'جدولة التشغيل والإيقاف التلقائي',
        'تنبيهات استهلاك الطاقة المفرط',
        'تحكم عن بُعد من أي مكان',
        'توافق مع المساعدات الصوتية'
      ],
      en: [
        'Fast and secure WiFi connectivity',
        'Precise power consumption measurement',
        'Automated on/off scheduling',
        'Excessive power consumption alerts',
        'Remote control from anywhere',
        'Voice assistant compatibility'
      ]
    },
    imagePath: '/src/assets/pics/q2.jpg',
    price: 3.99
  },
  {
    id: 'smart-strip-1',
    name: {
      ar: 'توصيلة كهرباء ذكية',
      en: 'Smart Power Extension'
    },
    description: {
      ar: 'توصيلة كهرباء ذكية متعددة المنافذ تمكنك من مراقبة والتحكم في العديد من الأجهزة في وقت واحد، مع ميزات حماية متقدمة.',
      en: 'Multi-outlet smart power extension that enables you to monitor and control multiple devices simultaneously, with advanced protection features.'
    },
    features: {
      ar: [
        '6 منافذ ذكية قابلة للتحكم',
        'حماية ضد التيار الزائد',
        'مراقبة مستقلة لكل منفذ',
        'تحليلات استهلاك مفصلة',
        'تصميم آمن ومقاوم للحرارة',
        'دعم التحكم الصوتي'
      ],
      en: [
        '6 controllable smart outlets',
        'Surge protection',
        'Individual outlet monitoring',
        'Detailed consumption analytics',
        'Safe and heat-resistant design',
        'Voice control support'
      ]
    },
    imagePath: '/src/assets/pics/q1.jpg',
    price: 3.99
  }
];

export const SmartProducts = ({ language }: Props) => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        {language === 'ar' ? 'منتجاتنا الذكية' : 'Our Smart Products'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 transition-transform hover:scale-[1.02]">
            <div className="text-center mb-4">
              <img
                src={product.imagePath}
                alt={product.name[language]}
                className="w-full h-48 object-cover object-center rounded-lg"
              />
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white text-center">
              {product.name[language]}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              {product.description[language]}
            </p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {language === 'ar' ? 'المميزات:' : 'Features:'}
              </h4>
              <ul className="space-y-2">
                {product.features[language].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center mt-6">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {language === 'ar' ? `${product.price} ر.س` : `${product.price} SAR`}
              </span>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 
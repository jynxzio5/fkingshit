interface Props {
  onClose: () => void;
  language: 'en' | 'ar';
}

export const PrototypeNotice = ({ onClose, language }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-gradient-to-b from-white/95 to-white/90 dark:from-gray-800/95 dark:to-gray-800/90 
                    rounded-2xl p-8 w-full max-w-2xl mx-4 relative border border-gray-200 dark:border-gray-700
                    shadow-[0_0_50px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]
                    transform transition-all duration-300 ease-out animate-slideUp">
        
        <div className="flex flex-col items-center -space-y-2">
          {/* University Logo */}
          <div className="w-20 h-20">
            <svg className="w-full h-full text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M12 14v7M4.5 9v7M19.5 9v7"/>
            </svg>
          </div>

          {/* Title */}
          <div className="-mt-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-blue-600 to-blue-400 
                         bg-clip-text text-transparent font-display tracking-tight leading-normal">
              {language === 'ar' 
                ? 'نموذج تجريبي'
                : 'Prototype Project'}
            </h2>

            <h3 className="text-xl sm:text-2xl text-center mb-8 text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
              {language === 'ar'
                ? 'مشروع مادة الريادة والابتكار'
                : 'Innovation & Entrepreneurship Course'}
            </h3>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-6 text-center mb-8 max-w-xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            {language === 'ar'
              ? 'عزيزي المستخدم، هذا المشروع هو نموذج أولي تم تطويره لعرض فكرة مبتكرة في مجال مراقبة وتحسين استهلاك الطاقة باستخدام التقنيات الذكية.'
              : 'Dear user, this project is a prototype designed to showcase an innovative concept in smart energy monitoring and optimization.'}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {language === 'ar'
              ? 'نظراً للطبيعة التجريبية للمشروع، وظائف تسجيل الدخول غير متاحة حالياً.'
              : 'Due to the experimental nature of this project, login functionality is currently not available.'}
          </p>
        </div>

        {/* Custom Sad Face */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700">
            <svg className="w-8 h-8 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <path strokeWidth="2" d="M8 16s1.5-2 4-2 4 2 4 2"/>
              <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round"/>
              <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Return Button */}
        <button
          onClick={onClose}
          className="w-full sm:w-auto min-w-[200px] mx-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 
                   text-white text-lg font-medium rounded-xl flex items-center justify-center gap-2
                   hover:from-blue-700 hover:to-blue-600 transform hover:scale-[1.02] transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 group"
        >
          <span>
            {language === 'ar' ? 'العودة للصفحة السابقة' : 'Return to Previous Page'}
          </span>
          <svg 
            className={`w-5 h-5 transition-transform duration-200 ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}; 
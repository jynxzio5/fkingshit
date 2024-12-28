import { useState } from 'react';
import { PrototypeNotice } from './PrototypeNotice';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'ar';
}

export const LoginModal = ({ isOpen, onClose, language }: Props) => {
  const [showNotice, setShowNotice] = useState(false);

  if (!isOpen) return null;

  const handleGoogleLogin = () => {
    setShowNotice(true);
  };

  const handleFacebookLogin = () => {
    setShowNotice(true);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
        <div 
          className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 w-full max-w-md mx-4 relative
                     shadow-[0_0_50px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]
                     transform transition-all duration-300 ease-out animate-slideUp"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 
                       dark:hover:text-gray-200 transition-colors duration-200 p-2 rounded-full
                       hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title with gradient */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {language === 'ar' ? 'تسجيل الدخول' : 'Welcome Back'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {language === 'ar' ? 'قم بتسجيل الدخول لمتابعة استهلاك الطاقة' : 'Sign in to monitor your energy usage'}
            </p>
          </div>

          {/* Login buttons */}
          <div className="space-y-4">
            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 text-gray-700 
                       bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                       transform hover:scale-[1.02] transition-all duration-200
                       dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-lg">
                {language === 'ar' ? 'تسجيل الدخول مع جوجل' : 'Continue with Google'}
              </span>
            </button>

            {/* Facebook Login */}
            <button
              onClick={handleFacebookLogin}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 text-white 
                       bg-gradient-to-r from-[#1877f2] to-[#166bda] rounded-xl
                       hover:from-[#166bda] hover:to-[#1559b7]
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1877f2]
                       transform hover:scale-[1.02] transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
              </svg>
              <span className="text-lg">
                {language === 'ar' ? 'تسجيل الدخول مع فيسبوك' : 'Continue with Facebook'}
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mt-8 mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                {language === 'ar' ? 'أو' : 'OR'}
              </span>
            </div>
          </div>

          {/* Guest Access */}
          <button
            onClick={onClose}
            className="w-full px-6 py-3 text-gray-600 dark:text-gray-300 text-lg
                     hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            {language === 'ar' ? 'الدخول كزائر' : 'Continue as Guest'}
          </button>
        </div>
      </div>

      {showNotice && (
        <PrototypeNotice
          onClose={() => setShowNotice(false)}
          language={language}
        />
      )}
    </>
  );
}; 
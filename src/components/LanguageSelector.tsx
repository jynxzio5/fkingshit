import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Globe } from 'lucide-react';

interface Props {
  currentLang: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
}

const languages = {
  en: 'English',
  ar: 'العربية'
};

export const LanguageSelector = ({ currentLang, onLanguageChange }: Props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
        <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {Object.entries(languages).map(([code, name]) => (
              <Menu.Item key={code}>
                {({ active }) => (
                  <button
                    onClick={() => onLanguageChange(code as 'en' | 'ar')}
                    className={`${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } ${
                      currentLang === code ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
                    } group flex w-full items-center px-4 py-2 text-sm`}
                  >
                    {name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}; 
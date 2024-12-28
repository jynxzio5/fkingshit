import { EnergyTip } from '../types';
import { Lightbulb } from 'lucide-react';

interface Props {
  tips: EnergyTip[];
  title: string;
}

export const EnergyTips = ({ tips, title }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 shadow-lg">
      <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 dark:text-white">{title}</h2>
      <div className="space-y-2 sm:space-y-4">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex items-center space-x-2 mb-1 sm:mb-2">
              <Lightbulb className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <h3 className="text-sm sm:text-base font-medium dark:text-white">{tip.title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-1 sm:mb-2">
              {tip.description}
            </p>
            <p className="text-xs sm:text-sm font-medium text-primary-600 dark:text-primary-400">
              {tip.savingPotential}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import { EnergyData } from '../types';
import { format, parseISO } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';

interface Props {
  data: EnergyData[];
  title: string;
  language: 'en' | 'ar';
}

export const EnergyUsageChart = ({ data, title, language }: Props) => {
  const locale = language === 'ar' ? ar : enUS;

  const formattedData = data.map(item => ({
    ...item,
    time: format(parseISO(item.timestamp), 'h:mm a', { locale }),
  }));

  const maxUsage = Math.ceil(Math.max(...data.map(item => item.usage)));
  const minUsage = Math.floor(Math.min(...data.map(item => item.usage)));

  return (
    <div className="w-full h-[300px] sm:h-[400px] bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-semibold dark:text-white">{title}</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
            {language === 'ar' ? 'استهلاك الطاقة' : 'Energy Usage'}
          </span>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          
          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false}
            stroke="rgba(156, 163, 175, 0.2)"
          />
          
          <XAxis
            dataKey="time"
            tick={{ fontSize: 12, fill: '#9ca3af' }}
            tickLine={{ stroke: '#9ca3af' }}
            axisLine={{ stroke: '#9ca3af' }}
            interval="preserveStartEnd"
            minTickGap={30}
          />
          
          <YAxis
            domain={[minUsage, maxUsage]}
            tick={{ fontSize: 12, fill: '#9ca3af' }}
            tickLine={{ stroke: '#9ca3af' }}
            axisLine={{ stroke: '#9ca3af' }}
            tickFormatter={(value) => `${value.toFixed(1)} kWh`}
            width={80}
          />
          
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white dark:bg-gray-900 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300 mb-1">
                      {format(parseISO(payload[0].payload.timestamp), 'PPpp', { locale })}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {`${typeof payload[0].value === 'number' ? payload[0].value.toFixed(2) : payload[0].value} kWh`}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          
          <Area
            type="monotone"
            dataKey="usage"
            stroke="none"
            fill="url(#energyGradient)"
            fillOpacity={1}
          />
          
          <Line
            type="monotone"
            dataKey="usage"
            stroke="url(#lineGradient)"
            strokeWidth={2.5}
            dot={false}
            activeDot={{
              r: 6,
              fill: '#3b82f6',
              stroke: '#fff',
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}; 
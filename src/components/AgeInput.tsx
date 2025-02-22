import React from 'react';
import { Calendar } from 'lucide-react';
import { AgeValue } from '../types';

interface AgeInputProps {
  value: AgeValue;
  onChange: (age: AgeValue) => void;
}

const AgeInput: React.FC<AgeInputProps> = ({ value, onChange }) => {
  const handleYearChange = (years: number) => {
    onChange({ ...value, years: Math.max(0, Math.min(12, years)) });
  };

  const handleMonthChange = (months: number) => {
    onChange({ ...value, months: Math.max(0, Math.min(11, months)) });
  };

  return (
    <div className="flex items-center space-x-4 bg-white rounded-full px-6 py-4 shadow-md w-full max-w-2xl hover:shadow-lg transition-shadow">
      <Calendar className="h-6 w-6 text-gray-400" />
      <div className="flex items-center space-x-4 flex-1">
        <div className="flex items-center space-x-2">
          <input
            type="number"
            min="0"
            max="12"
            value={value.years}
            onChange={(e) => handleYearChange(Number(e.target.value))}
            className="w-20 bg-transparent border-none focus:ring-0 text-gray-700 text-lg"
            placeholder="Años"
          />
          <span className="text-gray-500 text-lg">años</span>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            min="0"
            max="11"
            value={value.months}
            onChange={(e) => handleMonthChange(Number(e.target.value))}
            className="w-20 bg-transparent border-none focus:ring-0 text-gray-700 text-lg"
            placeholder="Meses"
          />
          <span className="text-gray-500 text-lg">meses</span>
        </div>
      </div>
    </div>
  );
};

export default AgeInput;
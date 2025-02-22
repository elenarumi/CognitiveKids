import React from 'react';
import { Clock, Award } from 'lucide-react';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="relative">
        <img 
          src={activity.thumbnail} 
          alt={activity.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
          {activity.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{activity.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{activity.ageRange} años</span>
          </div>
          <div className="flex items-center space-x-2 text-purple-600">
            <Award className="h-4 w-4" />
            <span>{activity.difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
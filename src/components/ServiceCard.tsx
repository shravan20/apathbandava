
import React from "react";
import { Star, MapPin, Tag } from "lucide-react";

export interface ServiceDetails {
  title: string;
  description: string;
  location: string;
  rating: number;
  skills: string[];
  provider: string;
  pricing?: string;
  timing?: string;
  category: string;
  feedback?: { comment: string; rating: number }[];
}

const ServiceCard = ({
  title,
  description,
  location,
  rating,
  skills,
  category,
}: ServiceDetails) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow animate-fadeIn cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <Tag className="w-4 h-4 mr-1" />
        <span>{category}</span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 text-xs font-medium text-primary bg-primary-light/10 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;

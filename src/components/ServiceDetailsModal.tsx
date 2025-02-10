
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Phone, Mail, Clock, DollarSign, User, MessageSquare, Tag } from "lucide-react";
import type { ServiceDetails } from "./ServiceCard";

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetails;
}

const ServiceDetailsModal = ({
  isOpen,
  onClose,
  service,
}: ServiceDetailsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{service.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{service.location}</span>
            </div>
            <div className="flex items-center text-sm">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="font-medium">{service.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <User className="w-4 h-4 mr-2" />
              <span>{service.provider}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Tag className="w-4 h-4 mr-2" />
              <span>{service.category}</span>
            </div>
            {service.timing && (
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>{service.timing}</span>
              </div>
            )}
            {service.pricing && (
              <div className="flex items-center text-sm text-gray-500">
                <DollarSign className="w-4 h-4 mr-2" />
                <span>{service.pricing}</span>
              </div>
            )}
          </div>

          <div>
            <h4 className="font-medium mb-2">Description</h4>
            <p className="text-gray-600">{service.description}</p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {service.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-xs font-medium text-primary bg-primary-light/10 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {service.feedback && service.feedback.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">Feedback</h4>
              <div className="space-y-3">
                {service.feedback.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center mb-1">
                      <MessageSquare className="w-4 h-4 mr-2 text-gray-500" />
                      <div className="flex items-center ml-auto">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">
                          {item.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{item.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button className="flex-1">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
            <Button variant="outline" className="flex-1">
              <Mail className="w-4 h-4 mr-2" />
              Message
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsModal;

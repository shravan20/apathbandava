
import React, { useState } from "react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import AddServiceModal from "@/components/AddServiceModal";
import ServiceDetailsModal from "@/components/ServiceDetailsModal";
import type { ServiceDetails } from "@/components/ServiceCard";

const mockServices: ServiceDetails[] = [
  {
    title: "Electrical Repairs",
    description: "Professional electrician offering help with electrical issues",
    location: "Pune, Maharashtra",
    rating: 4.7,
    skills: ["Electrical", "Wiring", "Installation"],
    provider: "John Smith",
    category: "Home Maintenance",
    timing: "Mon-Fri, 9AM-6PM",
    pricing: "₹500/hour",
    feedback: [
      { comment: "Great service, very professional", rating: 5 },
      { comment: "Quick and efficient work", rating: 4.5 },
    ],
  },
  {
    title: "Gardening Help",
    description: "Experienced gardener available for garden maintenance",
    location: "Bangalore, Karnataka",
    rating: 4.6,
    skills: ["Gardening", "Landscaping", "Plant Care"],
    provider: "Sarah Wilson",
    category: "Gardening",
    timing: "Weekends",
    pricing: "₹400/hour",
    feedback: [
      { comment: "Transformed my garden completely", rating: 5 },
    ],
  },
  {
    title: "Home Cleaning",
    description: "Reliable cleaning help for homes and apartments",
    location: "Chennai, Tamil Nadu",
    rating: 4.9,
    skills: ["Cleaning", "Organization", "Deep Clean"],
    provider: "Maria Garcia",
    category: "Cleaning",
    timing: "Daily, 8AM-4PM",
    pricing: "₹300/hour",
    feedback: [
      { comment: "Very thorough and detail-oriented", rating: 5 },
      { comment: "Best cleaning service I've used", rating: 4.8 },
    ],
  },
  {
    title: "Moving Assistance",
    description: "Help with moving and heavy lifting",
    location: "Hyderabad, Telangana",
    rating: 4.8,
    skills: ["Moving", "Lifting", "Packing"],
    provider: "Mike Johnson",
    category: "Moving",
    timing: "Available on request",
    pricing: "₹600/hour",
    feedback: [
      { comment: "Careful with furniture, very helpful", rating: 4.8 },
    ],
  },
];

const Browse = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);

  return (
    <Layout>
      <div className="space-y-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex gap-4">
            <Input
              placeholder="Search for services..."
              className="flex-1"
            />
            <Button>
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
          <div className="flex justify-end">
            <AddServiceModal />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockServices.map((service) => (
            <div key={service.title} onClick={() => setSelectedService(service)}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {selectedService && (
          <ServiceDetailsModal
            isOpen={!!selectedService}
            onClose={() => setSelectedService(null)}
            service={selectedService}
          />
        )}
      </div>
    </Layout>
  );
};

export default Browse;

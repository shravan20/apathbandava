
import React from "react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockServices = [
  {
    title: "Plumbing Assistance",
    description: "Available to help with basic plumbing issues in the local area",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    skills: ["Plumbing", "Emergency Repairs", "Installation"],
  },
  {
    title: "Basic Car Repairs",
    description: "Can help with basic car maintenance and troubleshooting",
    location: "Delhi, NCR",
    rating: 4.5,
    skills: ["Car Repair", "Maintenance", "Diagnostics"],
  },
  {
    title: "Computer Support",
    description: "Volunteer IT support for basic computer problems",
    location: "Bangalore, Karnataka",
    rating: 4.9,
    skills: ["IT Support", "Software", "Hardware"],
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-8">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Community Help Hub
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with volunteers and get the help you need, or offer your
            skills to help others in your community.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              className="bg-primary hover:bg-primary-dark text-white"
              size="lg"
              onClick={() => navigate("/browse")}
            >
              Find Help
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => navigate("/offer-help")}
            >
              <Plus className="w-4 h-4 mr-2" />
              Offer Help
            </Button>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Available Help
            </h2>
            <Button 
              variant="link" 
              className="text-primary"
              onClick={() => navigate("/browse")}
            >
              View All
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockServices.map((service) => (
              <div 
                key={service.title} 
                onClick={() => navigate("/browse")}
                className="cursor-pointer"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;

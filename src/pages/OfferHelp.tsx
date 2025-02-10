
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const OfferHelp = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Created",
      description: "Your helper profile has been created successfully.",
    });
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Offer Help</h1>
          <p className="text-gray-600">
            Share your skills with the community and help those in need.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Skills</label>
            <Input
              type="text"
              placeholder="e.g., Plumbing, Carpentry, etc."
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Location</label>
            <Input
              type="text"
              placeholder="Where are you located?"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              About You
            </label>
            <Textarea
              placeholder="Tell us about your experience and how you can help..."
              className="h-32"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Create Helper Profile
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default OfferHelp;


import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const RequestHelp = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "We'll notify helpers in your area about your request.",
    });
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Request Help</h1>
          <p className="text-gray-600">
            Describe what kind of help you need, and we'll connect you with
            volunteers in your community.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Title</label>
            <Input
              type="text"
              placeholder="e.g., Need help fixing a leaky faucet"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Location</label>
            <Input
              type="text"
              placeholder="Enter your location"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <Textarea
              placeholder="Describe what kind of help you need..."
              className="h-32"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Submit Request
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default RequestHelp;

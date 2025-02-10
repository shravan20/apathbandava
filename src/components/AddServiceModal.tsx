
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AddServiceModal = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Service Added",
      description: "Your service has been added successfully.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Service
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Service</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Service Title</label>
            <Input placeholder="e.g., Plumbing Services" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              placeholder="Describe your service..."
              className="h-24"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Location</label>
            <Input placeholder="e.g., Mumbai, Maharashtra" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Skills (comma separated)</label>
            <Input placeholder="e.g., Plumbing, Repairs, Installation" required />
          </div>
          <Button type="submit" className="w-full">
            Add Service
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddServiceModal;

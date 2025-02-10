
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { User, MapPin, Heart } from "lucide-react";

const Profile = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 bg-primary-light/10 rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <h2 className="font-semibold text-gray-900">Skills</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-sm font-medium text-primary bg-primary-light/10 rounded-full">
                  Plumbing
                </span>
                <span className="px-3 py-1 text-sm font-medium text-primary bg-primary-light/10 rounded-full">
                  Electrical
                </span>
                <span className="px-3 py-1 text-sm font-medium text-primary bg-primary-light/10 rounded-full">
                  Carpentry
                </span>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">About</h2>
              <p className="mt-2 text-gray-600">
                Experienced handyman with over 10 years of experience. Always happy
                to help community members with their home repair needs.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">Impact</h2>
              <div className="flex items-center mt-2 text-gray-600">
                <Heart className="w-4 h-4 mr-1 text-red-500" />
                <span>Helped 24 community members</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button className="w-full">Edit Profile</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

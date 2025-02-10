
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, Bell, User } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-secondary-light">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold text-primary">
                Community Help Hub
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/browse"
                className={`text-sm font-medium ${
                  location.pathname === "/browse"
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                Browse
              </Link>
              <Link
                to="/request-help"
                className={`text-sm font-medium ${
                  location.pathname === "/request-help"
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                Request Help
              </Link>
              <Link
                to="/offer-help"
                className={`text-sm font-medium ${
                  location.pathname === "/offer-help"
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                Offer Help
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-secondary-light rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-secondary-light rounded-full transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <Link
                to="/profile"
                className="p-2 hover:bg-secondary-light rounded-full transition-colors"
              >
                <User className="w-5 h-5 text-gray-600" />
              </Link>
              <button className="md:hidden p-2 hover:bg-secondary-light rounded-full transition-colors">
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 pt-20 pb-8">{children}</main>
    </div>
  );
};

export default Layout;

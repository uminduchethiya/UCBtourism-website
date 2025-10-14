import { useState } from "react";
import {
  Menu,
  X,
  User,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Contact,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function TravelInNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Bar with Date, Location, Hours and Social Media */}
      <div className="bg-primary text-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center text-sm">
            {/* Left side - Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Contact className="w-4 h-4" />
                <span>+94 772933146</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>southertours@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Padukka, Wattareka</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 10 AM - 5 PM</span>
              </div>
            </div>

            {/* Right side - Social Media */}
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-gray-200 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-2xl font-bold">
                  <span className="text-primary">TRAVEL</span>
                  <span className="text-secondary">IN</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary font-medium transition"
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary font-medium transition"
              >
                ABOUT US
              </Link>
              <Link
                to="/contactus"
                className="text-gray-700 hover:text-primary font-medium transition"
              >
                CONTACTUS
              </Link>
              {/* <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium transition">
                  <span>DESTINATIONS</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div> */}
              <Link to="/tourslist" className="text-gray-700 hover:text-primary font-medium transition"> TOURS</Link>
              
             
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium transition">
                  <span>GALLERY</span>
                </button>
              </div>
              {/* <button className="text-gray-700 hover:text-primary transition">
                <Search className="w-5 h-5" />
              </button> */}
            </div>

            {/* Right side buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* <button className="flex items-center space-x-2 text-gray-700 hover:text-primary transition">
                <User className="w-5 h-5" />
                <span className="font-medium">LOGIN/REGISTER</span>
              </button> */}
              <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-[#138a9d] transition font-medium">
                BOOK NOW
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-primary transition"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary font-medium transition"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary font-medium transition"
                >
                  ABOUT US
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary font-medium transition"
                >
                  DESTINATIONS
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary font-medium transition"
                >
                  TOURS
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary font-medium transition"
                >
                  PAGES
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary font-medium transition"
                >
                  BLOG
                </a>
                <button className="flex items-center space-x-2 text-gray-700 hover:text-primary transition">
                  <User className="w-5 h-5" />
                  <span className="font-medium">LOGIN/REGISTER</span>
                </button>
                <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-[#138a9d] transition font-medium">
                  BOOK NOW
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

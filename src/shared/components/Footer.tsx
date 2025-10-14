import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import shape9 from '../../assets/shape9.png'
export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribing email:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About us', href: '#' },
    { name: 'Our Service', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Tour Booking Now', href: '#' }
  ];

  const instagramImages = [
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=300&fit=crop'
  ];

  return (
    <footer className="bg-[#1a3d47] text-white relative mt-10">
      {/* Newsletter Section */}
      <img src={shape9} alt="" />
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Icon and Text */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex-shrink-0">
                <svg viewBox="0 0 64 64" className="w-full h-full text-white">
                  <path
                    d="M52 20c0-2.21-1.79-4-4-4H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V20zm-36 0l16 10 16-10M16 44V24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <ellipse cx="20" cy="32" rx="3" ry="6" fill="currentColor" opacity="0.3" />
                  <ellipse cx="44" cy="32" rx="3" ry="6" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                  Get Updated The Latest
                </h3>
                <h3 className="text-2xl md:text-3xl font-bold">Newsletter</h3>
              </div>
            </div>

            {/* Right - Email Input */}
            <div className="flex gap-4 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="px-6 py-3 rounded-full bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#17a2b8] w-full md:w-80"
              />
              <button
                onClick={handleSubscribe}
                className="bg-[#17a2b8] text-white px-8 py-3 rounded-full hover:bg-[#138a9d] transition font-medium flex items-center gap-2 whitespace-nowrap"
              >
                Subscribe Now
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12">
                <svg viewBox="0 0 48 48" className="w-full h-full text-white">
                  <path
                    d="M24 4L8 14v10c0 10 7 19 16 22 9-3 16-12 16-22V14L24 4z"
                    fill="currentColor"
                  />
                  <path d="M24 10l-10 7v7c0 7 5 13 10 15 5-2 10-8 10-15v-7l-10-7z" fill="#1a3d47" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Tourm</h3>
                <p className="text-sm text-white/70">Explore World</p>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#17a2b8] flex items-center justify-center transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#17a2b8] flex items-center justify-center transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#17a2b8] flex items-center justify-center transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#17a2b8] flex items-center justify-center transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#17a2b8] flex items-center justify-center transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#17a2b8] transition flex items-center gap-2 group"
                  >
                    <span className="text-[#17a2b8]">›</span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/90">+01 234 567 890</p>
                  <p className="text-white/90">+09 876 543 210</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/90">mailinfo00@tourm.com</p>
                  <p className="text-white/90">support24@tourm.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/90">789 Inner Lane, Holy park,</p>
                  <p className="text-white/90">California, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instagram Post */}
          <div>
            <h4 className="text-xl font-bold mb-6">Instagram Post</h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((image, index) => (
                <a
                  key={index}
                  href="#"
                  className="aspect-square rounded-lg overflow-hidden group relative"
                >
                  <img
                    src={image}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#17a2b8]/0 group-hover:bg-[#17a2b8]/30 transition-colors duration-300 flex items-center justify-center">
                    <Instagram className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">
              Copyright 2025 Tourm. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-white/70 text-sm">We Accept</span>
              <div className="flex gap-2">
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-red-600 font-bold text-xs">MC</span>
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">VISA</span>
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">PayPal</span>
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-gray-800 font-bold text-xs">Pay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-[#17a2b8] text-white p-3 rounded-full hover:bg-[#138a9d] transition shadow-lg"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}
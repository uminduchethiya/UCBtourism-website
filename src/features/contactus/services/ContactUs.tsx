import { MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      id: 1,
      icon: MapPin,
      title: 'Office Location',
      details: ['445 Mount Eden Road, Mt', 'Eden Basundhara', 'Chakrapath'],
    },
    {
      id: 2,
      icon: Phone,
      title: 'Phone Number',
      details: ['977-444-666-888', '977-444-222-000'],
    },
    {
      id: 3,
      icon: Mail,
      title: 'Email Address',
      details: ['info@realshield.com', 'help@realshield.com'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">CONTACT US</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <a href="/" className="text-primary transition" style={{ fontFamily: 'cursive' }}>
              Home
            </a>
            <span>|</span>
            <span className="text-secondary">Contact Us</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-50">
          <svg className="w-full h-[150px]" viewBox="0 0 1440 250" preserveAspectRatio="none">
            <path
              d="M0,80L60,120C120,160,240,220,360,220C480,220,600,160,720,140C840,120,960,160,1080,180C1200,200,1320,160,1380,140L1440,120L1440,250L0,250Z"
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </div>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">INFORMATION ABOUT US</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sagittis posuere id nam quis vestibulum vestibulum a facilisi at elit hendrerit scelerisque sodales nam dis
              orci.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map(info => {
              const IconComponent = info.icon;
              return (
                <div
                  key={info.id}
                  className="bg-white p-8 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-100 p-4 rounded-full">
                      <IconComponent className="w-8 h-8 text-[#17a2b8]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map and Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5186071028476!2d72.81481952346908!3d21.16750378700659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59999999ab%3A0x540e88920e944e0!2sMangal%20Bazar!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#17a2b8] focus:ring-1 focus:ring-[#17a2b8]"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#17a2b8] focus:ring-1 focus:ring-[#17a2b8]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#17a2b8] focus:ring-1 focus:ring-[#17a2b8]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#17a2b8] focus:ring-1 focus:ring-[#17a2b8]"
                />
                <textarea
                  name="message"
                  placeholder="Enter a message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#17a2b8] focus:ring-1 focus:ring-[#17a2b8] resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#17a2b8] text-white font-semibold py-3 rounded-lg hover:bg-[#138a9d] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

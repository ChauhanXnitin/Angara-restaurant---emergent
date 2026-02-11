import React, { useState } from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { restaurantInfo } from '../data/mockData';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/reservations`, formData);
      
      if (response.data.success) {
        toast.success("Reservation Request Received!", {
          description: "We'll call you shortly to confirm your booking.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          message: ''
        });
      }
    } catch (error) {
      console.error('Reservation error:', error);
      
      const errorMessage = error.response?.data?.detail || 
                          "Failed to submit reservation. Please call us directly.";
      
      toast.error("Reservation Failed", {
        description: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reserve your table or reach out to us
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#ECEC75] p-3 rounded-lg">
                    <MapPin size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Address</h4>
                    <p className="text-gray-700">{restaurantInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#ECEC75] p-3 rounded-lg">
                    <Phone size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Phone</h4>
                    <a href={`tel:${restaurantInfo.phone}`} className="text-gray-700 hover:text-black transition-colors">
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#ECEC75] p-3 rounded-lg">
                    <Clock size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Hours</h4>
                    <p className="text-gray-700">{restaurantInfo.timings}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#ECEC75] p-3 rounded-lg">
                    <Instagram size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Follow Us</h4>
                    <a 
                      href={restaurantInfo.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      @angaraofficials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-[#e6e67c] p-6 rounded-xl">
              <h4 className="font-semibold text-black mb-4">Location Map</h4>
              <div className="bg-white rounded-lg overflow-hidden h-64">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(restaurantInfo.address)}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Restaurant Location"
                ></iframe>
              </div>
              <a 
                href={restaurantInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-4 inline-block w-full text-center"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-[#ECEC75] p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-black mb-6">Reserve a Table</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-black mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-black mb-2">
                    Time *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-semibold text-black mb-2">
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                >
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Any special requirements or preferences..."
                ></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full text-lg py-4">
                {isSubmitting ? 'Submitting...' : 'Request Reservation'}
              </button>

              <p className="text-sm text-gray-700 text-center">
                We'll call you to confirm your reservation
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

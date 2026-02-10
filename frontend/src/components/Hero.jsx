import React from 'react';
import { Star, Clock, MapPin, IndianRupee } from 'lucide-react';
import { restaurantInfo } from '../data/mockData';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20" style={{ backgroundColor: '#ECEC75' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="fill-yellow-500 text-yellow-500" size={20} />
              <span className="font-semibold text-gray-900">{restaurantInfo.rating} Rating</span>
              <span className="text-gray-600">({restaurantInfo.totalReviews}+ reviews)</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight" style={{ fontFamily: "'Crimson Text', serif" }}>
              {restaurantInfo.name}
              <span className="block text-4xl md:text-6xl mt-2 text-gray-700">{restaurantInfo.nameHindi}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 font-medium">
              {restaurantInfo.tagline}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Experience authentic vegetarian dining with a perfect blend of traditional flavors and modern ambiance. 
              Where every meal is a celebration of pure vegetarian cuisine.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock size={20} />
                  <div>
                    <p className="text-sm font-semibold">Open Now</p>
                    <p className="text-xs">Closes 11:30 PM</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center gap-2 text-gray-700">
                  <IndianRupee size={20} />
                  <div>
                    <p className="text-sm font-semibold">₹200-400</p>
                    <p className="text-xs">Per Person</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={20} />
                  <div>
                    <p className="text-sm font-semibold">Sector 68</p>
                    <p className="text-xs">Gurugram</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => scrollToSection('contact')} className="btn-primary text-lg px-8 py-4">
                Reserve a Table
              </button>
              <button onClick={() => scrollToSection('menu')} className="btn-secondary text-lg px-8 py-4">
                View Menu
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1689079564957-83e3641c7fd8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzcwNzI2MTAyfDA&ixlib=rb-4.1.0&q=85"
                alt="Angara Restaurant Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-sm text-gray-600 mb-2">Special Attributes</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">Pure Veg</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">Family-friendly</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">Women-owned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

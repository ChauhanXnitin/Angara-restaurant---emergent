import React from 'react';
import { Leaf, Users, Heart, Award } from 'lucide-react';
import { whyChooseUs } from '../data/mockData';

const About = () => {
  const icons = {
    0: <Leaf size={32} className="text-black" />,
    1: <Award size={32} className="text-black" />,
    2: <Users size={32} className="text-black" />,
    3: <Heart size={32} className="text-black" />
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Angara */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
            About Angara
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Angara, we believe in the philosophy of pure vegetarian excellence. Our journey began with a simple vision – 
            to create a dining space where families can enjoy authentic, flavorful vegetarian cuisine in a warm and welcoming environment.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            As a women-owned business, we take pride in our commitment to consistent quality, fresh ingredients, and exceptional service. 
            Every dish is crafted with care, bringing together traditional Indian flavors with modern culinary techniques. 
            We're not just a restaurant; we're a celebration of vegetarian food culture.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
            Why Customers Love Us
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What makes Angara special and keeps our customers coming back
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div 
              key={item.id}
              className="bg-[#e6e67c] p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                {icons[index]}
              </div>
              <h4 className="text-xl font-bold text-black mb-3">
                {item.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-20 bg-[#ECEC75] rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
              Our Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <h4 className="text-xl font-bold text-black mb-2">Inclusive</h4>
                <p className="text-gray-700">LGBTQ+ friendly space where everyone is welcome</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-2">Sustainable</h4>
                <p className="text-gray-700">Fresh, locally-sourced ingredients when possible</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-2">Community</h4>
                <p className="text-gray-700">Building connections through great food</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

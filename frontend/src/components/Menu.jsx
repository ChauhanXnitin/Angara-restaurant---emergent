import React, { useState } from 'react';
import { IndianRupee, Star } from 'lucide-react';
import { menuCategories, featuredDishes } from '../data/mockData';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all' 
    ? menuCategories 
    : menuCategories.filter(cat => cat.id === parseInt(selectedCategory));

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Dishes */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
            Menu Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Discover our signature dishes that keep customers coming back
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="font-bold text-lg mb-1">{dish.name}</h4>
                    <p className="text-sm text-gray-200">{dish.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Menu */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-black text-center mb-8" style={{ fontFamily: "'Crimson Text', serif" }}>
            Complete Menu
          </h3>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Items
            </button>
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id.toString())}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id.toString()
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="space-y-12">
            {filteredItems.map((category) => (
              <div key={category.id}>
                <h4 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-[#ECEC75]">
                  {category.name}
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex gap-4"
                    >
                      {item.image && (
                        <div className="flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="text-lg font-bold text-black flex items-center gap-2">
                            {item.name}
                            {item.isSpecial && (
                              <Star size={16} className="fill-yellow-500 text-yellow-500" />
                            )}
                          </h5>
                          <span className="text-lg font-semibold text-black flex items-center">
                            <IndianRupee size={16} />
                            {item.price}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can't decide? Call us for recommendations!</p>
          <a href="tel:+918285555569" className="btn-primary inline-block">
            Call to Order
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;

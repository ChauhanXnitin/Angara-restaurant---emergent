import React from 'react';
import { Star } from 'lucide-react';
import { customerReviews, restaurantInfo } from '../data/mockData';

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-2xl font-bold text-black">{restaurantInfo.rating}</span>
            <span className="text-gray-600">({restaurantInfo.totalReviews}+ reviews)</span>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from our valued customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerReviews.map((review) => (
            <div 
              key={review.id}
              className="bg-[#e6e67c] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-800 mb-4 leading-relaxed">
                "{review.review}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-300">
                <div>
                  <p className="font-semibold text-black">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">Experience the excellence yourself!</p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Reserve Your Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

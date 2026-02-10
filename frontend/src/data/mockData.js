// Mock data for Angara Restaurant

export const restaurantInfo = {
  name: "Angara",
  nameHindi: "अंगारा",
  tagline: "Pure Vegetarian Excellence",
  rating: 4.7,
  totalReviews: 143,
  priceRange: "₹200-400 per person",
  phone: "+91 82855 55569",
  address: "Tulip Chowk, Sector 68, near Rama Krishna Public School, Gurugram, Haryana – 122101",
  timings: "Open | Closes at 11:30 PM",
  instagram: "https://www.instagram.com/angaraofficials/",
  mapUrl: "https://www.google.com/maps?q=Tulip+Chowk+Sector+68+Gurugram",
};

export const services = [
  "Dine-in",
  "Takeaway",
  "No-contact delivery",
  "Online ordering",
  "Table reservation"
];

export const specialAttributes = [
  "Pure Vegetarian",
  "Family-friendly",
  "LGBTQ+ friendly",
  "Women-owned business"
];

export const menuCategories = [
  {
    id: 1,
    name: "Starters",
    items: [
      {
        id: 1,
        name: "Dahi Ke Kebab",
        description: "Creamy hung curd kebabs with aromatic spices",
        price: 189,
        image: "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYXxlbnwwfHx8fDE3NzA3MjYxNDB8MA&ixlib=rb-4.1.0&q=85",
        isSpecial: true
      },
      {
        id: 2,
        name: "Paneer Tikka",
        description: "Grilled cottage cheese marinated in tandoori spices",
        price: 249,
        image: "https://images.unsplash.com/photo-1701579231320-cc2f acad3cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxwYW5lZXIlMjB0aWtrYXxlbnwwfHx8fDE3NzA3MjYxNDB8MA&ixlib=rb-4.1.0&q=85",
        isSpecial: true
      },
      {
        id: 3,
        name: "Tandoori Veg Platter",
        description: "Assorted tandoori vegetables with mint chutney",
        price: 329,
        image: "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2ZWdldGFyaWFuJTIwcGxhdHRlcnxlbnwwfHx8fDE3NzA3MjYxNzV8MA&ixlib=rb-4.1.0&q=85",
        isSpecial: true
      },
      {
        id: 4,
        name: "Hara Bhara Kebab",
        description: "Spinach and peas kebabs with Indian spices",
        price: 179,
        image: "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYXxlbnwwfHx8fDE3NzA3MjYxNDB8MA&ixlib=rb-4.1.0&q=85"
      }
    ]
  },
  {
    id: 2,
    name: "Main Course",
    items: [
      {
        id: 5,
        name: "Dal Makhani",
        description: "Slow-cooked black lentils in rich creamy gravy",
        price: 229,
        image: "https://images.pexels.com/photos/28674557/pexels-photo-28674557.jpeg",
        isSpecial: false
      },
      {
        id: 6,
        name: "Paneer Butter Masala",
        description: "Cottage cheese in smooth tomato-butter gravy",
        price: 269,
        image: "https://images.unsplash.com/photo-1701579231320-cc2f7acad3cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxwYW5lZXIlMjB0aWtrYXxlbnwwfHx8fDE3NzA3MjYxNDB8MA&ixlib=rb-4.1.0&q=85"
      },
      {
        id: 7,
        name: "Mix Veg Curry",
        description: "Seasonal vegetables in traditional spiced gravy",
        price: 199,
        image: "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2ZWdldGFyaWFuJTIwcGxhdHRlcnxlbnwwfHx8fDE3NzA3MjYxNzV8MA&ixlib=rb-4.1.0&q=85"
      },
      {
        id: 8,
        name: "Malai Kofta",
        description: "Cottage cheese dumplings in cashew gravy",
        price: 259,
        image: "https://images.pexels.com/photos/28674555/pexels-photo-28674555.jpeg"
      }
    ]
  },
  {
    id: 3,
    name: "Breads",
    items: [
      {
        id: 9,
        name: "Butter Naan",
        description: "Freshly baked leavened bread with butter",
        price: 49,
        image: "https://images.unsplash.com/photo-1655979284091-eea0e93405ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxuYWFuJTIwYnJlYWR8ZW58MHx8fHwxNzcwNzI2MTU5fDA&ixlib=rb-4.1.0&q=85"
      },
      {
        id: 10,
        name: "Garlic Naan",
        description: "Naan topped with fresh garlic and coriander",
        price: 59,
        image: "https://images.pexels.com/photos/10337726/pexels-photo-10337726.jpeg"
      },
      {
        id: 11,
        name: "Tandoori Roti",
        description: "Whole wheat bread baked in clay oven",
        price: 29,
        image: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWR8ZW58MHx8fHwxNzcwNzI2MTU5fDA&ixlib=rb-4.1.0&q=85"
      },
      {
        id: 12,
        name: "Laccha Paratha",
        description: "Layered whole wheat flatbread",
        price: 49,
        image: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWR8ZW58MHx8fHwxNzcwNzI2MTU5fDA&ixlib=rb-4.1.0&q=85"
      }
    ]
  },
  {
    id: 4,
    name: "Rice & Biryani",
    items: [
      {
        id: 13,
        name: "Veg Biryani",
        description: "Aromatic basmati rice with mixed vegetables",
        price: 249,
        image: "https://images.unsplash.com/photo-1727018953313-403d17215a1b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwaW5kaWFuJTIwZm9vZHxlbnwwfHx8fDE3NzA3MjYxMDd8MA&ixlib=rb-4.1.0&q=85"
      },
      {
        id: 14,
        name: "Jeera Rice",
        description: "Cumin-flavored basmati rice",
        price: 149,
        image: "https://images.unsplash.com/photo-1727018953313-403d17215a1b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwaW5kaWFuJTIwZm9vZHxlbnwwfHx8fDE3NzA3MjYxMDd8MA&ixlib=rb-4.1.0&q=85"
      }
    ]
  },
  {
    id: 5,
    name: "Beverages",
    items: [
      {
        id: 15,
        name: "Fresh Lime Soda",
        description: "Refreshing lime with soda water",
        price: 69,
        image: ""
      },
      {
        id: 16,
        name: "Lassi",
        description: "Traditional yogurt drink",
        price: 89,
        image: ""
      },
      {
        id: 17,
        name: "Masala Chaas",
        description: "Spiced buttermilk",
        price: 59,
        image: ""
      }
    ]
  }
];

export const featuredDishes = [
  {
    id: 1,
    name: "Tandoori Veg Platter",
    description: "Assorted tandoori vegetables with mint chutney",
    image: "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2ZWdldGFyaWFuJTIwcGxhdHRlcnxlbnwwfHx8fDE3NzA3MjYxNzV8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 2,
    name: "Dahi Ke Kebab",
    description: "Creamy hung curd kebabs with aromatic spices",
    image: "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYXxlbnwwfHx8fDE3NzA3MjYxNDB8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 3,
    name: "Paneer Specialties",
    description: "From Paneer Tikka to Paneer Butter Masala",
    image: "https://images.unsplash.com/photo-1701579231320-cc2f7acad3cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxwYW5lZXIlMjB0aWtrYXxlbnwwfHx8fDE3NzA3MjYxNDB8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 4,
    name: "Freshly Baked Naan",
    description: "Butter, Garlic, and traditional varieties",
    image: "https://images.pexels.com/photos/10337726/pexels-photo-10337726.jpeg"
  }
];

export const whyChooseUs = [
  {
    id: 1,
    title: "100% Pure Vegetarian",
    description: "Authentic vegetarian menu with no compromise on taste or quality"
  },
  {
    id: 2,
    title: "Fresh & Consistent Quality",
    description: "Every dish prepared with fresh ingredients and consistent taste"
  },
  {
    id: 3,
    title: "Friendly Staff & Service",
    description: "Warm hospitality and excellent service for memorable dining"
  },
  {
    id: 4,
    title: "Cozy Family Ambiance",
    description: "Comfortable and welcoming atmosphere perfect for families"
  }
];

export const customerReviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    review: "Paradise for vegetarians! The food quality is outstanding and the ambiance is perfect for family dinners.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    rating: 5,
    review: "Excellent food and service. The Paneer Tikka and Dal Makhani are must-try items. Highly recommended!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Anjali Mehta",
    rating: 5,
    review: "Highly recommended family restaurant. Great taste, good service, and reasonable prices. Will definitely visit again!",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Vikram Singh",
    rating: 4,
    review: "Lovely ambiance and delicious food. The staff is very friendly and attentive. Perfect place for celebrations!",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Neha Gupta",
    rating: 5,
    review: "Best vegetarian restaurant in Gurugram! The Dahi Ke Kebab is absolutely divine. Love the warm atmosphere.",
    date: "2 months ago"
  },
  {
    id: 6,
    name: "Amit Patel",
    rating: 4,
    review: "Consistent quality and taste. We're regular customers and never been disappointed. Great for family outings!",
    date: "1 month ago"
  }
];

export const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1689079564957-83e3641c7fd8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzcwNzI2MTAyfDA&ixlib=rb-4.1.0&q=85",
    alt: "Elegant restaurant interior",
    category: "ambiance"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1727018953313-403d17215a1b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwaW5kaWFuJTIwZm9vZHxlbnwwfHx8fDE3NzA3MjYxMDd8MA&ixlib=rb-4.1.0&q=85",
    alt: "Traditional Indian thali",
    category: "food"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/10148453/pexels-photo-10148453.jpeg",
    alt: "Cozy dining area",
    category: "ambiance"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2ZWdldGFyaWFuJTIwcGxhdHRlcnxlbnwwfHx8fDE3NzA3MjYxNzV8MA&ixlib=rb-4.1.0&q=85",
    alt: "Vegetarian platter",
    category: "food"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1592861956120-e524fc739696?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nfGVufDB8fHx8MTc3MDcyNjE4Mnww&ixlib=rb-4.1.0&q=85",
    alt: "Family dining experience",
    category: "dining"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1616538994032-f7619b8bebb5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHw0fHxyZXN0YXVyYW50JTIwZGluaW5nfGVufDB8fHx8MTc3MDcyNjE4Mnww&ixlib=rb-4.1.0&q=85",
    alt: "Restaurant interior",
    category: "ambiance"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/28674557/pexels-photo-28674557.jpeg",
    alt: "Dal Makhani",
    category: "food"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg",
    alt: "Dining seating area",
    category: "ambiance"
  }
];

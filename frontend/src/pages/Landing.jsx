import { useEffect, useState } from 'react';
import { ShoppingBag, ChevronDown, Star, Heart, Zap, Award } from 'lucide-react';

export default function HomePage() {
  const [animate, setAnimate] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const sweets = [
    {
      id: 1,
      name: 'Gulab Jamun',
      price: '$8.99',
      image: 'https://images.pexels.com/photos/1645728/pexels-photo-1645728.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      category: 'Traditional'
    },
    {
      id: 2,
      name: 'Jalebi',
      price: '$6.99',
      image: 'https://images.pexels.com/photos/3049974/pexels-photo-3049974.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      category: 'Traditional'
    },
    {
      id: 3,
      name: 'Rasgulla',
      price: '$7.99',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 5.0,
      category: 'Premium'
    },
    {
      id: 4,
      name: 'Kaju Katli',
      price: '$12.99',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      category: 'Premium'
    },
    {
      id: 5,
      name: 'Barfi',
      price: '$9.99',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      category: 'Traditional'
    },
    {
      id: 6,
      name: 'Laddu',
      price: '$10.99',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 5.0,
      category: 'Premium'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 overflow-hidden">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-rose-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Sweetify</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#sweets" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">Our Sweets</a>
            <a href="#features" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">Features</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">Contact</a>
            <button className="bg-gradient-to-r from-rose-500 to-orange-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-rose-200 transition-all transform hover:scale-105 font-medium">
              Order Now
            </button>
          </div>
          <button className="md:hidden bg-gradient-to-r from-rose-500 to-orange-500 text-white p-2.5 rounded-lg">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div
            className={`inline-block mb-6 transition-all duration-700 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="bg-gradient-to-r from-rose-100 to-orange-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
              Discover Authentic Indian Sweets
            </span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl md:text-7xl font-black leading-tight transition-all duration-700 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
              Indulge in
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
              Sweetness & Joy
            </span>
          </h1>

          <p
            className={`mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed transition-all duration-1000 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Experience the authentic taste of handcrafted Indian sweets. Made with love, tradition, and the finest ingredients.
          </p>

          <div
            className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <button className="bg-gradient-to-r from-rose-500 to-orange-500 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-rose-300 transition-all transform hover:scale-105 font-semibold text-lg">
              Explore Now
            </button>
            <button className="border-2 border-rose-500 text-rose-600 px-8 py-4 rounded-full hover:bg-rose-50 transition-all font-semibold text-lg">
              View Menu
            </button>
          </div>

          <div className="mt-12 flex justify-center gap-8 flex-wrap">
            {[
              { icon: Zap, label: 'Fast Delivery' },
              { icon: Award, label: 'Premium Quality' },
              { icon: Star, label: '5-Star Rated' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
                <item.icon className="w-5 h-5 text-rose-500" />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 text-rose-500" />
        </div>
      </section>

      <section id="sweets" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-600 font-bold text-sm tracking-wider uppercase">Our Collection</span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-3">Delicious Indian Sweets</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Each sweet crafted with tradition, passion, and premium ingredients
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sweets.map((sweet) => (
              <div
                key={sweet.id}
                className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={sweet.image}
                    alt={sweet.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleFavorite(sweet.id)}
                    className="absolute top-4 right-4 bg-white w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform backdrop-blur-sm"
                  >
                    <Heart
                      className={`w-6 h-6 transition-colors ${
                        favorites.includes(sweet.id) ? 'fill-rose-500 text-rose-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold">
                    {sweet.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{sweet.name}</h3>
                    <div className="flex items-center gap-1 bg-amber-100 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span className="text-sm font-bold text-amber-700">{sweet.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-3xl font-black bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                      {sweet.price}
                    </span>
                    <button className="bg-gradient-to-r from-rose-500 to-orange-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-rose-300 transition-all transform hover:scale-105 font-semibold shadow-md">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <button className="border-2 border-rose-500 text-rose-600 px-10 py-3.5 rounded-full hover:bg-rose-50 transition-all font-bold text-lg">
              View All Sweets →
            </button>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-600 font-bold text-sm tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-3">Premium Experience</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShoppingBag, title: 'Easy Shopping', desc: 'Browse and order sweets with one click' },
              { icon: Zap, title: 'Fast Delivery', desc: 'Fresh sweets delivered to your doorstep' },
              { icon: Award, title: 'Quality Assured', desc: 'Premium ingredients & authentic recipes' },
              { icon: Star, title: 'Best Prices', desc: 'Unbeatable prices with regular discounts' },
              { icon: Heart, title: 'Customer Care', desc: '24/7 support for all your needs' },
              { icon: ShoppingBag, title: 'Custom Orders', desc: 'Order sweets for special occasions' }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-rose-100 to-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl sm:text-5xl font-black text-white">Get in Touch</h2>
              <p className="mt-4 text-lg text-white/90">Have questions? We're here to help!</p>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white outline-none font-medium"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white outline-none font-medium"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white outline-none font-medium resize-none"
              ></textarea>
              <button className="w-full bg-white text-rose-600 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShoppingBag className="w-6 h-6 text-rose-500" />
                <span className="text-xl font-bold">Sweetify</span>
              </div>
              <p className="text-gray-400">Authentic Indian sweets delivered with love.</p>
            </div>
            {[
              { title: 'Quick Links', items: ['Home', 'Products', 'About', 'Contact'] },
              { title: 'Information', items: ['Shipping', 'Returns', 'Privacy', 'Terms'] },
              { title: 'Contact', items: ['+1 (555) 123-4567', 'hello@sweetify.com', '9AM - 8PM', 'Mon-Sat'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-lg mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.items.map((item, i) => (
                    <li key={i} className="text-gray-400 hover:text-rose-500 transition-colors cursor-pointer">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sweetify. All rights reserved. Made with love and sugar.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

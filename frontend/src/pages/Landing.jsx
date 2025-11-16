import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router-dom for navigation
import { HeartHandshake, Utensils, Star, Cookie, Candy, Cake } from 'lucide-react'; // Icons for various sections

// Placeholder for a reusable Button component if you have one, or define it inline
const CustomButton = ({ children, to, primary = true, className = "", ...props }) => {
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.85rem 2.25rem",
    borderRadius: "0.75rem", // More rounded for sweetness
    fontSize: "1.1rem",
    fontWeight: 600,
    textDecoration: "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    border: "none",
    cursor: "pointer",
  };

  const primaryStyle = {
    background: "linear-gradient(135deg, hsl(330 80% 60%) 0%, hsl(30 90% 65%) 100%)", // Sweet and warm gradient
    color: "white",
    boxShadow: "0 8px 25px -6px hsl(340 80% 60% / 0.4)",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 12px 30px -8px hsl(340 80% 60% / 0.5)",
    }
  };

  const secondaryStyle = {
    background: "white",
    color: "hsl(330 80% 40%)",
    border: "1px solid hsl(330 80% 75%)",
    boxShadow: "0 4px 15px -4px hsl(330 80% 70% / 0.2)",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 20px -6px hsl(330 80% 70% / 0.3)",
    }
  };

  // Merge base styles with primary/secondary and custom styles
  const buttonStyle = primary ? { ...baseStyle, ...primaryStyle } : { ...baseStyle, ...secondaryStyle };

  if (to) {
    return (
      <Link to={to} className={className} style={buttonStyle} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} style={buttonStyle} {...props}>
      {children}
    </button>
  );
};


export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 font-sans text-gray-800">
    
      {/* Featured Products/Categories Section */}
      <section className="py-20 px-8 text-center bg-white">
        <h2 className="text-4xl font-bold text-orange-600 mb-12">Our Most Loved Creations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Featured Item 1 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <Cake className="w-16 h-16 text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Artisan Cakes</h3>
            <p className="text-gray-600 mb-4">Celebration cakes, custom designs, and daily fresh slices.</p>
            <Link to="/category/cakes" className="text-orange-500 hover:text-orange-700 font-medium">View Cakes &rarr;</Link>
          </div>
          {/* Featured Item 2 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <Cookie className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Gourmet Cookies</h3>
            <p className="text-gray-600 mb-4">Classic cookies, macarons, and unique seasonal delights.</p>
            <Link to="/category/cookies" className="text-orange-500 hover:text-orange-700 font-medium">View Cookies &rarr;</Link>
          </div>
          {/* Featured Item 3 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <Candy className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Handmade Candies</h3>
            <p className="text-gray-600 mb-4">Rich chocolates, delightful caramels, and nostalgic treats.</p>
            <Link to="/category/candies" className="text-orange-500 hover:text-orange-700 font-medium">View Candies &rarr;</Link>
          </div>
        </div>
      </section>

      {/* About Us / Our Philosophy Section */}
      <section className="py-20 px-8 bg-pink-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1582234383173-9828d844062d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Image of baking/sweet making
              alt="Crafting sweets"
              className="rounded-3xl shadow-xl border border-pink-100"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-pink-700 mb-6">Our Passion for Perfection</h2>
            <p className="text-lg text-gray-700 mb-4">
              At **Sweet Shop Name**, we believe that every sweet should tell a story. Handcrafted with the finest ingredients and a sprinkle of magic, our treats are designed to bring joy to every occasion.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              From traditional recipes passed down through generations to innovative modern delights, we pour our heart into every creation. Taste the difference that passion makes.
            </p>
            <CustomButton to="/about" primary>
              <Utensils className="w-5 h-5 mr-2" /> Learn More
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8 text-center bg-white">
        <h2 className="text-4xl font-bold text-orange-600 mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg border border-yellow-100">
            <Star className="w-6 h-6 text-yellow-500 mx-auto mb-4" />
            <p className="text-gray-700 italic mb-4">
              "Absolutely divine\! Every pastry is a work of art. The best sweet shop I've ever found."
            </p>
            <p className="font-semibold text-gray-800">- Priya Sharma</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg border border-pink-100">
            <Star className="w-6 h-6 text-yellow-500 mx-auto mb-4" />
            <p className="text-gray-700 italic mb-4">
              "Their custom cakes are out of this world. My daughter's birthday cake was the highlight of the party."
            </p>
            <p className="font-semibold text-gray-800">- Rahul Verma</p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg border border-orange-100">
            <Star className="w-6 h-6 text-yellow-500 mx-auto mb-4" />
            <p className="text-gray-700 italic mb-4">
              "A hidden gem\! The chocolates melt in your mouth, and the service is always so warm and friendly."
            </p>
            <p className="font-semibold text-gray-800">- Sneha Kapoor</p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-8 text-center">
        <p className="mb-4 text-lg font-semibold">Sweet Shop Name</p>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-6">
          <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
        </div>
      </footer>

      {/* Tailwind CSS animation classes (ensure these are in your global CSS) */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
}
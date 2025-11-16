import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Candy, LogIn, UserPlus, LayoutDashboard, Menu, X, LogOut, Home, ShoppingCart, Info } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  
  // 🔑 Check authentication state by looking for the token in localStorage
  // This state will force a re-render when the user logs in/out
  const [isLoggedIn, setIsLoggedIn] = React.useState(!!localStorage.getItem("token"));
  
  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    setIsLoggedIn(false); // Update local state
    setIsOpen(false); // Close mobile menu if open
    navigate("/"); // Redirect to home page
  };

  // Define navigation items
  const navItems = [
    { name: "Home", path: "/", icon: Home },
  ];
  
  // Dynamic links shown only when logged in
  const loggedInItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  ];

  // A simple style utility for the elegant hover/active state
  const navLinkClass = "text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 py-2 md:py-0";
  const authButtonClass = "px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";

  // Define primary button style based on the landing page gradient
  const primaryButtonStyle = {
    background: "linear-gradient(135deg, hsl(330 80% 60%) 0%, hsl(30 90% 65%) 100%)",
    color: "white",
    boxShadow: "0 4px 15px -4px hsl(340 80% 60% / 0.4)",
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-pink-600">
            <Candy className="w-8 h-8 text-orange-500" />
            <span>Sweet Shop</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            
            {/* Standard Nav Items */}
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className={navLinkClass}>
                {item.name}
              </Link>
            ))}

            {/* Conditional Nav Items (Dashboard) */}
            {isLoggedIn && loggedInItems.map((item) => (
              <Link key={item.name} to={item.path} className={navLinkClass}>
                {item.name}
              </Link>
            ))}

            {/* --- Conditional Authentication Buttons --- */}
            <div className="flex items-center space-x-4 ml-8">
              {isLoggedIn ? (
                // 🚪 Logged In State: Show Logout Button
                <button
                  onClick={handleLogout}
                  className={authButtonClass}
                  style={primaryButtonStyle}
                >
                  <LogOut className="w-4 h-4 mr-1 inline-block" /> Logout
                </button>
              ) : (
                // 🧑‍💻 Logged Out State: Show Login and Register
                <>
                  <Link 
                    to="/login" 
                    className={`${authButtonClass} bg-gray-100 text-pink-600 hover:bg-pink-50`}
                  >
                    <LogIn className="w-4 h-4 mr-1 inline-block" /> Login
                  </Link>

                  <Link 
                    to="/register" 
                    className={authButtonClass}
                    style={primaryButtonStyle}
                  >
                    <UserPlus className="w-4 h-4 mr-1 inline-block" /> Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        } bg-white border-t border-gray-100`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-start">
          {/* Main Nav Items */}
          {[...navItems, ...(isLoggedIn ? loggedInItems : [])].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setIsOpen(false)}
              className={`${navLinkClass} w-full text-left px-3 py-2 rounded-md hover:bg-pink-50 flex items-center`}
            >
              <item.icon className="w-4 h-4 mr-2" /> {item.name}
            </Link>
          ))}
          
          <hr className="w-full my-2 border-gray-200" />

          {/* Mobile Auth Links */}
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className={`w-full text-left px-3 py-2 rounded-md text-white font-semibold flex items-center`}
              style={primaryButtonStyle}
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </button>
          ) : (
            <>
              <Link 
                to="/login" 
                onClick={() => setIsOpen(false)}
                className={`w-full text-left px-3 py-2 rounded-md hover:bg-pink-50 text-pink-600 font-semibold flex items-center`}
              >
                <LogIn className="w-4 h-4 mr-2" /> Login
              </Link>
              <Link 
                to="/register" 
                onClick={() => setIsOpen(false)}
                className={`w-full text-left px-3 py-2 rounded-md text-white font-semibold flex items-center`}
                style={primaryButtonStyle}
              >
                <UserPlus className="w-4 h-4 mr-2" /> Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
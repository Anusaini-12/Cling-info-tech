import { useState } from 'react';
import logo from "../../assets/logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo with resized dimensions */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src={logo} 
              alt="Cling Infotech Logo" 
              className="h-9 sm:h-10 w-auto object-contain" 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a href="#" className="text-red-600 border-b-2 border-red-600 pb-1">Home</a>
          <a href="#" className="hover:text-red-600 transition-colors pb-1">About Us</a>
          <a href="#" className="hover:text-red-600 transition-colors pb-1">Services</a>
          <a href="#" className="hover:text-red-600 transition-colors pb-1">Solutions</a>
          <a href="#" className="hover:text-red-600 transition-colors pb-1">Resources</a>
          <a href="#" className="hover:text-red-600 transition-colors pb-1">Client</a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="px-5 py-2.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md hover:shadow-red-600/20 transition-all"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-700 hover:text-red-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 pt-2 pb-6 space-y-3">
          <a href="#" className="block text-red-600 font-semibold py-2">Home</a>
          <a href="#" className="block text-slate-700 hover:text-red-600 py-2">About Us</a>
          <a href="#" className="block text-slate-700 hover:text-red-600 py-2">Services</a>
          <a href="#" className="block text-slate-700 hover:text-red-600 py-2">We Fast</a>
          <a href="#" className="block text-slate-700 hover:text-red-600 py-2">Contact Us</a>
          <a href="#" className="block text-slate-700 hover:text-red-600 py-2">Blog</a>
          <a href="#contact" className="block text-center w-full mt-4 px-5 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-lg">
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
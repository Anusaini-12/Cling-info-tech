import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../../assets/logo.png";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "3D Videos", href: "#" },
    { name: "AI/ML", href: "#" },
    { name: "Services", href: "#" },
    { name: "Clients", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Achievements", href: "#" },
    { name: "Team", href: "#" },
    { name: "Career", href: "#" },
    { name: "Sitemap", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cancellation & Refund Policy", href: "#" },
    { name: "Terms and Conditions", href: "#" },
  ];

  const servicesLinks = [
    "App Development",
    "Website Designing",
    "Web Design",
    "Digital Marketing",
    "Social Media Marketing",
    "IT Team for Entrepreneurship",
    "Career Counselling",
    "ERPs",
  ];

  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Top Bar: Brand Logo & Social Media */}
        <div className="flex flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-800 gap-6">
          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center bg-white/95 px-4 py-2 rounded-sm shadow-md border border-white/20"
            >
              <img
                src={logo}
                alt="Cling Infotech Logo"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Social Icons with high-contrast visible background */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-sm bg-white text-slate-900 hover:text-white hover:bg-red-600 flex items-center justify-center transition-all duration-300 shadow-md"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-sm bg-white text-slate-900 hover:text-white hover:bg-red-600 flex items-center justify-center transition-all duration-300 shadow-md"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main Footer Grid (3 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-6">
          {/* Column 1: Addresses & Contact Info (Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h4 className="text-white font-bold text-base md:text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Cling Info Tech Works Private Limited
              </h4>

              <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                Head Office Noida
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                130, 131, 132, 2nd Floor, Wave Galleria, Wave City, NH-24,
                Noida, Uttar Pradesh – 201015
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-base mb-2">
                Pune Office Address
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                2nd Floor, Raj Square, Pashan – Sus Rd, near Abhinav kala
                college, opposite Reliance Fresh, Sutarwadi, Pashan, Pune,
                Maharashtra – 411021
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-base mb-2">
                Moradabad Office Address
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                2/652, Avas Vikas, Buddhi Vihar, Moradabad, UP – 244001
              </p>
            </div>

            {/* Quick Contact Badges */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-red-500/15 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Maharashtra, Uttar Pradesh</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-red-500/15 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+918264469132"
                  className="hover:text-red-400 transition-colors"
                >
                  +91 8264469132
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-red-500/15 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:info@clinginfotech.com"
                  className="hover:text-red-400 transition-colors"
                >
                  info@clinginfotech.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <span className="text-red-500 text-xs">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Span 4) */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Services
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {servicesLinks.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <span className="text-red-500 text-xs">›</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>Copyright © Cling Infotech All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

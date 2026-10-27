import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-2xl transition-all duration-300 ease-in-out ${
      isActive
        ? "text-emerald-700 bg-emerald-50 shadow-sm border border-emerald-200/80 font-bold scale-[1.03]"
        : "text-slate-600 hover:text-emerald-600 hover:bg-slate-50"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
      isActive
        ? "text-emerald-700 bg-emerald-50 border-l-4 border-emerald-600 shadow-sm font-bold pl-5"
        : "text-slate-700 hover:bg-slate-100/80 hover:text-emerald-600"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm backdrop-blur-md bg-white/95 border-b border-slate-100">
      
      {/* Top Announcement Bar - Nimero za Telefoni */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-3">
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="animate-pulse">📍</span> Kigali, Nyarugenge
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-slate-400 font-medium flex items-center gap-1 mr-1">📞 Hamagara:</span>
              
              <a href="tel:+250788803391" className="bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white px-2.5 py-1 rounded-md text-xs font-semibold transition-all shadow-sm border border-slate-700">
                +250 788 803 391
              </a>
              <span className="text-slate-600">|</span>
              <a href="tel:+250788653743" className="bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white px-2.5 py-1 rounded-md text-xs font-semibold transition-all shadow-sm border border-slate-700">
                +250 788 653 743
              </a>
              <span className="text-slate-600">|</span>
              <a href="tel:+250785171995" className="bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white px-2.5 py-1 rounded-md text-xs font-semibold transition-all shadow-sm border border-slate-700">
                0785 171 995
              </a>
              <span className="text-slate-600">|</span>
              <a href="tel:+250788666750" className="bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white px-2.5 py-1 rounded-md text-xs font-semibold transition-all shadow-sm border border-slate-700">
                0788 666 750
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-emerald-300 font-semibold bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-500/20">
            <span>✨ Tout y est Ltd — Quincaillerie Général</span>
          </div>

        </div>
      </div>

      {/* Main Navigation - Yaguye ikaba h-24 ngo ifate Logo nini neza */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Section - Yongerewe kuba NINI cyane kandi igaragara neza */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white rounded-2xl overflow-hidden shadow-lg shadow-emerald-600/20 group-hover:scale-105 transition-all duration-300 border-2 border-emerald-500/50 p-1">
              <img 
                src="/bb.jpeg" 
                alt="Tout y est Ltd Logo" 
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                Tout y est <span className="text-emerald-600">Ltd</span>
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 font-extrabold">
                Hardware & Building Solutions
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center relative w-64 xl:w-72">
            <input
              type="text"
              placeholder="Shakisha ibikoresho..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 text-slate-800 text-sm pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white transition-all shadow-inner"
            />
            <span className="absolute left-3.5 text-slate-400 text-xs">🔍</span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <li>
              <NavLink to="/" className={linkClass}>
                <span className="text-base">🏠</span>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={linkClass}>
                <span className="text-base">📦</span>
                <span>Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass}>
                <span className="text-base">🏢</span>
                <span>About Us</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass}>
                <span className="text-base">📞</span>
                <span>Contact</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/help" className={linkClass}>
                <span className="text-base">💬</span>
                <span>Help</span>
              </NavLink>
            </li>
          </ul>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/products"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-sm font-bold px-5 py-2.5 rounded-2xl shadow-md shadow-emerald-600/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Catalogue 🛒
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-slate-700 hover:text-emerald-600 focus:outline-none p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-slate-100 shadow-xl px-5 pt-4 pb-6 transition-all duration-300">
          
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Shakisha ibikoresho..."
              className="w-full bg-slate-100 text-slate-800 text-sm pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            />
            <span className="absolute left-3 top-3 text-slate-400 text-xs">🔍</span>
          </div>

          <ul className="flex flex-col space-y-1.5">
            <li>
              <NavLink to="/" onClick={() => setOpen(false)} className={mobileLinkClass}>
                <span className="text-lg">🏠</span>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={() => setOpen(false)} className={mobileLinkClass}>
                <span className="text-lg">📦</span>
                <span>Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setOpen(false)} className={mobileLinkClass}>
                <span className="text-lg">🏢</span>
                <span>About Us</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setOpen(false)} className={mobileLinkClass}>
                <span className="text-lg">📞</span>
                <span>Contact</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/help" onClick={() => setOpen(false)} className={mobileLinkClass}>
                <span className="text-lg">💬</span>
                <span>Help</span>
              </NavLink>
            </li>
            <li className="pt-3">
              <Link
                to="/products"
                onClick={() => setOpen(false)}
                className="block text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3 rounded-xl shadow-md"
              >
                Reba Catalogue 🛒
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
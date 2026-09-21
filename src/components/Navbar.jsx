import { NavLink } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-bold transition-colors"
      : "hover:text-yellow-400 font-bold transition-colors";

  return (
    <nav className="sticky top-0 z-50 bg-indigo-950/90 backdrop-blur-md border-b-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-xl md:text-2xl font-black text-yellow-400 flex items-center gap-3 transform -rotate-1 hover:rotate-0 transition-transform">
          <div className="p-2 bg-pink-500 rounded-xl border-2 border-white text-indigo-950 shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
            <Sparkles className="w-6 h-6 stroke-[3]" />
          </div>
          <span className="font-heading tracking-tight">SEAN COLE<span className="text-pink-500">VO!</span></span>
        </NavLink>
        
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/demos" className={linkClass}>Character Demos</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/studio" className={linkClass}>Studio Specs</NavLink>
          <NavLink to="/resume" className={linkClass}>Resume</NavLink>
          <NavLink to="/contact" className="bg-yellow-400 hover:bg-yellow-300 text-indigo-950 font-black px-5 py-2.5 rounded-xl border-2 border-indigo-950 shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            CONTACT ME!
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
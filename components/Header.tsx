
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-white">Job Switch Plan</h1>
        <div className="space-x-4 md:space-x-6">
          <a href="#schedule" className="text-slate-300 hover:text-white font-medium transition-colors">Schedule</a>
          <a href="#plan" className="text-slate-300 hover:text-white font-medium transition-colors">The Plan</a>
          <a href="#tips" className="text-slate-300 hover:text-white font-medium transition-colors">Tips</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

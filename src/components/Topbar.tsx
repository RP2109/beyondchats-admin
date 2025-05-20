"use client";

import ThemeToggle from "./ThemeToggle";

interface TopbarProps {
  setSidebarOpen: (open: boolean) => void;
}

const Topbar = ({ setSidebarOpen }: TopbarProps) => {
  return (
    <header className="h-16 bg-white shadow-md flex items-center justify-between px-6 md:ml-64 fixed top-0 left-0 right-0 z-10">
      {/* Hamburger icon for mobile */}
      <div className="md:hidden">
        <button onClick={() => setSidebarOpen(true)}>
          <span className="material-icons text-3xl">menu</span>
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded px-4 py-1 w-1/2 hidden md:block"
      />

      {/* Right icons */}
      <div className="flex items-center gap-4">
        <span className="material-icons text-gray-600 cursor-pointer">notifications</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
      <div className="flex items-center gap-4">
  <span className="material-icons text-gray-600 cursor-pointer">notifications</span>
  <ThemeToggle />
  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
</div>

    </header>
  );
};

export default Topbar;


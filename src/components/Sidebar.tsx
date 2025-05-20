"use client";

import { AnimatePresence, motion } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-64 h-screen bg-white shadow-md p-4 hidden md:block fixed top-0 left-0 z-10">
        <h2 className="text-lg font-bold mb-6">BeyondChats</h2>
        <ul className="space-y-4">
          <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-600 cursor-pointer">Messages</li>
          <li className="hover:text-blue-600 cursor-pointer">Contacts</li>
          <li className="hover:text-blue-600 cursor-pointer">Settings</li>
        </ul>
      </aside>

      {/* Mobile Sidebar with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-40 z-20"
            onClick={() => setIsOpen(false)}
          >
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="w-64 bg-white h-full shadow-lg p-4 absolute left-0 top-0 z-30"
              onClick={(e) => e.stopPropagation()} // Prevent closing on inside click
            >
              <h2 className="text-lg font-bold mb-6">BeyondChats</h2>
              <ul className="space-y-4">
                <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
                <li className="hover:text-blue-600 cursor-pointer">Messages</li>
                <li className="hover:text-blue-600 cursor-pointer">Contacts</li>
                <li className="hover:text-blue-600 cursor-pointer">Settings</li>
              </ul>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;

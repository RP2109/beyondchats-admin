"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="md:ml-64">
        <Topbar setSidebarOpen={setSidebarOpen} />
        <main className="p-6 mt-16 bg-gray-100 min-h-screen">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

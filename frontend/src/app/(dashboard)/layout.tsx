"use client";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-900 text-slate-200">
      <Sidebar collapsed={collapsed} toggle={() => setCollapsed(!collapsed)} />

      <main
        className={`flex-1 p-6 overflow-auto transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-64"
        }`}
      >
        {children}
      </main>
    </div>
  );
}

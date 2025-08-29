"use client";
import React from "react";
import {
  CalendarIcon,
  HomeIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  TableCellsIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

type NavItemProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  active?: boolean;
  collapsed?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ Icon, label, active = false, collapsed }) => (
  <a
    className={`flex items-center gap-3 px-3 py-2 rounded-xl transition ${
      active ? "bg-slate-700/60 text-white" : "text-slate-300 hover:bg-slate-700/20"
    }`}
    href="#"
  >
    <Icon className="w-5 h-5" />
    {!collapsed && <span className="text-sm font-medium">{label}</span>}
  </a>
);

interface SidebarProps {
  collapsed: boolean;
  toggle: () => void;
}

export default function Sidebar({ collapsed, toggle }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-[#061024] text-slate-200 p-6 flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
            NA
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-semibold">NextAdmin</h1>
              <p className="text-xs text-slate-400">Next.js Admin</p>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggle}
          className="p-1 rounded-full hover:bg-slate-700/40"
        >
          {collapsed ? (
            <ChevronRightIcon className="w-5 h-5 text-slate-300" />
          ) : (
            <ChevronLeftIcon className="w-5 h-5 text-slate-300" />
          )}
        </button>
      </div>

      {/* Menu */}
      {!collapsed && <div className="mb-4 text-xs uppercase text-slate-400">Main Menu</div>}
      <nav className="flex-1 space-y-1">
        <NavItem Icon={HomeIcon} label="Home" active collapsed={collapsed} />
        <NavItem Icon={CalendarIcon} label="All Users" collapsed={collapsed} />
        <NavItem Icon={UserIcon} label="All Books" collapsed={collapsed} />
        <NavItem Icon={ClipboardDocumentListIcon} label="Borrow Request" collapsed={collapsed} />
        <NavItem Icon={TableCellsIcon} label="Account Request" collapsed={collapsed} />
      </nav>

      {/* Footer */}
      <div className="mt-auto text-xs text-slate-500">
        {!collapsed && <div className="mb-1">Support</div>}
        <a href="#" className="text-slate-300 hover:underline">
          {collapsed ? "?" : "Help center"}
        </a>
      </div>
    </aside>
  );
}

import React from "react";
import {
  CalendarIcon,
  HomeIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";

// Define props type for NavItem
type NavItemProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  active?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ Icon, label, active = false }) => (
  <a
    className={`flex items-center gap-3 px-3 py-2 rounded-xl transition ${
      active ? "bg-slate-700/60 text-white" : "text-slate-300 hover:bg-slate-700/20"
    }`}
    href="#"
  >
    <Icon className="w-5 h-5" />
    <span className="text-sm font-medium">{label}</span>
  </a>
);

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#061024] text-slate-200 p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">NA</div>
        <div>
          <h1 className="text-lg font-semibold">NextAdmin</h1>
          <p className="text-xs text-slate-400">Next.js Admin</p>
        </div>
      </div>

      <div className="mb-4 text-xs uppercase text-slate-400">Main Menu</div>
      <nav className="flex-1 space-y-1">
        <NavItem Icon={HomeIcon} label="Dashboard" active />
        <NavItem Icon={CalendarIcon} label="Calendar" />
        <NavItem Icon={UserIcon} label="Profile" />
        <NavItem Icon={ClipboardDocumentListIcon} label="Tasks" />
        <NavItem Icon={TableCellsIcon} label="Tables" />
      </nav>

      <div className="mt-auto text-xs text-slate-500">
        <div className="mb-1">Support</div>
        <a href="#" className="text-slate-300 hover:underline">Help center</a>
      </div>
    </aside>
  );
}

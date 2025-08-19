import React from "react";
import { MagnifyingGlassIcon, MoonIcon, SunIcon, BellIcon } from "@heroicons/react/24/outline";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between gap-4 py-4 px-2">
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            className="pl-10 pr-4 py-2 rounded-full bg-slate-800/40 placeholder-slate-400 text-slate-100 outline-none w-72"
            placeholder="Search"
          />
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-slate-400" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* simple theme icons (not wired) */}
        <button className="p-2 rounded-full bg-slate-800/30"><MoonIcon className="w-5 h-5" /></button>
        <button className="p-2 rounded-full bg-slate-800/30"><SunIcon className="w-5 h-5" /></button>

        <button className="relative p-2 rounded-full bg-slate-800/30">
          <BellIcon className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 w-2.5 h-2.5 rounded-full" />
        </button>

        <div className="flex items-center gap-3 bg-slate-800/30 px-3 py-1 rounded-full">
          <img src="/avatar.png" alt="avatar" className="w-8 h-8 rounded-full object-cover" />
          <div className="text-sm">
            <div className="font-medium">John Smith</div>
            <div className="text-xs text-slate-400">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}

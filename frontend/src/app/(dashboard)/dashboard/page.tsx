"use client";

import ChartCard from "@/components/ChartCard";
import Topbar from "@/components/TopBar";

type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
  delta: string;
  deltaClass?: string; // <-- make it optional
};

export default function StatCard({ icon, value, label, delta, deltaClass, }: StatCardProps) {
  return (
    <div className="bg-slate-800/50 rounded-2xl p-5 shadow-lg">
      <Topbar />
     
      <div className={`mt-3 text-sm ${deltaClass ?? "text-green-400"}`}>
        {delta}
      </div>
       <div className="flex items-start justify-between gap-4">
        <ChartCard title="Payments Overview" />
      </div>
    </div>
    
  );
}

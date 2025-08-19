"use client";

import ChartCard from "@/components/ChartCard";
import Topbar from "@/components/TopBar";
import StatCards from "@/components/StatCards";

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
        <div className="flex items-start justify-between gap-4">
        <StatCards 
          icon={<i className="fas fa-users"></i>} // Example icon, replace with actual icon
          value="1,234"
          label="Users"
          delta="+12%"
          deltaClass="text-green-400"
        />
        <StatCards 
          icon={<i className="fas fa-dollar-sign"></i>} // Example icon, replace with actual icon
          value="$56,789"
          label="Revenue"
          delta="-5%"
          deltaClass="text-red-400"
        />
      </div>
      </div>
      
    </div>
    
  );
}

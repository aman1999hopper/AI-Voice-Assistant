import React, { ReactNode } from "react";

// Define props type
type StatCardProps = {
  icon: ReactNode;
  value: string | number;
  label: string;
  delta?: string;
  deltaClass?: string;
};

export default function StatCard({
  icon,
  value,
  label,
  delta,
  deltaClass,
}: StatCardProps) {
  return (
    <div className="bg-slate-800/50 rounded-2xl p-5 shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>{icon}</div>
        <div className="text-right">
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm text-slate-400">{label}</div>
        </div>
      </div>
      {delta && (
        <div className={`mt-3 text-sm ${deltaClass || "text-green-400"}`}>
          {delta}
        </div>
      )}
    </div>
  );
}

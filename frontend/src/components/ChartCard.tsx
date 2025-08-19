import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

// Define props type
type ChartCardProps = {
  title: string;
};

export default function ChartCard({ title }: ChartCardProps) {
  const labels = ["Jan","Feb","Mar","Apr","May","Jun","Jul"];
  const data = {
    labels,
    datasets: [
      {
        label: "Payments",
        data: [12, 40, 30, 60, 50, 80, 70],
        fill: true,
        tension: 0.4,
        backgroundColor: "rgba(99,102,241,0.12)",
        borderColor: "rgba(99,102,241,0.9)",
        pointRadius: 0,
      }
    ]
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#9CA3AF" } },
      y: { grid: { color: "rgba(148,163,184,0.08)" }, ticks: { color: "#9CA3AF" } }
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-slate-800/50 rounded-2xl p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <select className="bg-slate-900/30 text-sm rounded-md p-1 px-2">
          <option>Monthly</option>
          <option>Weekly</option>
        </select>
      </div>

      <div style={{ height: 220 }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

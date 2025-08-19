type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
  delta: string;
  deltaClass?: string; // <-- make it optional
};

export default function StatCard({ icon, value, label, delta, deltaClass }: StatCardProps) {
  return (
    <div className="bg-slate-800/50 rounded-2xl p-5 shadow-lg">
      <h1>Personal Dahsboard</h1>
    </div>
  );
}

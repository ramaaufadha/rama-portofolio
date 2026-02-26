type BadgeProps = {
  label: string;
};

export default function Badge({ label }: BadgeProps) {
  return (
    <span className="
      bg-slate-800/70
      border border-slate-700
      px-3 py-1 
      rounded-lg 
      text-xs 
      text-slate-300
      hover:border-indigo-400
      hover:text-indigo-300
      transition
    ">
      {label}
    </span>
  );
}
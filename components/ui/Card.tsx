type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="
      bg-slate-900/60
  backdrop-blur-xl
  border border-slate-800
  rounded-xl p-6
  shadow-lg shadow-black/20
  hover:border-indigo-500/30
  hover:shadow-indigo-500/10
  transition
    ">
      {children}
    </div>
  );
}
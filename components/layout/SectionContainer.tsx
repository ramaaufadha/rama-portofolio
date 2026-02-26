type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function SectionContainer({
  children,
  className = "",
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`px-6 md:px-10 lg:px-20 py-24 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}
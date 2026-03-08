type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function Button({ children, href, className = "" }: ButtonProps) {
  const defaultClassName = `
  bg-indigo-500
  hover:bg-indigo-600
  px-6 py-3
  rounded-lg
  text-sm font-medium
  transition
  shadow-lg shadow-indigo-500/20
  hover:shadow-indigo-500/40
`;

  const combinedClassName = `${defaultClassName} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return <button className={combinedClassName}>{children}</button>;
}
type ButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export default function Button({ children, href }: ButtonProps) {
  const className = `
  bg-indigo-500 
  hover:bg-indigo-600 
  px-6 py-3 
  rounded-lg 
  text-sm font-medium 
  transition
  shadow-lg shadow-indigo-500/20
  hover:shadow-indigo-500/40
`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
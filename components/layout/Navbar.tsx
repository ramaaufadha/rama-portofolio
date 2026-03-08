export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/70 backdrop-blur border-b border-slate-800 z-50">
      <div className="px-10 py-4 flex justify-between items-center">
        <span className="font-semibold">Rama Aufadha</span>

        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#about" className="hover:text-indigo-400 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full">About</a>
          <a href="#skills" className="hover:text-indigo-400 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full">Skills</a>
          <a href="#experience" className="hover:text-indigo-400 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full">Experience</a>
          <a href="#projects" className="hover:text-indigo-400 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full">Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full">Contact</a>
        </div>
      </div>
    </nav>
  );
}
function Logo() {
  return (
    <a href="/">
      <p className="font-rubik text-white text-[2.0rem]  font-medium uppercase leading-none tracking-tighter">Arthur</p>
      <p className="font-rubik text-white text-[2.0rem]  font-medium uppercase leading-none tracking-tighter">Zatta</p>
    </a>
  );
}

export default function Navbar() {
  return (
    <nav className="w-auto h-auto px-[4rem] py-6 select-none grid grid-rows-2 md:grid-rows-1 grid-cols-12">
      <div className="row-start-1 col-span-12 md:col-span-1 md:col-start-2">
        <Logo />
      </div>
      <ul className="row-start-2 col-span-full col-start-1 gap-4  md:row-start-1 md:col-span-10 md:col-start-4 flex items-center md:gap-[20px] flex-wrap">
        <li className="hover:text-white text-[#818181] uppercase font-bold text-clamp">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-white text-[#818181] uppercase font-bold text-clamp">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-white text-[#818181] uppercase font-bold text-clamp">
          <a href="#jobs">Jobs</a>
        </li>
        <li className="hover:text-white text-[#818181] uppercase font-bold text-clamp">
          <a href="#education">Education</a>
        </li>
      </ul>
    </nav>
  );
}

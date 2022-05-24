import Link from "next/link";
import { ThemeButton } from "../ThemeButton";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between w-full md:w-10/12 py-4 px-2">
      <Link href="/">
        <a className="font-bold font-mono">michee</a>
      </Link>
      <div className="flex gap-8 justify-end">
        <Link href="#">
          <a className="transition-all duration-200 hover:bg-red-300">work</a>
        </Link>
        <Link href="#">
          <a className="transition-all duration-200 hover:bg-red-300">blog</a>
        </Link>
        <Link href="#">
          <a className="transition-all duration-200 hover:bg-red-300">about</a>
        </Link>
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;

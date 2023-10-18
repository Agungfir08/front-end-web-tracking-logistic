import Logo from "../assets/LogoKalla.svg";
import { useState } from "react";
import { BURGER, CROSS } from "./Icon";

export const navLink = [
  {
    id: "#",
    title: "Home",
  },
  {
    id: "https://kallatranslog.co.id/tentang_kami",
    title: "About Us",
  },
  {
    id: "https://kallatranslog.co.id/kontak_kami",
    title: "Contact",
  },
];

function Navbar() {
  const [open, setopen] = useState(false);
  const handleClick = () => {
    setopen(!open);
  };

  return (
    <nav
      className={`bg-white ${
        open && "sm:pb-1 "
      } z-20 w-full sticky top-0 drop-shadow-md `}>
      <div className="flex md:container lg:container xl:container mx-auto justify-between items-center py-6 sm:py-4 sm:px-7">
        <a href="#">
          <img src={Logo} alt="Logo Kalla" className=" sm:w-20 md:w-28 w-36" />
        </a>
        <button
          type="button"
          className="inline-flex justify-center items-center md:hidden lg:hidden xl:hidden transition"
          onClick={handleClick}>
          {open ? <CROSS /> : <BURGER />}
        </button>
        <div className=" hidden md:flex lg:flex xl:flex">
          <ul className="w-full text-base md:text-sm font-semibold flex  items-center gap-12">
            {navLink.map((key, index) => (
              <li key={index}>
                <a
                  href={`${key.id}`}
                  target="_blank"
                  className={`${
                    index !== navLink.length - 1 ? "text-gray-900" : "text-[--maincolor]"
                  } cursor-pointer transition hover:text-[--maincolor] ${
                    index === navLink.length - 1 &&
                    " px-10 py-2 border-[3px] border-[--maincolor] rounded-xl hover:text-white hover:bg-[--maincolor]"
                  }`}>
                  {key.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile or width less than 767px */}
      {open && (
        <div className=" transition flex justify-center border-2 border-gray-400 mx-7 my-2 p-3 rounded-lg md:hidden lg:hidden xl:hidden">
          <ul className="w-full text-xs text-center font-semibold  items-center gap-12 block">
            {navLink.map((key, index) => (
              <li key={index}>
                <a
                  href={`${key.id}`}
                  target="_blank"
                  className="text-gray-900 cursor-pointer transition hover:text-white hover:bg-[--maincolor] rounded-md block py-[5px]">
                  {key.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

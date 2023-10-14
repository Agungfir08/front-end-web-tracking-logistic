import Logo from "../assets/LogoKalla.svg";
import { useState } from "react";
import Burger from "./icons/Burger";
import Cross from "./icons/Cross";

function NavLinks() {
  return (
    <ul className="w-full text-base sm:text-xs md:text-sm sm:text-center font-semibold flex  items-center gap-12 sm:block">
      <li>
        <a
          href="#"
          className="text-gray-900 cursor-pointer transition hover:text-[--maincolor] sm:hover:text-white sm:hover:bg-[--maincolor] sm:rounded-md sm:block sm:py-[5px]"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="https://kallatranslog.co.id/tentang_kami"
          target="_blank"
          className="text-gray-900 cursor-pointer transition hover:text-[--maincolor] sm:hover:text-white sm:hover:bg-[--maincolor] sm:rounded-md sm:block sm:py-[5px]"
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="https://kallatranslog.co.id/kontak_kami"
          target="_blank"
          className="text-[--maincolor] cursor-pointer px-10 py-2 border-[3px] border-[--maincolor] rounded-xl transition hover:text-white hover:bg-[--maincolor] sm:border-none sm:py-[5px] sm:text-gray-900 sm:rounded-md sm:block"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

function Navbar() {
  const [open, setopen] = useState(false);
  const handleClick = () => {
    setopen(!open);
  };

  return (
    <nav
      className={`bg-white ${
        open && "sm:pb-1 "
      } z-20 w-full sticky top-0 drop-shadow-md `}
    >
      <div className="flex md:container lg:container xl:container mx-auto justify-between items-center py-6 sm:py-4 sm:px-7">
        <a href="#">
          <img src={Logo} alt="Logo Kalla" className=" sm:w-20 md:w-28 w-36" />
        </a>
        <button
          type="button"
          className="inline-flex justify-center items-center p-1 md:hidden lg:hidden xl:hidden transition"
          onClick={handleClick}
        >
          {open ? (
            <div style={{ height: "14px", width: "14px" }}>
              <Cross />
            </div>
          ) : (
            <Burger />
          )}
        </button>
        <div className=" hidden md:flex lg:flex xl:flex">
          <NavLinks />
        </div>
      </div>
      {open && (
        <div className=" transition flex justify-center border-2 border-gray-400 mx-7 my-2 p-3 rounded-lg md:hidden lg:hidden xl:hidden">
          <NavLinks />
        </div>
      )}
    </nav>
  );
}

export default Navbar;

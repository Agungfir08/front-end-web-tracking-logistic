import Logo from "../assets/LogoKalla.svg";
import { useRef, useState } from "react";

function NavLinks() {
  return (
    <ul className="w-full text-base sm:text-sm sm:text-center font-semibold flex md:justify-end items-center gap-10 sm:block">
      <li>
        <a
          href="#"
          className="text-gray-900 cursor-pointer transition hover:text-[--maincolor] sm:hover:text-white sm:hover:bg-[--maincolor] sm:rounded-md sm:block sm:py-[5px]">
          Tracking
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-gray-900 cursor-pointer transition hover:text-[--maincolor] sm:hover:text-white sm:hover:bg-[--maincolor] sm:rounded-md sm:block sm:py-[5px]">
          Tentang kami
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-[--maincolor] cursor-pointer px-10 py-2 border-[3px] border-[--maincolor] rounded-xl transition hover:text-white hover:bg-[--maincolor] sm:border-none sm:py-[5px] sm:text-gray-900 sm:rounded-md sm:block">
          Kontak
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
    <nav className={`bg-white ${open && "sm:pb-1"} z-20 w-full sticky top-0`}>
      <div className=" max-w-screen-xl mx-auto flex justify-between items-center py-6 sm:py-4 sm:px-7 ">
        <a href="#">
          <img src={Logo} alt="Logo Kalla" className=" w-20 md:w-36" />
        </a>
        <button
          type="button"
          className="inline-flex justify-center items-center p-1 md:hidden transition"
          onClick={handleClick}>
          {open ? (
            <svg
              class="w-3.5 h-3.5 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14">
              <path
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          ) : (
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        <div className=" hidden md:flex">
          <NavLinks />
        </div>
      </div>
      {open && (
        <div className=" transition flex justify-center border-2 border-gray-400 mx-7 my-2 p-3 rounded-lg md:hidden">
          <NavLinks />
        </div>
      )}
    </nav>
  );
}

export default Navbar;

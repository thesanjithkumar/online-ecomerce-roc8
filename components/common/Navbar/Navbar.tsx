import Link from "next/link";
import { useState, FC, useEffect } from "react";
import s from "./Navbar.module.css";
import Image from "next/image";

export const config = {
  unstable_runtimeJS: false,
};
const Navbar: FC = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const [value, setValue] = useState("");
  useEffect(() => {
    const localUserId = localStorage.getItem("userId");
    setValue(localUserId ? JSON.parse(localUserId) : "");
  }, []);
  const logoutFunction = () => {
    if (typeof window !== "undefined" && localStorage.getItem("userId")) {
      localStorage.clear();
      window.location.reload();
    }
  };
  return (
    <>
      <nav className="dark:bg-gray-900 flex items-center flex-wrap bg-mineShaft p-3">
        <Link
          href="/"
          className="inline-flex items-center p-2 mr-4 dark:text-white"
        >
          {/* <Image
            fill
            className={`${s.logo} !relative`}
            src="/images/logos/KMPS-logos_transparent.png "
            alt="SK"
          /> */}
          LOGO
        </Link>
        <button
          className=" inline-flex p-3 rounded lg:hidden text-black dark:text-white ml-auto  outline-none"
          onClick={handleClick}
          aria-label="More Navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link
              href="/contact"
              className={`${s.strike} lg:inline-flex text-xl lg:w-auto w-full px-3 py-2 rounded text-black dark:text-white font-bold items-center justify-center`}
              onClick={handleClick}
            >
              Contact & Support
            </Link>
            <div className={`${!value ? "block" : "hidden"}`}>
              <Link
                href="/login"
                className={`${s.strike} lg:inline-flex text-xl lg:w-auto w-full px-3 py-2 rounded text-black dark:text-white font-bold items-center justify-center `}
                onClick={handleClick}
              >
                Login
              </Link>
            </div>
            <div className={`${value ? "block" : "hidden"}`}>
              <Link
                href="/"
                className={`${s.strike}  lg:inline-flex text-xl lg:w-auto w-full px-3 py-2 rounded text-black dark:text-white font-bold items-center justify-center`}
                onClick={logoutFunction}
              >
                Logout
              </Link>
            </div>
            <Link
              href="/cart"
              className={`${s.strike} lg lg:inline-flex text-xl lg:w-auto w-full px-3 py-2 rounded text-black dark:text-white font-bold items-center justify-center`}
              onClick={handleClick}
            >
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

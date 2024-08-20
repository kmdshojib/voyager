import React from "react";
import Link from "next/link";
import { signOut } from "../../../auth";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar: React.FC = () => {
  
  return (
    <nav className="bg-white p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-900 text-lg font-bold">
          {/* logo */}
          <Link href="/">
            <p>Voyager</p>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <p className="text-white-500 hover:text-rose-500">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-white-500 hover:text-rose-500">Tours</p>
          </Link>
          <Link href="/contact">
            <p className="text-white-500 hover:text-rose-500">Contact</p>
          </Link>
          <Link href="/signin">
            <p className="text-white-500 hover:text-rose-500">SignIn</p>
          </Link>
          {/* <form
            action={async (formData) => {
              "use server"
              await signOut()
            }}
          >
            <button type="submit">Sign out</button>
          </form> */}
        </div>
        <div className="flex md:hidden cursor-pointer">
          <GiHamburgerMenu size={20}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

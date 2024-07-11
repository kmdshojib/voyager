import React from "react";
import Link from "next/link";

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
        <div className="flex space-x-4">
          <Link href="/">
            <p className="text-white-500 hover:text-rose-500">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-white-500 hover:text-rose-500">Tours</p>
          </Link>
          <Link href="/contact">
            <p className="text-white-500 hover:text-rose-500">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

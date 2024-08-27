"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "../Mobile-menu/mobileMenu";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { logoutUser } from "@/lib/features/authSlice";

const Navbar: React.FC = () => {
  // Accessing the user object from the auth state
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleLogOut = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

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
            <p className="text-gray-500 hover:text-rose-500">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-gray-500 hover:text-rose-500">Tours</p>
          </Link>
          <Link href="/contact">
            <p className="text-gray-500 hover:text-rose-500">Contact</p>
          </Link>
          {user?.email ? (
            <p
              onClick={handleLogOut}
              className="text-gray-500 cursor-pointer hover:text-rose-500"
            >
              Sign out
            </p>
          ) : (
            <Link href="/signin">
              <p className="text-gray-500 hover:text-rose-500">Sign In</p>
            </Link>
          )}
        </div>
        <div className="flex md:hidden cursor-pointer">
          <MobileMenu user={user} handleLogOut={handleLogOut} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

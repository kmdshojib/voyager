"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { logoutUser } from "@/lib/features/authSlice";
import MobileMenu from "../Mobile-menu/mobileMenu";
import { FaCompass } from "react-icons/fa";

const Navbar: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleLogOut = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#tours", label: "Tours" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <FaCompass className="text-rose-500 text-3xl" />
          </motion.div>
          <span className="text-gray-900 text-xl font-bold">Voyager</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
          {user?.email ? (
            <motion.p
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogOut}
              className="text-gray-500 cursor-pointer hover:text-rose-500 transition-colors duration-200"
            >
              Sign out
            </motion.p>
          ) : (
            <NavLink href="/signin" label="Sign In" />
          )}
        </div>
        <div className="md:hidden">
          <MobileMenu user={user} handleLogOut={handleLogOut} />
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <Link href={href}>
    <motion.p
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="text-gray-500 hover:text-rose-500 transition-colors duration-200"
    >
      {label}
    </motion.p>
  </Link>
);

export default Navbar;
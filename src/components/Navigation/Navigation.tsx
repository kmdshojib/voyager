"use client"

import React, { useCallback } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { logoutUser } from "@/lib/features/authSlice"
import MobileMenu from "../Mobile-menu/mobileMenu"
import { FaCompass, FaUser } from "react-icons/fa"

import Image from "next/image"
import { signOut } from "next-auth/react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"

const Navbar: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user)
  const dispatch = useAppDispatch()

  const handleLogOut = useCallback(() => {
    if (user?.socialAuthentication) {
      signOut()
    }
    dispatch(logoutUser())
  }, [dispatch, user?.socialAuthentication])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#tours", label: "Tours" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <FaCompass className="text-rose-500 text-3xl" />
          </motion.div>
          <span className="text-gray-900 text-xl font-bold">Voyager</span>
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
          {user?.email ? (
            <UserDropdown user={user} handleLogOut={handleLogOut} />
          ) : (
            <NavLink href="/signin" label="Sign In" />
          )}
        </div>
        <div className="md:hidden">
          <MobileMenu user={user} handleLogOut={handleLogOut} />
        </div>
      </div>
    </motion.nav>
  )
}

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
)

const UserDropdown: React.FC<{ user: { email: string; name: string; avatar?: string,_id:string }; handleLogOut: () => void }> = ({
  user,
  handleLogOut,
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 cursor-pointer"
      >
        {user?.avatar ? <Image src={user?.avatar} alt="user avatar" width={32} height={32} className="rounded-full" /> : <FaUser className="text-gray-500 text-2xl" />}
        <span className="text-gray-500">{user.name}</span>
      </motion.div>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56 mt-3">
      <DropdownMenuItem asChild>
        <Link href="/my-reviews" className="w-full">
          My Reviews
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href={`/mybookings/${user._id}`} className="w-full">
          My Bookings
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={handleLogOut}>Sign out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)

export default Navbar
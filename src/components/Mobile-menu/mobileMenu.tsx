"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { FaHome, FaCompass, FaEnvelope, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

interface MobileMenuProps {
    handleLogOut: () => void;
    user: { email: string; name: string } | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ handleLogOut, user }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const menuItems = [
        { href: "/", label: "Home", icon: FaHome },
        { href: "/#tours", label: "Tours", icon: FaCompass },
        { href: "/contact", label: "Contact", icon: FaEnvelope },
    ];

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <GiHamburgerMenu size={25} className="text-gray-700 hover:text-rose-500 cursor-pointer" />
                </motion.div>
            </SheetTrigger>
            <SheetContent className="bg-white">
                <SheetHeader>
                    <SheetTitle className="text-2xl font-bold text-center flex items-center justify-center space-x-2">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaCompass className="text-rose-500 text-3xl" />
                        </motion.div>
                        <span>Voyager</span>
                    </SheetTitle>
                </SheetHeader>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                            className="flex flex-col space-y-4 mt-6"
                        >
                            {menuItems.map((item, index) => (
                                <MobileMenuItem
                                    key={item.href}
                                    href={item.href}
                                    label={item.label}
                                    icon={item.icon}
                                    delay={index * 0.1}
                                    setIsOpen={setIsOpen}
                                />
                            ))}
                            {user ? (
                                <MobileMenuItem
                                    href="#"
                                    label="Sign Out"
                                    icon={FaSignOutAlt}
                                    onClick={handleLogOut}
                                    delay={0.3}
                                    setIsOpen={setIsOpen}
                                />
                            ) : (
                                <MobileMenuItem
                                    href="/signin"
                                    label="Sign In"
                                    icon={FaSignInAlt}
                                    delay={0.3}
                                    setIsOpen={setIsOpen}
                                />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </SheetContent>
        </Sheet>
    );
};

interface MobileMenuItemProps {
    href: string;
    label: string;
    icon: React.ElementType;
    delay: number;
    onClick?: () => void;
    setIsOpen: (isOpen: boolean) => void;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ href, label, icon: Icon, delay, onClick, setIsOpen }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay }}
    >
        <Link href={href} onClick={() => { onClick?.(); setIsOpen(false); }}>
            <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-4 text-gray-700 hover:text-rose-500 transition-colors duration-200"
            >
                <Icon size={20} />
                <span>{label}</span>
            </motion.div>
        </Link>
    </motion.div>
);

export default MobileMenu;
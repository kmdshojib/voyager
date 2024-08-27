import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaHome, FaInfoCircle, FaEnvelope, FaSignInAlt } from "react-icons/fa"

export function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <GiHamburgerMenu size={25} className="text-gray-700 hover:text-rose-500 cursor-pointer" />
            </SheetTrigger>
            <SheetContent className=" text-gray-500">
                <SheetHeader>
                    <SheetTitle className="text-2xl font-bold text-center">Voyager</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                    <Link href="/" className="flex items-center space-x-2 hover:text-rose-500">
                        <FaHome size={20} />
                        <p>Home</p>
                    </Link>
                    <Link href="/#tours" className="flex items-center space-x-2 hover:text-rose-500">
                        <FaInfoCircle size={20} />
                        <p>Tours</p>
                    </Link>

                    <Link href="/contact" className="flex items-center space-x-2 hover:text-rose-500">
                        <FaEnvelope size={20} />
                        <p>Contact</p>
                    </Link>
                    <Link href="/signin" className="flex items-center space-x-2 hover:text-rose-500">
                        <FaSignInAlt size={20} />
                        <p>Sign In</p>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}

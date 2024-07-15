import React, { FC } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaVimeoV,
  FaDribbble,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="bg-[#242625] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-white p-2 rounded-full">
              <FaFacebookF className="w-8 h-8 text-gray-800" />
            </div>
            <Link href="/" className="text-2xl ml-3 hover:text-rose-500">
              Voyage
            </Link>
          </div>
          <p>
            Nullam ac justo efficitur, tristique ligula. Lorem lpsn gravida nibh
            vel velit auctor aliquet. Aenean sollicitudin.
          </p>
          <div className="mt-4">
            <p className="flex items-center">
              <FaPhone className="mr-2" /> 1-677-124-44227
            </p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> 184 Main Street West Victoria
              8007
            </p>
            <p className="flex items-center">
              <FaClock className="mr-2" /> Mon - Sat 8.00 - 18.00 Sunday CLOSED
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl mb-4">Latest News</h2>
          <ul>
            <li className="mb-2">
              Water & Rocks: Discovering the Beauty of New Zealand <br />
              <span className="text-gray-400">05.4.2016</span>
            </li>
            <li className="mb-2">
              Updates: People Who Work Overseas and Fly For Free <br />
              <span className="text-gray-400">05.4.2016</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl mb-4">Gallery</h2>
          <div className="grid grid-cols-3 gap-2">
            <Image
              src="https://via.placeholder.com/100"
              alt="Gallery 1"
              width={100}
              height={100}
              className="w-full h-auto"
            />
            <Image
              src="https://via.placeholder.com/100"
              alt="Gallery 2"
              width={100}
              height={100}
              className="w-full h-auto"
            />
            <Image
              src="https://via.placeholder.com/100"
              alt="Gallery 3"
              width={100}
              height={100}
              className="w-full h-auto"
            />
            <Image
              src="https://via.placeholder.com/100"
              alt="Gallery 4"
              width={100}
              height={100}
              className="w-full h-auto"
            />
            <Image
              src="https://via.placeholder.com/100"
              alt="Gallery 5"
              width={100}
              height={100}
              className="w-full h-auto"
            />
            <Image
              src="https://via.placeholder.com/100"
              alt="Gallery 6"
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl mb-4">Follow Us</h2>
          <p>Couldn&apos;t connect with Twitter</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>© 2024 Qode Interactive, All Rights Reserved</p>
          <div className="flex space-x-4">
            <Link href="#" passHref>
              <FaFacebookF className="w-5 h-5 cursor-pointer" />
            </Link>
            <Link href="#" passHref>
              <FaTwitter className="w-5 h-5 cursor-pointer" />
            </Link>
            <Link href="#" passHref>
              <FaInstagram className="w-5 h-5 cursor-pointer" />
            </Link>
            <Link href="#" passHref>
              <FaLinkedinIn className="w-5 h-5 cursor-pointer" />
            </Link>
            <Link href="#" passHref>
              <FaPinterestP className="w-5 h-5 cursor-pointer" />
            </Link>
            <Link href="#" passHref>
              <FaVimeoV className="w-5 h-5 cursor-pointer" />
            </Link>
            <Link href="#" passHref>
              <FaDribbble className="w-5 h-5 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

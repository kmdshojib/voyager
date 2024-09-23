'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Map, MapPin, Image, MessageSquare } from 'lucide-react'

const navItems = [
    { name: 'Information', icon: Eye, href: '#information' },
    { name: 'Tour Plan', icon: Map, href: '#tour-plan' },
    { name: 'Location', icon: MapPin, href: '#location' },
    { name: 'Gallery', icon: Image, href: '#gallery' },
    { name: 'Reviews', icon: MessageSquare, href: '#reviews' },
]

type TourNavigationProps = {
    activeSection: string
    onSectionChange: (section: string) => void
}

export default function TourNavigation({ activeSection, onSectionChange }: TourNavigationProps) {
    return (
        <nav className="w-full max-w-3xl mx-auto mb-8">
            <ul className="flex flex-wrap justify-between items-center border-b border-gray-200">
                {navItems.map((item) => (
                    <li key={item.name} className="relative">
                        <motion.button
                            onClick={() => onSectionChange(item.name)}
                            className={`flex items-center px-4 py-2 text-sm font-medium ${activeSection === item.name ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                                }`}
                            whileHover={{ y: -2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <item.icon className="w-5 h-5 mr-2" />
                            {item.name}
                            {activeSection === item.name && (
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"
                                    layoutId="underline"
                                />
                            )}
                        </motion.button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
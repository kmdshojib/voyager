"use client"

import React, { useState } from 'react'
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { motion, AnimatePresence } from 'framer-motion'
import { Checkbox } from '@radix-ui/react-checkbox'

interface RatingCategory {
    name: string;
    rating: number;
}

export default function TourReviewForm() {
    const [ratings, setRatings] = useState<RatingCategory[]>([
        { name: "Accommodation", rating: 0 },
        { name: "Destination", rating: 0 },
        { name: "Meals", rating: 0 },
        { name: "Overall", rating: 0 },
        { name: "Transport", rating: 0 },
        { name: "Value For Money", rating: 0 },
    ])

    const handleRatingChange = (categoryName: string, newRating: number) => {
        setRatings(prevRatings =>
            prevRatings.map(category =>
                category.name === categoryName ? { ...category, rating: newRating } : category
            )
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow"
        >
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-2xl font-bold mb-6"
            >
                Write a Review
            </motion.h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
                {ratings.map((category, index) => (
                    <motion.div
                        key={category.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        className="flex flex-col"
                    >
                        <span className="text-sm font-medium mb-1">{category.name}</span>
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <motion.div
                                    key={star}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Star
                                        size={20}
                                        className={`cursor-pointer ${star <= category.rating ? 'text-rose-500 fill-rose-500' : 'text-gray-300'
                                            }`}
                                        onClick={() => handleRatingChange(category.name, star)}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mb-4"
            >
                <Textarea placeholder="Review text" className="w-full p-2 border rounded" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="grid grid-cols-2 gap-4 mb-4"
            >
                <Input type="text" placeholder="Your full name" className="w-full p-2 border rounded" />
                <Input type="email" placeholder="E-mail address" className="w-full p-2 border rounded" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="flex items-center mb-4"
            >
                <Checkbox id="save-info" />
                <label htmlFor="save-info" className="ml-2 text-sm text-gray-600">
                    Save my name, email, and website in this browser for the next time I comment.
                </label>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <Button
                    className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition-colors"
                >
                    SUBMIT
                </Button>
            </motion.div>
        </motion.div>
    )
}
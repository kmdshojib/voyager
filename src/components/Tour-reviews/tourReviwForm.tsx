"use client"

import React, { useState, useCallback, useMemo } from 'react'
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from 'framer-motion'

interface RatingCategory {
    name: string;
    rating: number;
}

interface TourReviewFormProps {
  onSubmit: (review: {
    author: string;
    date: string;
    rating: number;
    content: string;
  }) => void;
}

const initialRatings: RatingCategory[] = [
    { name: "Accommodation", rating: 0 },
    { name: "Destination", rating: 0 },
    { name: "Meals", rating: 0 },
    { name: "Overall", rating: 0 },
    { name: "Transport", rating: 0 },
    { name: "Value For Money", rating: 0 },
]

export default function TourReviewForm({ onSubmit }: TourReviewFormProps) {
    const [ratings, setRatings] = useState<RatingCategory[]>(initialRatings)
    const [reviewText, setReviewText] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [saveInfo, setSaveInfo] = useState(false)

    const handleRatingChange = useCallback((categoryName: string, newRating: number) => {
        setRatings(prevRatings =>
            prevRatings.map(category =>
                category.name === categoryName ? { ...category, rating: newRating } : category
            )
        )
    }, [])

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const overallRating = ratings.find(r => r.name === "Overall")?.rating || 0
        const formData = {
            author: fullName,
            date: new Date().toISOString().split('T')[0],
            rating: overallRating,
            content: reviewText,
        }
        onSubmit(formData)
        setRatings(initialRatings)
        setReviewText("")
        setFullName("")
        setEmail("")
        setSaveInfo(false)
    }, [ratings, fullName, reviewText, onSubmit])

    const ratingElements = useMemo(() => ratings.map((category, index) => (
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
                    <motion.button
                        key={star}
                        type="button"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleRatingChange(category.name, star)}
                    >
                        <Star
                            size={20}
                            className={`${star <= category.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                    </motion.button>
                ))}
            </div>
        </motion.div>
    )), [ratings, handleRatingChange])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md"
        >
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-2xl font-bold mb-6"
            >
                Write a Review
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    {ratingElements}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <Textarea 
                        placeholder="Write your review here..."
                        className="w-full p-2 border rounded" 
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="grid grid-cols-2 gap-4"
                >
                    <Input 
                        type="text" 
                        placeholder="Your full name" 
                        className="w-full p-2 border rounded" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    <Input 
                        type="email" 
                        placeholder="E-mail address" 
                        className="w-full p-2 border rounded" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="flex items-center"
                >
                    <Checkbox 
                        id="save-info" 
                        checked={saveInfo}
                        onCheckedChange={(checked) => setSaveInfo(checked as boolean)}
                    />
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
                        type="submit"
                        className="w-full bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition-colors"
                    >
                        SUBMIT REVIEW
                    </Button>
                </motion.div>
            </form>
        </motion.div>
    )
}
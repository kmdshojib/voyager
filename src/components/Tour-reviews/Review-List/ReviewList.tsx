"use client"

import React, { useState, useCallback, useMemo } from 'react'
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { motion, AnimatePresence } from 'framer-motion'
import TourReviewForm from "@/components/Tour-reviews/tourReviwForm"
interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  content: string;
  helpful: number;
  notHelpful: number;
}

const initialReviews: Review[] = [
  {
    id: 1,
    author: "John Doe",
    date: "2023-05-15",
    rating: 4,
    content: "Great tour experience! The accommodations were comfortable and the destinations were breathtaking. The meals could have been better, but overall it was a fantastic trip.",
    helpful: 5,
    notHelpful: 1,
  },
  {
    id: 2,
    author: "Jane Smith",
    date: "2023-05-10",
    rating: 5,
    content: "Absolutely amazing! Everything from the transport to the accommodations was top-notch. The tour guide was knowledgeable and friendly. Highly recommend!",
    helpful: 8,
    notHelpful: 0,
  },
]

export default function ReviewList() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [showForm, setShowForm] = useState(false)

  const handleNewReview = useCallback((newReview: Omit<Review, 'id' | 'helpful' | 'notHelpful'>) => {
    setReviews(prevReviews => [{
      ...newReview,
      id: prevReviews.length + 1,
      helpful: 0,
      notHelpful: 0,
    }, ...prevReviews])
    setShowForm(false)
  }, [])

  const handleHelpful = useCallback((id: number, isHelpful: boolean) => {
    setReviews(prevReviews => prevReviews.map(review => 
      review.id === id 
        ? { ...review, [isHelpful ? 'helpful' : 'notHelpful']: review[isHelpful ? 'helpful' : 'notHelpful'] + 1 }
        : review
    ))
  }, [])

  const reviewElements = useMemo(() => reviews.map((review, index) => (
    <motion.div
      key={review.id}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${review.author}`} alt={review.author} />
                <AvatarFallback>{review.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{review.author}</CardTitle>
                <CardDescription>{review.date}</CardDescription>
              </div>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p>{review.content}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={() => handleHelpful(review.id, true)}>
              <ThumbsUp className="w-4 h-4 mr-2" />
              Helpful ({review.helpful})
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleHelpful(review.id, false)}>
              <ThumbsDown className="w-4 h-4 mr-2" />
              Not Helpful ({review.notHelpful})
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )), [reviews, handleHelpful])

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8 px-4"
    >
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6"
      >
        Tour Reviews
      </motion.h1>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6"
      >
        <Button onClick={() => setShowForm(!showForm)} variant="outline">
          {showForm ? 'Cancel' : 'Write a Review'}
        </Button>
      </motion.div>
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <TourReviewForm onSubmit={handleNewReview} />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div 
        className="space-y-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <AnimatePresence>
          {reviewElements}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
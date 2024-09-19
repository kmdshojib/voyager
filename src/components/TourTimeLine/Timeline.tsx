"use client"

import { CheckIcon } from "lucide-react"
import { motion } from "framer-motion"

interface TimelineItem {
  day: number
  title: string
  description: string
  bulletPoints?: string[]
}

interface TimelineProps {
  items?: TimelineItem[]
}

export default function Timeline({ items = [] }: TimelineProps) {
  if (items.length === 0) {
    return <div className="text-center text-gray-500">No timeline items to display.</div>
  }

  return (
    <div className="max-w-2xl mx-auto relative">
      <motion.div
        className="absolute left-6 top-6 bottom-6 w-0.5 bg-rose-500 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="flex mb-8 last:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="flex flex-col items-center mr-4 z-10">
            <motion.div
              className="w-12 h-12 rounded-full bg-rose-500 border-2 border-white shadow-md flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
            >
              <span className="text-white text-xl font-bold">{item.day}</span>
            </motion.div>
          </div>
          <div className="flex-1 pt-1">
            <h3 className="text-xl font-bold mb-2">Day {item.day}: {item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            {item.bulletPoints && item.bulletPoints.length > 0 && (
              <ul className="space-y-2">
                {item.bulletPoints.map((point, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.7 + idx * 0.1 }}
                  >
                    <CheckIcon className="w-5 h-5 text-rose-500 mr-2 mt-0.5" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
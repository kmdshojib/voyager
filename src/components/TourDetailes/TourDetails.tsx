"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Users, Plane, MapPin } from "lucide-react"
import { motion } from "framer-motion"

interface TourDetailsProps {
  data?: any
}
const TourDetails: React.FC<TourDetailsProps> = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  console.log(data)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Card className="w-full max-w-3xl mx-auto mb-5">
 
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline space-y-2 sm:space-y-0">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-800">{data.name}</CardTitle>
            <motion.span
              className="text-xl sm:text-2xl font-semibold text-rose-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {data.price}<span className="text-sm sm:text-base text-gray-500 font-normal">/per person</span>
            </motion.span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <motion.p
            className="text-sm sm:text-base text-gray-600"
            variants={itemVariants}
          >
            {data.description}
          </motion.p>
          <motion.p
            className="text-sm sm:text-base text-gray-600"
            variants={itemVariants}
          >
            {data.details}
          </motion.p>
          <motion.div
            className="grid grid-cols-2 sm:flex sm:justify-between items-center text-gray-600 gap-4 sm:gap-0"
            variants={itemVariants}
          >
            {[
              { icon: CalendarDays, text: `${data.duration}` },
              { icon: Users, text: `${data.ageGroup}age` },
              { icon: Plane, text: "Air Rides" },
              { icon: MapPin, text: "Escorted tours" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="space-y-4 pt-4 border-t border-gray-200"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row justify-between space-y-1 sm:space-y-0">
              <span className="font-semibold text-gray-700 text-sm sm:text-base">Departure</span>
              <span className="text-gray-600 text-sm sm:text-base">{data.departurePlace}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between space-y-1 sm:space-y-0">
              <span className="font-semibold text-gray-700 text-sm sm:text-base">Departure Time</span>
              <span className="text-gray-600 text-sm sm:text-base">{data.departureTime}</span>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
export default TourDetails
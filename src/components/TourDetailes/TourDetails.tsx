"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Users, Plane, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function TourDetails() {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Card className="w-full max-w-3xl mx-auto">
        {/* <motion.div 
          className="h-2 bg-red-500 rounded-t-lg" 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        /> */}
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline space-y-2 sm:space-y-0">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-800">Contrasts of Italy</CardTitle>
            <motion.span 
              className="text-xl sm:text-2xl font-semibold text-teal-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              $2260<span className="text-sm sm:text-base text-gray-500 font-normal">/per person</span>
            </motion.span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <motion.p 
            className="text-sm sm:text-base text-gray-600"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor
            auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est.
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base text-gray-600"
            variants={itemVariants}
          >
            Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. Nullam
            elementum nibh nec pellentesque finibus. Suspendisse laoreet velit at eros eleifend, a pellentesque urna ornare. In sed viverra dui. Duis ultricies mi
            sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est.
            Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros
            vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Donec blandit nisi ut congue rutrum. Vestibulum
            enim velit, semper hendrerit tristique non, malesuada auctor nulla.
          </motion.p>
          <motion.div 
            className="grid grid-cols-2 sm:flex sm:justify-between items-center text-gray-600 gap-4 sm:gap-0"
            variants={itemVariants}
          >
            {[
              { icon: CalendarDays, text: "8 Days" },
              { icon: Users, text: "12+ Age" },
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
              <span className="text-gray-600 text-sm sm:text-base">Main City Square, Old Town</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between space-y-1 sm:space-y-0">
              <span className="font-semibold text-gray-700 text-sm sm:text-base">Departure Time</span>
              <span className="text-gray-600 text-sm sm:text-base">Please arrive by 9:15 AM for a prompt departure at 9:30 AM.</span>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const myBookings = () => {
  const id = useParams()
  console.log(id)

  return (
    <div>
      <p>Hello</p>
    </div>
  )
}

export default myBookings
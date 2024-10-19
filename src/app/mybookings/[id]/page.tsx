"use client";
import { useParams } from "next/navigation";
import React from "react";

const MyBookings:React.FC = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <p>This feature will be implemented soon!</p>
    </div>
  );
};

export default MyBookings;

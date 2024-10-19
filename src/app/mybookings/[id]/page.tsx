"use client";
import { useParams } from "next/navigation";
import React from "react";

const MyBookings:React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>This feature will be implemented soon!</h1>
    </div>
  );
};

export default MyBookings;

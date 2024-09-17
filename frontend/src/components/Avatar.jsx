"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarComp() {
  const [user, setUser] = useState();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);
  return (
    <div>
      <Avatar className="cursor-pointer">
        <AvatarImage src={user?.photo} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

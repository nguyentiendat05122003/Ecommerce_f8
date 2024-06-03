// "use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarComp() {
  //   const photo = JSON.parse(localStorage.getItem("user")).photo;
  return (
    <div>
      <Avatar className="cursor-pointer">
        <AvatarImage />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

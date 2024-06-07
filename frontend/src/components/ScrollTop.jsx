"use client";
import React, { useEffect } from "react";

export default function ScrollTop() {
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  });
  return <></>;
}

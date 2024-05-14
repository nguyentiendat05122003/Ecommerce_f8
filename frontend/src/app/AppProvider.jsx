"use client";
import { clientSessionToken } from "@/lib/http";
import { useState } from "react";
export default function AppProvider({ children, initialSessionToken = {} }) {
  useState(() => {
    clientSessionToken.token = initialSessionToken;
  });

  return <>{children}</>;
}

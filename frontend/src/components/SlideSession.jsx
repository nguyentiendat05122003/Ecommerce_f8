"use client";

import { useEffect } from "react";
import { differenceInHours, differenceInMinutes } from "date-fns";
import authApiRequest from "@/apiRequests/auth";
import { clientSessionToken } from "@/lib/http";

export default function SlideSession() {
  useEffect(() => {
    const interval = setInterval(async () => {
      const now = new Date();
      const sessionTokenExpiresAt = localStorage.getItem(
        "sessionTokenExpiresAt"
      );
      const expiresAt = sessionTokenExpiresAt
        ? new Date(sessionTokenExpiresAt)
        : new Date();
      if (differenceInHours(expiresAt, now) < 1) {
        const result = await authApiRequest.refresh(
          clientSessionToken?.token.accessToken
        );
        localStorage.setItem("sessionTokenExpiresAt", result.expiresAt);
      }
    }, 1000 * 60 * 30);
    return () => clearInterval(interval);
  }, []);
  return null;
}

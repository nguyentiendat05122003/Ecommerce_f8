"use client";
import authApiRequest from "@/apiRequests/auth";
import React from "react";
import { useRouter } from "next/navigation";
import { clientSessionToken } from "@/lib/http";

export default function ButtonLogout() {
  const router = useRouter();

  const handleClick = async () => {
    await authApiRequest.logoutFromNextServerToServer();
    clientSessionToken.set = {};
    router.push("/login");
  };
  return (
    <button
      onClick={handleClick}
      className="text-left px-2 py-1 font-normal text-sm"
      href="/"
    >
      Đăng xuất
    </button>
  );
}

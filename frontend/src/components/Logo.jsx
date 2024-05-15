"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import LogoDark from "../app/assets/img/icons/logo_dark.svg";
import LogoLight from "../app/assets/img/icons/logo_light.svg";
export default function Logo({ className = "", textOnly = true }) {
  const { theme } = useTheme();
  let Logo = theme === "light" ? LogoLight : LogoDark;
  return (
    <Link className="hidden sm:flex items-center" href="/">
      <Image
        className={className}
        src={Logo}
        width="45"
        height="40"
        alt="logo"
        priority={true}
      />
      <h4>{textOnly && "ShopPoint"}</h4>
    </Link>
  );
}

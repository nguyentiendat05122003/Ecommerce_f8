import React from "react";
import LogoDark from "../app/img/logo_dark.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="my-5">
      <div className="pt-5 flex flex-col items-center text-[10px] tracking-[0.7px] gap-2.5 sm:flex-row sm:justify-between border-t-[1px] border-solid border-inputBorder">
        <p className="text-[10px]">
          Copyright © {new Date().getFullYear()} By Merkulove. All Rights
          Reserved
        </p>
        <div className="text-[10px] flex items-center gap-2.5">
          Powered by
          <a
            href="https://1.envato.market/tf-merkulove"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="w-9 will-change-transform transition-transform hover:scale-90"
              src={LogoDark}
              alt="Merkulove"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

import Logo from "@/components/Logo";
import React from "react";
import media from "../../img/media.webp";
import Facebook from "../../img/facebook.png";
import Google from "../../img/google.png";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Login() {
  return (
    <div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-center items-center lg:p-[60px]">
          <Logo />
          <p className="text-center tracking-[0.2px] font-semibold text-lg leading-6 max-w-[540px] my-7 mx-auto">
            Gain data-based insights, view progress at a glance, and manage your
            organization smarter
          </p>
          <Image
            className="max-w-[520px] h-[438px] object-cover"
            src={media}
            alt="media"
          />
        </div>

        <div className="bg-widget  flex flex-col items-center justify-start w-full py-10 px-4 lg:p-[60px]">
          <div className="flex flex-col gap-2.5 text-center">
            <h1 className="text-[38px]">Welcome back!</h1>
            <p className="lg:max-w-[300px] m-auto 4xl:max-w-[unset]">
              Etiam quis quam urna. Aliquam odio erat, accumsan eu nulla in
            </p>
          </div>
          <form className="mt-5 w-full ">
            <div className="flex flex-col gap-5 items-center">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label className="font-bold text-gray text-xs" htmlFor="email">
                  Email
                </Label>
                <Input
                  className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                  type="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  className="font-bold text-gray text-xs"
                  htmlFor="password"
                >
                  Password
                </Label>
                <Input
                  className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                  type="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 mt-4 mb-10 ">
              <button className="text-base font-semibold leading-4 text-accent transition-all hover:underline">
                Forgot Password?
              </button>
              <Button className="hover:bg-[#02A189] w-full bg-[#00BA9D] border-min border-solid border-[#01C8A9] rounded-[23px] max-w-sm text-base font-semibold">
                Log In
              </Button>
            </div>
          </form>
          <div className="w-full max-w-sm">
            <div className=" relative">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-border" />
              <span className="flex items-center justify-center relative z-10 w-11 h-[23px] m-auto bg-widget">
                or
              </span>
            </div>
            <div className="w-full grid grid-cols-2 gap-4 2xs:grid-cols-2 xs:gap-[30px] mt-[30px] mb-9">
              <Button className="hover:bg-background max-w-[215px] flex items-center justify-center rounded-[23px] h-searchHeight text-sm gap-[15px] border-[1px] border-solid border-accent text-accent">
                <Image
                  src={Facebook}
                  className="w-[16px] h-auto object-cover"
                />
                Facebook
              </Button>
              <Button className="hover:bg-background max-w-[215px] flex items-center justify-center rounded-[23px] h-searchHeight text-sm gap-[15px] border-[1px] border-solid border-accent text-accent">
                <Image src={Google} className="w-[16px] h-auto object-cover" />
                Google
              </Button>
            </div>
            <div className="flex justify-center items-center gap-2.5 leading-none">
              <p>Don’t have an account?</p>
              <button className="text-accent font-semibold text-base">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Setting() {
  return (
    <div>
      <div className="mt-3 grid gap-5 md:!grid-cols-2 xl:!grid-cols-[340px,_minmax(0,1fr)]">
        <div className="grid gap-5 md:!grid-cols-2 md:col-span-2 xl:!grid-cols-1 xl:col-span-1">
          <div className="bg-widget grid gap-5 rounded-sm drop-shadow-main">
            <div className="md:p-[26px] p-[20px]  flex flex-col items-center justify-center">
              <div className="relative">
                <Avatar className="relative w-[110px] h-[110px] ">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <button
                  className="flex items-center justify-center absolute z-10 right-0 bottom-0 h-10 w-10 bg-green text-widget rounded-full border-[3px]
                            border-widget border-solid transition hover:bg-green-darker"
                >
                  <Camera className="" size={20} />
                </button>
              </div>
              <h4 className="text-2xl font-bold">Maria Smith</h4>
              <span className="rounded-md mt-2.5 min-w-[96px] bg-red text-center text-[13px] font-bold text-widget py-[2px] ">
                Admin
              </span>
              <p className="mb-[18px] mt-6 subheading-2 text-accent">
                last visit 05/05/2024
              </p>
              <button className="w-full md:max-w-[280px] bg-accent text-white drop-shadow-[0 1px 8px rgba(3, 94, 207, 0.5)] rounded-[23px] px-[26px] text-base font-semibold cursor-pointer h-searchHeight">
                Log Out
              </button>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="md:p-[26px] p-[20px] bg-widget grid gap-5 rounded-sm drop-shadow-main  items-center">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <span className="icon-wrapper mt-1">
                    <Mail size={20} />
                  </span>
                  maria@email.com
                </div>
                <div className="flex items-start gap-4">
                  <span className="icon-wrapper mt-1.5">
                    <MapPin size={20} />
                  </span>
                  <span className="max-w-[156px]">
                    312 3rd St, Albany, New York 12206, USA
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="icon-wrapper mt-1">
                    <Phone size={20} />
                  </span>
                  +1 123-123-123
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" flex flex-col gap-[30px] md:gap-12 md:row-start-2 md:col-span-2 md:!pb-[50px]
                xl:row-start-1 xl:col-start-2 xl:col-span-1"
        >
          <div className="flex flex-col gap-5 bg-widget px-[26px] pt-[26px] pb-[50px] rounded-sm drop-shadow-main">
            <h5>My Profile Details</h5>
            <form action="">
              <div className="grid  sm:grid-cols-2 gap-4">
                <div className="grid gap-4">
                  <>
                    <Label
                      className="font-bold text-gray text-xs"
                      htmlFor="name"
                    >
                      Name
                    </Label>
                    <Input
                      className="w-full focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                      type="text"
                      id="name"
                      placeholder="Name"
                    />
                  </>
                  <>
                    <Label
                      className="font-bold text-gray text-xs"
                      htmlFor="email"
                    >
                      Email
                    </Label>
                    <Input
                      className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                  </>
                  <>
                    <Label
                      className="font-bold text-gray text-xs"
                      htmlFor="phone"
                    >
                      Phone
                    </Label>
                    <Input
                      className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                      type="text"
                      id="phone"
                      placeholder="Phone"
                    />
                  </>
                  <>
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
                  </>
                </div>
                <div className="grid gap-4">
                  <div className="relative flex flex-col gap-[14px]">
                    <Label
                      className="font-bold text-gray text-xs"
                      htmlFor="country"
                    >
                      Country
                    </Label>
                    <Accordion
                      type="single"
                      collapsible
                      className=" focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                    >
                      <AccordionItem
                        className="w-full border-none"
                        value="item-1"
                      >
                        <AccordionTrigger className="text-[13px] text-gray font-extralight no-underline hover:no-underline p-0 mt-3">
                          Country
                        </AccordionTrigger>
                        <div className="z-20 mt-[8px] absolute top-[100%] left-0 bg-widget w-full rounded-sm max-h-[300px] overflow-y-auto flex flex-col gap-2 drop-shadow-main">
                          <AccordionContent className="px-4 py-2">
                            <div className="text-sm font-normal">Lenovo</div>
                          </AccordionContent>
                          <AccordionContent className="px-4 py-2">
                            <div className="text-sm font-normal">Lenovo</div>
                          </AccordionContent>
                        </div>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="relative flex flex-col gap-[14px]">
                    <Label
                      className="font-bold text-gray text-xs"
                      htmlFor="city"
                    >
                      City
                    </Label>
                    <Accordion
                      type="single"
                      collapsible
                      className=" focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                    >
                      <AccordionItem
                        className="w-full border-none"
                        value="item-1"
                      >
                        <AccordionTrigger className="text-[13px] text-gray font-extralight no-underline hover:no-underline p-0 mt-3">
                          City
                        </AccordionTrigger>
                        <div className="z-20 mt-[8px] absolute top-[100%] left-0 bg-widget w-full rounded-sm max-h-[300px] overflow-y-auto flex flex-col gap-2 drop-shadow-main">
                          <AccordionContent className="px-4 py-2">
                            <div className="text-sm font-normal">Lenovo</div>
                          </AccordionContent>
                          <AccordionContent className="px-4 py-2">
                            <div className="text-sm font-normal">Lenovo</div>
                          </AccordionContent>
                        </div>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <>
                    <Label
                      className="font-bold text-gray text-xs"
                      htmlFor="address"
                    >
                      Address
                    </Label>
                    <Input
                      className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                      type="text"
                      id="address"
                      placeholder="Address"
                    />
                  </>
                  <>
                    <Label
                      className="font-bold text-gray text-xs"
                      htmlFor="code"
                    >
                      Zip code
                    </Label>
                    <Input
                      className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                      type="text"
                      id="code"
                      placeholder="Zip Code"
                    />
                  </>
                </div>
              </div>
            </form>
            <div className="mt-2 5 flex flex-col">
              <button className="text-left hover:underline transition-all font-bold text-base leading-[1.4] text-accent">
                Change password
              </button>
              <button className="hover:bg-[#02A189] rounded-[23px] px-[26px] text-base font-semibold cursor-pointer h-searchHeight bg-[#00BA9D] border-min border-solid border-[#01C8A9] text-white drop-shadow-[0 1px 10px rgba(2, 202, 171, 0.35)] w-full mt-5 md:w-fit md:px-[70px]">
                Update information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

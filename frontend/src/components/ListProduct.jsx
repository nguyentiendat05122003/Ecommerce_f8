import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import test from "../app/img/10.webp";
export default function ListProduct() {
  return (
    <div className="flex-1">
      <div className="filter">
        <Accordion
          type="single"
          collapsible
          className=" hover:border-accent relative w-[293px] h-[44px] bg-background px-[20px] py-0 border-min border-solid border-inputBorder rounded-lg"
        >
          <AccordionItem className="w-full border-none" value="item-1">
            <AccordionTrigger className="text-sm font-light no-underline hover:no-underline p-0 mt-2.5">
              Brands
            </AccordionTrigger>
            <div className="z-20 mt-[8px] absolute top-[100%] left-0 bg-widget w-full rounded-sm max-h-[300px] flex flex-col gap-2 drop-shadow-main">
              <AccordionContent className="px-4 py-2">Lenovo</AccordionContent>
              <AccordionContent className="px-4 py-2">Acer</AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      <div
        className="grid gap-[26px] mt-5 mb-[30px] sm:grid-cols-2 md:grid-cols-3 md:mt-7
         lg:grid-cols-4 2xl:grid-cols-6 "
      >
        <Link
          href="/"
          className="card flex flex-col h-full p-[26px] bg-widget drop-shadow-main rounded-[6px] transition-all hover:-translate-y-1"
        >
          <div className="mb-2.5 ">
            <div className="img-wrapper border-solid border-min border-border">
              <Image
                src={test}
                alt="test"
                className="w-full h-auto object-cover rounded-[6px]"
              />
            </div>
          </div>
          <h6 className="text-base font-bold text-input leading-[1.4] max-w-[180px] transition-all hover:text-accent">
            PlayStation 5 Gaming Console
          </h6>
          <div className="price flex items-center gap-2">
            <p className="font-normal text-sm line-through">12.690.000₫</p>
            <p className="font-normal text-[15px]">-23%</p>
          </div>
          <p className="font-bold text-base leading-[1.4] text-accent">
            9.690.000₫
          </p>
          <div className="flex">
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <StarHalf size={18} fill="#F8D518" strokeWidth={0} />
          </div>
          <div className="desc flex flex-col mt-[7px] gap-1">
            <p className="font-light text-xs ">Màn hình: 15.6", Full HD</p>
            <p className="font-light text-xs ">CPU: Ryzen 5, 7520U, 2.8GHz</p>
            <p className="font-light text-xs ">Card: Intel UHD</p>
            <p className="font-light text-xs ">Pin: 42 Wh</p>
            <p className="font-light text-xs ">Khối lượng: 1.58 kg</p>
          </div>
        </Link>
        <Link
          href="/"
          className="card flex flex-col h-full p-[26px] bg-widget drop-shadow-main rounded-[6px] transition-all"
        >
          <div className="mb-2.5 ">
            <div className="img-wrapper border-solid border-min border-border">
              <Image
                src={test}
                alt="test"
                className="w-full h-auto object-cover rounded-[6px]"
              />
            </div>
          </div>
          <h6 className="text-base font-bold text-input leading-[1.4] max-w-[180px] transition-all hover:text-accent">
            PlayStation 5 Gaming Console
          </h6>
          <div className="price flex items-center gap-2">
            <p className="font-normal text-sm line-through">12.690.000₫</p>
            <p className="font-normal text-[15px]">-23%</p>
          </div>
          <p className="font-bold text-base leading-[1.4] text-accent">
            9.690.000₫
          </p>
          <div className="flex">
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <StarHalf size={18} fill="#F8D518" strokeWidth={0} />
          </div>
          <div className="desc flex flex-col mt-[7px] gap-1">
            <p className="font-light text-xs ">Màn hình: 15.6", Full HD</p>
            <p className="font-light text-xs ">CPU: Ryzen 5, 7520U, 2.8GHz</p>
            <p className="font-light text-xs ">Card: Intel UHD</p>
            <p className="font-light text-xs ">Pin: 42 Wh</p>
            <p className="font-light text-xs ">Khối lượng: 1.58 kg</p>
          </div>
        </Link>
        <Link
          href="/"
          className="card flex flex-col h-full p-[26px] bg-widget drop-shadow-main rounded-[6px] transition-all"
        >
          <div className="mb-2.5 ">
            <div className="img-wrapper border-solid border-min border-border">
              <Image
                src={test}
                alt="test"
                className="w-full h-auto object-cover rounded-[6px]"
              />
            </div>
          </div>
          <h6 className="text-base font-bold text-input leading-[1.4] max-w-[180px] transition-all hover:text-accent">
            PlayStation 5 Gaming Console
          </h6>
          <div className="price flex items-center gap-2">
            <p className="font-normal text-sm line-through">12.690.000₫</p>
            <p className="font-normal text-[15px]">-23%</p>
          </div>
          <p className="font-bold text-base leading-[1.4] text-accent">
            9.690.000₫
          </p>
          <div className="flex">
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <StarHalf size={18} fill="#F8D518" strokeWidth={0} />
          </div>
          <div className="desc flex flex-col mt-[7px] gap-1">
            <p className="font-light text-xs ">Màn hình: 15.6", Full HD</p>
            <p className="font-light text-xs ">CPU: Ryzen 5, 7520U, 2.8GHz</p>
            <p className="font-light text-xs ">Card: Intel UHD</p>
            <p className="font-light text-xs ">Pin: 42 Wh</p>
            <p className="font-light text-xs ">Khối lượng: 1.58 kg</p>
          </div>
        </Link>
        <Link
          href="/"
          className="card flex flex-col h-full p-[26px] bg-widget drop-shadow-main rounded-[6px] transition-all"
        >
          <div className="mb-2.5 ">
            <div className="img-wrapper border-solid border-min border-border">
              <Image
                src={test}
                alt="test"
                className="w-full h-auto object-cover rounded-[6px]"
              />
            </div>
          </div>
          <h6 className="text-base font-bold text-input leading-[1.4] max-w-[180px] transition-all hover:text-accent">
            PlayStation 5 Gaming Console
          </h6>
          <div className="price flex items-center gap-2">
            <p className="font-normal text-sm line-through">12.690.000₫</p>
            <p className="font-normal text-[15px]">-23%</p>
          </div>
          <p className="font-bold text-base leading-[1.4] text-accent">
            9.690.000₫
          </p>
          <div className="flex">
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <StarHalf size={18} fill="#F8D518" strokeWidth={0} />
          </div>
          <div className="desc flex flex-col mt-[7px] gap-1">
            <p className="font-light text-xs ">Màn hình: 15.6", Full HD</p>
            <p className="font-light text-xs ">CPU: Ryzen 5, 7520U, 2.8GHz</p>
            <p className="font-light text-xs ">Card: Intel UHD</p>
            <p className="font-light text-xs ">Pin: 42 Wh</p>
            <p className="font-light text-xs ">Khối lượng: 1.58 kg</p>
          </div>
        </Link>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious className="font-semibold  text-base" href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="font-semibold  text-base" href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext className="font-semibold  text-base" href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

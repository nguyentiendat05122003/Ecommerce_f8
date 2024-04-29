import Header from "@/components/Header";
import ListBrand from "@/components/ListBrand";
import SideBar from "@/components/SideBar";
import Slider from "@/components/Slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Home() {
  return (
    <main>
      <Header />
      <div className="main mt-[26px] ">
        <div className="title h-10 bg-widget rounded-md mb-4 drop-shadow-main">
          <h4 className="text-center leading-10">
            Sell your Laptop for Instant Cash
          </h4>
        </div>
        <Slider />
        <div className="main_container mt-5 flex items-start ">
          <SideBar />
          <div className="container flex-1">
            {/* <ListBrand /> */}
            <div className="filter">
              <Accordion
                type="single"
                collapsible
                className="relative w-[293px] h-[44px] bg-background px-[20px] py-0 border-min border-solid border-inputBorder rounded-lg"
              >
                <AccordionItem className="w-full border-none" value="item-1">
                  <AccordionTrigger className="text-base font-light no-underline hover:no-underline p-0 mt-2">
                    Brands
                  </AccordionTrigger>
                  <div className="mt-[8px] absolute top-[100%] left-0 bg-widget w-full rounded-sm max-h-[300px] flex flex-col gap-2 drop-shadow-main">
                    <AccordionContent className="px-4 py-2">
                      Lenovo
                    </AccordionContent>
                    <AccordionContent className="px-4 py-2">
                      Acer
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

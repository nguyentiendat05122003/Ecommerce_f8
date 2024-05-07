import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListBrand from "@/components/ListBrand";
import ListFilters from "@/components/ListFilters";
import ListProduct from "@/components/ListProduct";
import { ListFilter } from "lucide-react";

export default function Home() {
  return (
    <main className="px-4">
      <Header />
      <div className="main mt-[26px] ">
        {/* <Slider /> */}
        <ListBrand />
        {/* Type product */}
        <ListFilters />
        <div className="main_container flex items-start gap-5">
          <ListProduct />
        </div>
        <Footer />
      </div>
    </main>
  );
}

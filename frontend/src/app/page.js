import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListBrand from "@/components/ListBrand";
import ListFilters from "@/components/ListFilters";
import ListTypeProduct from "@/components/ListTypeProduct";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="px-4">
      <Header />
      <Slider />
      <div className="main mt-[26px] ">
        <ListBrand />
        <div className="mt-10 hidden xl:block">
          <h6 className="text-base font-bold">Chọn theo nhu cầu</h6>
          <ListTypeProduct />
        </div>
        <ListFilters />
        <Footer />
      </div>
    </main>
  );
}

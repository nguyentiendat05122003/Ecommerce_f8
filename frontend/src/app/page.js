import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListProduct from "@/components/ListProduct";
import SideBar from "@/components/SideBar";
import Slider from "@/components/Slider";
export default function Home() {
  return (
    <main>
      <Header />
      <div className="main mt-[26px] ">
        {/* <div className="title h-10 bg-widget rounded-md mb-4 drop-shadow-main">
          <h4 className="text-center leading-10">
            Sell your Laptop for Instant Cash
          </h4>
        </div> */}
        <Slider />
        <div className="main_container mt-5 flex items-start gap-5">
          <SideBar />
          <ListProduct />
        </div>
        <Footer />
      </div>
    </main>
  );
}

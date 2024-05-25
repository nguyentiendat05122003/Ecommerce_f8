import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const ListBrand = dynamic(() => import("@/components/ListBrand"), {
  ssr: false,
});
const ListFilters = dynamic(() => import("@/components/ListFilters"), {
  ssr: false,
});
const ListTypeProduct = dynamic(() => import("@/components/ListTypeProduct"), {
  ssr: false,
});
const Slider = dynamic(() => import("@/components/Slider"), { ssr: false });

export default function Home() {
  return (
    <main className="px-4">
      <Header />
      <Slider />
      <div className="main mt-[26px] ">
        <ListBrand />
        <div className="mt-10 hidden xl:block">
          <ListTypeProduct />
        </div>
        <ListFilters />
        <Footer />
      </div>
    </main>
  );
}

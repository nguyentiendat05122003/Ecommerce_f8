import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function DefaultLayout({ children }) {
  return (
    <div className="px-4">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

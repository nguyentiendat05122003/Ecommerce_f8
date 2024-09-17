import ChatBox from "@/components/ChatBox";
import WebSocketClient from "@/components/WebSocketClient";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Header = dynamic(() => import("@/components/Header"), { ssr: false });

const ListFilters = dynamic(() => import("@/components/ListFilters"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="px-4">
      <Header />
      <div className="main mt-[26px] ">
        <div className="mt-10 hidden xl:block">
          <ListFilters />
        </div>
        <ChatBox />
        <Footer />
        <WebSocketClient />
      </div>
    </main>
  );
}

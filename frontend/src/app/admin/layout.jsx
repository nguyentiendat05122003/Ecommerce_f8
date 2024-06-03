import WebSocketClient from "@/components/WebSocketClient";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function AdminLayout({ children }) {
  return (
    <DefaultLayout>
      <main>{children}</main>
      <WebSocketClient />
    </DefaultLayout>
  );
}

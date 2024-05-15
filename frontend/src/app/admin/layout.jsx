import DefaultLayout from "@/components/layout/DefaultLayout";

export default function AdminLayout({ children }) {
  return (
    <DefaultLayout>
      <main>{children}</main>
    </DefaultLayout>
  );
}

import DefaultLayout from "@/components/layout/DefaultLayout";

export default function DashboardLayout({ children }) {
  return (
    <DefaultLayout>
      <main>{children}</main>
    </DefaultLayout>
  );
}

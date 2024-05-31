import DefaultLayout from "@/components/layout/DefaultLayout";

export default function ProductLayout({ children }) {
  return (
    <DefaultLayout>
      <main>{children}</main>
    </DefaultLayout>
  );
}

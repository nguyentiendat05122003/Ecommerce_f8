import DefaultLayout from "@/components/layout/DefaultLayout";

export default function layout({ children }) {
  return (
    <DefaultLayout>
      <main>{children}</main>
    </DefaultLayout>
  );
}

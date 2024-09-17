import MainProfileInfo from "@/app/admin/dashboard/_components/MainProfileInfo";
import SalesStats from "@/app/admin/dashboard/_components/SalesStats";

export default function Dashboard() {
  return (
    <div className="grid gap-[26px]">
      <MainProfileInfo />
      <SalesStats />
    </div>
  );
}

import MainProfileInfo from "@/app/admin/dashboard/_components/MainProfileInfo";
import SalesStats from "@/app/admin/dashboard/_components/SalesStats";
import TotalReport from "@/app/admin/dashboard/_components/TotalReport";

export default function Dashboard() {
  return (
    <div className="grid gap-[26px] grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-[minmax(0,_951px)_minmax(0,_1fr)]">
      <MainProfileInfo />
      <SalesStats />
      <TotalReport />
    </div>
  );
}

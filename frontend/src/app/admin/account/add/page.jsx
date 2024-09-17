import AddAccountForm from "@/app/admin/account/components/AddAccountForm";
import PageHeader from "@/components/PageHeader";
export default function AddProduct() {
  return (
    <div>
      <PageHeader title="Thêm tài khoản" />
      <div className="bg-widget rounded-md  drop-shadow-main p-[26px]">
        <h5 className="mb-[15px] text-header text-xl font-bold">
          Thông tin tài khoản
        </h5>
        <AddAccountForm />
      </div>
    </div>
  );
}

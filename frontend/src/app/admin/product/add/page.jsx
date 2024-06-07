import AddProductForm from "@/app/admin/product/_components/AddProductForm";
import PageHeader from "@/components/PageHeader";
export default function AddProduct() {
  return (
    <div>
      <PageHeader title="Thêm sản phẩm" />
      <div className="bg-widget rounded-md  drop-shadow-main p-[26px]">
        <h5 className="mb-[15px] text-header text-xl font-bold">
          Thông tin sản phẩm
        </h5>
        <AddProductForm />
      </div>
    </div>
  );
}

import TypeProductApiRequest from "@/apiRequests/typeProduct";
import ItemTypeProduct from "@/components/ItemTypeProduct";

export default async function ListTypeProduct() {
  const { data } = await TypeProductApiRequest.getAllTypeProduct();
  return (
    <div className="mt-3 flex gap-[10px] items-center justify-start">
      {data.map((item, idx) => (
        <ItemTypeProduct key={idx} item={item} />
      ))}
    </div>
  );
}
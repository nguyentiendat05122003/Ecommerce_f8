import BrandApiRequest from "@/apiRequests/brand";
import BrandItem from "@/components/BrandItem";

export default async function ListBrand() {
  const { data } = await BrandApiRequest.getAllBrands();
  return (
    <div className="mt-5">
      <div className="flex gap-4">
        {data.map((item, idx) => (
          <BrandItem key={idx} image={item.thumb} />
        ))}
      </div>
    </div>
  );
}

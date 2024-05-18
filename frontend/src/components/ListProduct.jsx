import ProductItem from "@/components/ProductItem";

export default function ListProduct({ data }) {
  return (
    <div className="flex-1">
      <div
        className="min-h-[290px] grid gap-[26px] mt-2 mb-[30px] sm:grid-cols-2 md:grid-cols-3 md:mt-7
         lg:grid-cols-5 2xl:grid-cols-6 "
      >
        {data.map((item, idx) => (
          <ProductItem item={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

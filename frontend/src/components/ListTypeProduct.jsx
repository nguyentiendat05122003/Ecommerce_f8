import TypeProductApiRequest from "@/apiRequests/typeProduct";
import ItemTypeProduct from "@/components/ItemTypeProduct";
import { useEffect, useState } from "react";

export default function ListTypeProduct({ onClick }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await TypeProductApiRequest.getAllTypeProduct();
      setData(data);
    };
    fetchApi();
  }, []);

  return (
    <>
      <h6 className="text-base font-bold">Chọn theo nhu cầu</h6>
      <div className="mt-3 flex gap-[10px] items-center justify-start">
        {data &&
          data.map((item, idx) => (
            <ItemTypeProduct onClick={onClick} key={idx} item={item} />
          ))}
      </div>
    </>
  );
}

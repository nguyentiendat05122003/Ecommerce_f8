"use client";
import ListCompare from "@/components/ListCompare";
import { formatPrice } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function ProductItem({ item }) {
  const { _id, name, price, screenSize, screenResolution, cpu, thumbs } = item;

  return (
    <div className="d-flex flex-col relative">
      <Link
        prefetch={true}
        href={`products/${_id}`}
        className="card flex flex-col h-full p-[26px] bg-widget drop-shadow-main rounded-[6px] transition-all"
      >
        <div className="mb-2.5 ">
          <div className="img-wrapper border-solid border-min border-border">
            <Image
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "6px",
                objectFit: "contain",
              }}
              className=""
              width={100}
              height={100}
              src={thumbs[0].thumb_url}
              alt="test"
            />
          </div>
        </div>
        <h6 className="text-base line-clamp-3 font-bold text-input leading-[1.4] max-w-[180px] transition-all hover:text-accent">
          {name}
        </h6>
        <div className="price flex items-center gap-2">
          <p className="font-normal text-sm line-through">12.690.000₫</p>
          <p className="font-normal text-[15px]">-23%</p>
        </div>
        <p className="font-bold text-base leading-[1.4] text-accent">
          {formatPrice(price)}đ
        </p>
        <div className="flex">
          <Star size={18} fill="#F8D518" strokeWidth={0} />
          <Star size={18} fill="#F8D518" strokeWidth={0} />
          <Star size={18} fill="#F8D518" strokeWidth={0} />
          <Star size={18} fill="#F8D518" strokeWidth={0} />
          <StarHalf size={18} fill="#F8D518" strokeWidth={0} />
        </div>
        <div className="desc flex flex-col mt-[7px] gap-1">
          <p className="font-light text-xs ">
            Màn hình: {screenSize?.size}", {screenResolution?.value}
          </p>
          <p className="font-light text-xs ">CPU: {cpu.value}</p>
          <p className="font-light text-xs ">Card: Intel UHD</p>
          <p className="font-light text-xs ">Pin: 42 Wh</p>
          <p className="font-light text-xs ">Khối lượng: 1.58 kg</p>
        </div>
      </Link>
      <ListCompare item={item} />
    </div>
  );
}

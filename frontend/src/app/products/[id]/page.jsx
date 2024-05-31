import productApiRequest from "@/apiRequests/product";
import ButtonAddToCart from "@/app/products/_components/ButtonAddToCart";
import ButtonBuyNow from "@/app/products/_components/ButtonBuyNow";
import Comment from "@/app/products/_components/Comment";
import InfoDetail from "@/app/products/_components/InfoDetail";
import InfoProduct from "@/app/products/_components/InfoProduct";
import Insurance from "@/app/products/_components/Insurance";
import Promotion from "@/app/products/_components/Promotion";
import Review from "@/app/products/_components/Review";
import Slider from "@/app/products/_components/Slider";
import ListCompare from "@/components/ListCompare";
import RatingStart from "@/components/RatingStart";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { LocateFixed } from "lucide-react";
export default async function ProductDetail({ params }) {
  const { data } = await productApiRequest.getProduct(params.id);
  const {
    _id,
    name,
    thumbs,
    detailImages,
    price,
    ratingsAverage,
    reviews,
    comments,
    disk,
    cpu,
    ram,
    screen,
    specialFeatures,
    detailProduct,
    card,
  } = data;
  return (
    <div>
      <div className="flex items-center justify-between pt-[10px] pb-[15px] mb-[16px] min-h-[57px] mt-5 border-b-[1px] border-solid border-inputBorder">
        <h1 className="text-lg max-w-[65%]">{name}</h1>
        <div className="flex items-center justify-between gap-3">
          <div className="sm:flex hidden">
            <RatingStart number={ratingsAverage} />
          </div>
          <p className="md:block hidden font-bold text-sm leading-[1.4] text-accent">
            32 rating
          </p>
          <span className="md:block hidden">|</span>
          <p className="md:block hidden font-bold text-sm leading-[1.4] text-accent">
            {comments.length} Hỏi & đáp
          </p>
          <ListCompare
            customClassName="hidden xl:flex  items-center font-bold text-sm leading-[1.4] text-accent gap-1"
            item={data}
          />
        </div>
      </div>
      <div className="flex">
        <div className="hidden xl:w-[50%] xl:block">
          {/* Slider */}
          <Slider detailImages={detailImages} />
          {/* info */}
          <InfoProduct />
          {/* Assurance */}
          <Insurance />
        </div>
        <div className="flex-1">
          <div className="price flex items-center gap-2">
            <h2 className="text-accent font-bold text-2xl">
              {formatPrice(price)}đ
            </h2>
            <h3 className="font-normal line-through text-sm">13.290.000 ₫</h3>
            <h3 className="font-normal text-sm text-red">-20%</h3>
          </div>
          <Promotion />
          <div className="location mt-3 flex items-center gap-1">
            <LocateFixed size={18} />
            <p className="font-normal text-xs ">
              <span className="font-bold text-[12px] leading-[1.4] cursor-pointer text-accent transition-all hover:underline">
                Chọn địa chỉ nhận hàng
              </span>{" "}
              để biết thời gian giao.
            </p>
          </div>
          <div className="btn mt-4 flex gap-3">
            <ButtonBuyNow product={data} />
            <ButtonAddToCart productId={_id} />
          </div>
          <InfoDetail
            disk={disk}
            cpu={cpu}
            ram={ram}
            screen={screen}
            specialFeatures={specialFeatures}
            detailProduct={detailProduct}
            card={card}
          />
        </div>
      </div>
      <Review review={reviews} idProduct={_id} />
      <Comment listComments={comments} productId={_id} />
    </div>
  );
}

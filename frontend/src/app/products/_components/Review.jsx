"use client";
import reviewApiRequest from "@/apiRequests/reviews";
import Message from "@/components/Message";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { RATING } from "@/constants";
import { formatTimeMessage } from "@/lib/utils";
import { ReviewBody } from "@/schemaValidations/review.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import reviewImage from "../../assets/img/icons/review.png";
import test from "../../assets/img/other/review.jpg";
import paymentApiRequest from "@/apiRequests/payment";

export default function Review({ review, idProduct, ratingsAverage }) {
  const form = useForm({
    resolver: zodResolver(ReviewBody),
    defaultValues: {
      review: "",
      rating: 5,
    },
  });
  const [rating, setRating] = useState(RATING);
  const [user, setUser] = useState();
  const [baseReview, setBaseReview] = useState(review);
  const [listRating, setListRating] = useState(review);
  const [listPayment, setListPayment] = useState([]);
  const [tab, setTab] = useState("all");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    const fetchApi = async () => {
      const { data } = await paymentApiRequest.getAllPayment();
      setListPayment(data);
    };
    fetchApi();
  }, []);
  const router = useRouter();
  const onTabChange = (value) => {
    setTab(value);
    if (value === "all") {
      setListRating(baseReview);
    } else {
      setListRating(() => {
        const newListReview = baseReview?.filter(
          (item) => item.rating == value
        );
        if (newListReview?.length === 0) {
          return [];
        }
        return newListReview;
      });
    }
  };
  const handleRating = (id) => {
    setRating((prev) => {
      const newRating = prev.map((item) => {
        if (item.id <= id) {
          return { ...item, active: true };
        } else {
          delete item["active"];
          return item;
        }
      });
      return newRating;
    });
  };
  const onSubmit = async (values) => {
    //check reviewed
    const reviews = listRating.filter((item) => item.user._id === user._id);
    if (reviews.length > 0) {
      toast({
        title: "Cảnh báo",
        description: "Bạn đã đánh giá mặt hàng này",
        variant: "warning",
        duration: 2000,
      });
      return;
    }
    //check payment
    const userId = user._id;
    const isBought = await paymentApiRequest.checkUserPurchase(
      userId,
      idProduct
    );
    if (isBought) {
      const lengthRating = rating.filter((item) => item.active).length;
      const ratingValue = lengthRating === 0 ? 5 : lengthRating;
      values = {
        ...values,
        rating: ratingValue,
        user: userId,
        product: idProduct,
      };
      async function fetchData() {
        const { data } = await reviewApiRequest.createReview(values);
        setBaseReview((prev) => {
          setListRating([...prev, data]);
          return [...prev, data];
        });
        onTabChange("all");
        router.refresh();
      }
      fetchData();
      form.reset();
      setRating(RATING);
    } else {
      toast({
        title: "Lỗi",
        description: "Bạn có thể đánh giá sau khi mua hàng",
        variant: "error",
        duration: 2000,
      });
    }
  };
  const handleDeleteReview = async (id) => {
    await reviewApiRequest.deleteReview(id);
    setBaseReview((prev) => prev.filter((item) => item._id !== id));
    setListRating((prev) => prev.filter((item) => item._id !== id));
    toast({
      title: "Thông báo",
      description: "Xóa bài đánh giá thành công",
      variant: "success",
      duration: 2000,
    });
  };
  const calculateProgressValue = (rating) => {
    const totalReviews = listRating.length;
    const ratingCount = listRating.filter(
      (review) => review.rating === rating
    ).length;
    return (ratingCount / totalReviews) * 100;
  };
  const renderProgressComponents = () => {
    const progressComponents = [];
    for (let rating = 5; rating >= 1; rating--) {
      const progressValue = calculateProgressValue(rating);
      progressComponents.push(
        <div className="flex items-center gap-1" key={rating}>
          <span>{rating}</span>
          <Star color="#F8D518" fill="#F8D518" size={12} />
          <Progress className="max-w-[280px]" value={progressValue} />
        </div>
      );
    }

    return progressComponents;
  };
  return (
    <div className="w-full card mt-10 flex gap-3 flex-col px-[20px] py-[15px] bg-widget drop-shadow-main rounded-[6px] transition-all">
      <div className=" py-[10px] border-solid border-b-min border-accent">
        <h4 className="text-base">Đánh giá sản phẩm</h4>
      </div>
      <div
        className={`${
          baseReview?.length > 0 ? "grid grid-cols-3 items-center" : ""
        }`}
      >
        {baseReview?.length > 0 ? (
          <>
            <div className="flex flex-col items-center gap-1">
              <p className="text-header text-base font-normal">
                Đánh Giá Trung Bình
              </p>
              <h1 className="text-red text-bold text-[40px]">
                {ratingsAverage}/5
              </h1>
              <div className="flex items-center">
                <Star color="#F8D518" fill="#F8D518" size={14} />
                <Star color="#F8D518" fill="#F8D518" size={14} />
                <Star color="#F8D518" fill="#F8D518" size={14} />
                <Star color="#F8D518" fill="#F8D518" size={14} />
                <Star color="#F8D518" fill="#F8D518" size={14} />
              </div>
              <span className="text-gray text-sm ">
                {review.length} đánh giá
              </span>
            </div>
            <div className="flex flex-col gap-1">
              {renderProgressComponents()}
            </div>
          </>
        ) : (
          <>
            <div className="p-[24px] flex flex-col items-center justify-center ">
              <Image className=" w-[126px]" src={reviewImage} alt="review" />
            </div>
          </>
        )}
        <div className="flex flex-col items-center">
          <div className="text-md font-medium text-center">
            {baseReview?.length > 0
              ? "Bạn đã dùng sản phẩm này?"
              : "Hãy là người đầu tiên đánh giá sản phẩm này"}
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="m-auto hover:bg-red max-w-[138px] mt-[8px] bg-red text-white dark:text-[#00193B] h-[36px] px-[16px] ">
                GỬI ĐÁNH GIÁ
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Đánh Giá Sản Phẩm</DialogTitle>
              </DialogHeader>
              <Image
                src={test}
                className="max-w-[100px] mx-auto rounded"
                alt="test"
              />
              <h3 className="text-center text-base font-semibold">
                Laptop MSI Modern 14 C11M i3 1115G4/8GB/512GB/Win11 (011VN)
              </h3>
              <ul className="flex items-center justify-center mt-[20px] gap-2">
                {rating.map((item, index) => {
                  return (
                    <li
                      onClick={() => {
                        handleRating(item.id);
                      }}
                      key={item.id}
                      className="flex flex-col items-center"
                    >
                      <Star
                        color="#F8D518"
                        fill={item.active ? "#F8D518" : "transparent"}
                        strokeWidth={0.75}
                      />
                      <p
                        className={`text-xs font-bold ${
                          item.active ? "text-[#F8D518]" : ""
                        }`}
                      >
                        {item.value}
                      </p>
                    </li>
                  );
                })}
              </ul>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="review"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Hãy chia sẻ cảm nhận của bạn về sản phẩm..."
                          />
                        </FormControl>
                        <FormMessage className="mt-1 text-xs text-red" />
                      </FormItem>
                    )}
                  />
                  <DialogClose
                    type="submit"
                    className="bg-[#0071e3] px-4 py-2 rounded text-xs font-bold mt-4 float-right cursor-default text-white hover:bg-[#0071e3]"
                  >
                    Gửi đánh giá
                  </DialogClose>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="w-ful border-t-min border-solid border-accent mt-2">
        <div className="flex items-start w-full py-[15px] gap-2">
          <p className="text-sm font-normal block text-header mt-2 min-w-[100px]">
            Lọc xem theo:
          </p>
          <Tabs value={tab} onValueChange={onTabChange} className="w-full">
            <TabsList>
              <TabsTrigger value="all">Tất cả</TabsTrigger>
              <TabsTrigger value="5">5 sao</TabsTrigger>
              <TabsTrigger value="4">4 sao</TabsTrigger>
              <TabsTrigger value="3">3 sao</TabsTrigger>
              <TabsTrigger value="2">2 sao</TabsTrigger>
              <TabsTrigger value="1">1 sao</TabsTrigger>
            </TabsList>
            <TabsContent className="w-full min-h-[160px]" value={tab}>
              {listRating?.length > 0 ? (
                listRating.map((item, idx) => {
                  return (
                    <Message
                      reviewId={item._id}
                      key={idx}
                      name={user?.name || user?.email}
                      message={item.review}
                      time={formatTimeMessage(item.createdAt)}
                      ratingNumber={item.rating}
                      avatar={item?.user?.photo || user.photo}
                      isDelete={(item.user?._id || item.user) === user?._id}
                      onDelete={handleDeleteReview}
                    />
                  );
                })
              ) : (
                <>
                  <div className="p-[24px] flex flex-col items-center justify-center ">
                    <Image
                      className=" w-[126px]"
                      src={reviewImage}
                      alt="review"
                    />
                  </div>
                  <div className="text-md font-medium text-center">
                    Không tìm thấy đánh giá phù hợp
                  </div>
                </>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

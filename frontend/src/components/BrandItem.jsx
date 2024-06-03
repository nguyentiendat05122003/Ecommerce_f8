import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
export default function BrandItem({ image }) {
  return (
    <>
      <Badge
        variant="outline"
        className=" cursor-pointer min-h-[36px] w-[120px] max-w-[120px] flex justify-center border-min border-solid border-accent"
      >
        <Link href="/" className="">
          <Image
            style={{ width: "100%", height: "auto" }}
            className=""
            width={30}
            height={30}
            src={image}
            alt="logo"
          />
        </Link>
      </Badge>
    </>
  );
}

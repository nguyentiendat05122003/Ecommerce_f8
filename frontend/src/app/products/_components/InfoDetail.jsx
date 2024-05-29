import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import test from "../../../app/assets/img/other/test.jpg";
export default function InfoDetail({
  disk,
  cpu,
  ram,
  screen,
  specialFeatures,
  detailProduct,
  card,
}) {
  return (
    <div className="xl:max-w-[465px] w-full mt-4 px-[20px] py-[15px] bg-widget drop-shadow-main rounded-[6px] ">
      <Table>
        <TableCaption>
          <Sheet key="top">
            <SheetTrigger asChild>
              <p className="text-xs text-accent font-medium cursor-pointer transition-all hover:underline">
                Xem cấu hình chi tiết
              </p>
            </SheetTrigger>
            <SheetContent
              className="w-[1160px] overflow-y-auto max-h-screen m-auto"
              side="top"
            >
              <SheetHeader>
                <SheetTitle className="py-3">Thông số kỹ thuật</SheetTitle>
              </SheetHeader>
              <Image
                className="mt-2 rounded-md mx-auto"
                src={test}
                alt="test"
              />
              <Table className="max-w-[800px] mx-auto mt-8">
                <TableHeader>
                  <TableRow>
                    <TableHead className="my-5 h-10 bg-widget rounded-md mb-4  ">
                      Bộ xử lý
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="mt-1">
                  <TableRow>
                    <TableCell className="w-[250px] text-sm font-normal">
                      Công nghệ CPU:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left">
                      {`${cpu.value}, ${cpu.desc}, ${cpu.CPU_speed}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Số nhân:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left">
                      {`${cpu.number_of_cores}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Số luồng:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left">
                      {`${cpu.number_of_threads}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Tốc độ CPU:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left">
                      {`${cpu.CPU_speed}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Tốc độ tối đa:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left text-accent">
                      {`${cpu.maximum_CPU_speed}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Bộ nhớ đệm:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left">
                      {`${cpu.cache}`}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table className="max-w-[800px] mx-auto mt-8">
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="my-5 h-10 bg-widget rounded-md mb-4  ">
                      Bộ nhớ RAM, Ổ cứng
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="mt-1">
                  <TableRow>
                    <TableCell
                      colSpan={1}
                      className="w-[250px] text-sm font-normal"
                    >
                      RAM:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left text-accent">
                      {`${ram.value}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Loại RAM:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left text-accent">
                      {`${ram.typeRam.value} ${ram.typeRam.desc}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Tốc độ Bus RAM:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left">
                      {`${ram.ram_bus_speed}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Hỗ trợ RAM tối đa:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left">
                      {`${ram.maximum_supported_RAM}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Ổ cứng:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left text-accent">
                      {`${disk.value}`}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table className="max-w-[800px] mx-auto mt-8">
                <TableHeader>
                  <TableRow>
                    <TableHead className="my-5 h-10 bg-widget rounded-md mb-4  ">
                      Màn hình
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="mt-1">
                  <TableRow>
                    <TableCell className="w-[250px] text-sm font-normal">
                      Màn hình:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left">
                      {`${screen.screenSize.size}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Độ phân giải:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left">
                      {`${screen.screenResolution.value}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Tần số quét:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left text-accent">
                      {`${screen.screenRefreshRate.value}`}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table className="max-w-[800px] mx-auto mt-8">
                <TableHeader>
                  <TableRow>
                    <TableHead className="my-5 h-10 bg-widget rounded-md mb-4  ">
                      Đồ họa và Âm thanh
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="mt-1">
                  <TableRow>
                    <TableCell className="w-[250px] text-sm font-normal ">
                      Card màn hình:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left text-accent">
                      {`${card.value}`}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table className="max-w-[800px] mx-auto mt-8">
                <TableHeader>
                  <TableRow>
                    <TableHead className="my-5 h-10 bg-widget rounded-md mb-4  ">
                      Kích thước và khối lượng
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="mt-1">
                  <TableRow>
                    <TableCell className="w-[250px] text-sm font-normal">
                      Kích thước, khối lượng:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left">
                      {`${detailProduct.size}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Chất liệu:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left text-accent">
                      {`${detailProduct.material}`}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table className="max-w-[800px] mx-auto mt-8">
                <TableHeader>
                  <TableRow>
                    <TableHead className="my-5 h-10 bg-widget rounded-md mb-4  ">
                      Thông tin khác
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="mt-1">
                  <TableRow>
                    <TableCell className="w-[250px] text-sm font-normal">
                      Đèn bàn phím:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left">
                      {`${detailProduct.keyboard_backlight}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Thông tin Pin:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left text-accent">
                      {`${detailProduct.battery}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Công suất bộ sạc:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left">
                      {`${detailProduct.chargeCapacity}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Hệ điều hành:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left text-accent">
                      {`${detailProduct.os}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm font-normal">
                      Thời điểm ra mắt:
                    </TableCell>
                    <TableCell colSpan={1} className="text-left">
                      {`${detailProduct.launchTime}`}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </SheetContent>
          </Sheet>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-base w-[200px] mb-4">
              Thông số kỹ thuật
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">CPU:</TableCell>
            <TableCell colSpan={1} className="text-left">
              {`${cpu.value}, ${cpu.desc}, ${cpu.CPU_speed}`}
            </TableCell>
            <TableCell colSpan={3}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">RAM:</TableCell>
            <TableCell className="text-left" colSpan={4}>
              {`${ram.value}, ${ram.typeRam.desc}, ${ram.ram_bus_speed} `}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Ổ cứng:</TableCell>
            <TableCell className="text-left" colSpan={4}>
              {`${disk.value}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Màn hình:</TableCell>
            <TableCell className="text-left" colSpan={4}>
              {`${screen.screenSize.size}, ${screen.screenRefreshRate.value}, ${screen.screenResolution.value}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Card màn hình:</TableCell>
            <TableCell className="text-left" colSpan={4}>
              {`${card.value}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Hệ điều hành:</TableCell>
            <TableCell className="text-left" colSpan={4}>
              {`${detailProduct.os}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Thiết kế:</TableCell>
            <TableCell className="text-left" colSpan={4}>
              {`${detailProduct.material}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              Kích thước, khối lượng:
            </TableCell>
            <TableCell className="text-left" colSpan={4}>
              {`${detailProduct.size}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Thời điểm ra mắt:</TableCell>
            <TableCell className="text-left" colSpan={4}>
              {`${detailProduct.launchTime}`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

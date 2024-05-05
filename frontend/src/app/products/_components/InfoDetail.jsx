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
import test from "../../../app/img/other/test.jpg";
export default function InfoDetail() {
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
                    <TableHead className="my-5 h-10 bg-widget rounded-md mb-4 drop-shadow-main">
                      Bộ xử lý
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="mt-1">
                  <TableRow>
                    <TableCell className="text-xs font-bold">CPU</TableCell>
                    <TableCell colSpan={1} className="text-left">
                      i3, 1115G4, 3GHz
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
            <TableCell className="font-medium">CPU</TableCell>
            <TableCell colSpan={1} className="text-left">
              i3, 1115G4, 3GHz
            </TableCell>
            <TableCell colSpan={3}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Màn hình</TableCell>
            <TableCell className="text-left" colSpan={4}>
              14 inch, 1920 x 1080 Pixels, IPS, 60, Anti-Glare
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

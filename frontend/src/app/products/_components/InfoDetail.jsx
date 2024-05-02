import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function InfoDetail() {
  return (
    <div className="xl:max-w-[465px] w-full mt-4 px-[20px] py-[15px] bg-widget drop-shadow-main rounded-[6px] ">
      <Table>
        <TableCaption>
          <p className="text-xs text-accent font-medium cursor-pointer transition-all hover:underline">
            Xem cấu hình chi tiết
          </p>
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

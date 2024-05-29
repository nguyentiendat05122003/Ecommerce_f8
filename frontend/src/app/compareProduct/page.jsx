"use client";
import RatingStart from "@/components/RatingStart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/lib/hook";
import { formatPrice } from "@/lib/utils";
import { CircleChevronDown, Plus, Star } from "lucide-react";
import Image from "next/image";
export default function CompareProductPage() {
  const listProductCompare = useAppSelector(
    (state) => state.listProductCompare.listProduct
  );
  return (
    <>
      <ul className="grid grid-cols-4 mt-[30px] drop-shadow-main bg-widget rounded">
        <li className="border-r-min border-solid p-4 border-inputBorder">
          <p className="text-base text-header font-normal">So sánh sản phẩm</p>
          <div className="font-bold flex flex-col gap-4 text-base mt-[10px] uppercase text-accent">
            {listProductCompare.map((item, index) => {
              return (
                <p
                  className={`${
                    item.name && index
                      ? "before:content-['&'] before:block before:mb-1 before:text-header"
                      : ""
                  } line-clamp-4`}
                  key={index}
                >
                  {item.name}
                </p>
              );
            })}
          </div>
        </li>
        {listProductCompare.map((item, idx) => {
          if (item.name) {
            return (
              <li
                key={idx}
                className="m-auto border-min border-b-0 border-l-0 border-solid p-4 border-inputBorder flex flex-col items-center gap-1 "
              >
                <Image
                  width={250}
                  height={100}
                  className="max-w-[275px] rounded"
                  src={item.thumbs[0].thumb_url}
                  alt="test"
                />
                <h3 className="text-sm text-center line-clamp-2 text-header p-l-[15px] p-b-[3px] ">
                  {item.name}
                </h3>
                <div className="flex gap-2">
                  <p className="line-through font-normal text-xs text-[#999] m-r-[5px]">
                    10.990.000₫
                  </p>
                  <span className="text-xs m-r-[5px] ">-19%</span>
                </div>
                <span className="font-bold text-sm text-accent ">
                  {formatPrice(item.price)}
                </span>
                <div className="flex items-center gap-1">
                  <RatingStart number={item.ratingsAverage} />
                </div>
              </li>
            );
          } else {
            return (
              <li
                key={idx}
                className="border-min border-b-0 border-l-0 border-solid p-4 border-inputBorder flex flex-col gap-2 "
              >
                <div className="flex w-full h-full items-center justify-center flex-col gap-1">
                  <div className="w-[60px] h-[60px] border-min border-dashed border-inputBorder flex items-center justify-center">
                    <Plus color="#2f80ed" />
                  </div>
                  <p className="font-normal text-xs">Thêm sản phẩm</p>
                </div>
              </li>
            );
          }
        })}
      </ul>
      <Accordion
        type="single"
        collapsible
        defaultValue="open"
        className="w-full"
      >
        <AccordionItem value="open">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <CircleChevronDown size={18} />
              <p className="uppercase text-xs font-bold">So sánh nhanh</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="grid grid-cols-4 mt-[10px]   drop-shadow-main bg-widget rounded border-min border-solid border-inputBorder">
              <li className="border-r-min border-solid p-4 border-inputBorder">
                <p className="px-[10px] py-3 text-sm font-normal">
                  So sánh nhanh
                </p>
              </li>
              {listProductCompare.map((item, idx) => {
                const { cpu, disk, ram, screen, card } = item;
                if (item.cpu) {
                  return (
                    <li
                      key={idx}
                      className="border-r-min ml-3 border-solid p-4 border-inputBorder"
                    >
                      <ul className="list-disc">
                        <li className="px-[10px] py-3 text-sm font-normal">
                          CPU: {`${cpu.value}, ${cpu.desc}, ${cpu.CPU_speed}`}
                        </li>
                        <li className="px-[10px] py-3 text-sm font-normal">
                          RAM:{" "}
                          {`${ram.value}, ${ram.typeRam.value} ${ram.typeRam.desc}`}
                        </li>
                        <li className="px-[10px] py-3 text-sm font-normal">
                          Ổ cứng: {`${disk.value}`}
                        </li>
                        <li className="px-[10px] py-3 text-sm font-normal">
                          Màn hình: {`${screen.screenSize.size}`}
                        </li>
                        <li className="px-[10px] py-3 text-sm font-normal">
                          Card màn hình: {`${card.value}`}
                        </li>
                      </ul>
                    </li>
                  );
                }
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        defaultValue="open"
        className="w-full"
      >
        <AccordionItem value="open">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <CircleChevronDown size={18} />
              <p className="uppercase text-xs font-bold">BỘ XỬ LÝ</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Table className="mx-auto mt-2 bg-widget border border-solid border-accent">
              <TableBody className="mt-1 w-full">
                <TableRow>
                  <TableCell className="w-[311px] text-sm font-normal border-b border-r border-solid border-accent">
                    Công nghệ CPU:
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { cpu } = item;
                    if (cpu) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${cpu.value}, ${cpu.desc}, ${cpu.CPU_speed}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-normal border-b border-r border-solid border-accent">
                    Loại CPU:
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { cpu } = item;
                    if (cpu) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${cpu.desc}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-normal border-b border-r border-solid border-accent">
                    Số nhân:
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { cpu } = item;
                    if (cpu) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${cpu.number_of_cores}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-normal border-b border-r border-solid border-accent">
                    Số luồng:
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { cpu } = item;
                    if (cpu) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${cpu.number_of_threads}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-normal border-b border-r border-solid border-accent">
                    Tốc độ CPU:
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { cpu } = item;
                    if (cpu) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${cpu.CPU_speed}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-normal border-b border-r border-solid border-accent">
                    Tốc độ tối đa:
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { cpu } = item;
                    if (cpu) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${cpu.maximum_CPU_speed}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-normal border-b border-r border-solid border-accent">
                    Bộ nhớ đệm:
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { cpu } = item;
                    if (cpu) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${cpu.cache}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        defaultValue="open"
        className="w-full"
      >
        <AccordionItem value="open">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <CircleChevronDown size={18} />
              <p className="uppercase text-xs font-bold">BỘ NHỚ RAM, Ổ CỨNG</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Table className="mx-auto mt-2 bg-widget border border-solid border-accent">
              <TableBody className="mt-1 w-full">
                <TableRow>
                  <TableCell className="w-[311px] text-sm font-normal border-b border-r border-solid border-accent">
                    RAM
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { ram } = item;
                    if (ram) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${ram.value}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-normal border-b border-r border-solid border-accent">
                    Loại RAM
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { ram } = item;
                    if (ram) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${ram.value}, ${ram.typeRam.value} ${ram.typeRam.desc}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-normal border-b border-r border-solid border-accent">
                    Tốc độ Bus RAM
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { ram } = item;
                    if (ram) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${ram.ram_bus_speed}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-normal border-b border-r border-solid border-accent">
                    Hỗ trợ RAM tối đa
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { cpu } = item;
                    if (cpu) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${cpu.maximum_supported_RAM}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-normal border-b border-r border-solid border-accent">
                    Ổ cứng
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { disk } = item;
                    if (disk) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${disk.value}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        defaultValue="open"
        className="w-full"
      >
        <AccordionItem value="open">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <CircleChevronDown size={18} />
              <p className="uppercase text-xs font-bold">MÀN HÌNH</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Table className="mx-auto mt-2 bg-widget border border-solid border-accent">
              <TableBody className="mt-1 w-full">
                <TableRow>
                  <TableCell className="w-[311px] text-sm font-normal border-b border-r border-solid border-accent">
                    Màn hình
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { screen } = item;
                    if (screen) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${screen.screenSize.size}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-normal border-b border-r border-solid border-accent">
                    Độ phân giải
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { screen } = item;
                    if (screen) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${screen.screenResolution.value}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-normal border-b border-r border-solid border-accent">
                    Tần số quét
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { screen } = item;
                    if (screen) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${screen.screenRefreshRate.value}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-normal border-b border-r border-solid border-accent">
                    Công nghệ màn hình
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { screen } = item;
                    if (screen) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        ></TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        defaultValue="open"
        className="w-full"
      >
        <AccordionItem value="open">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <CircleChevronDown size={18} />
              <p className="uppercase text-xs font-bold">ĐỒ HỌA VÀ ÂM THANH</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Table className="mx-auto mt-2 bg-widget border border-solid border-accent">
              <TableBody className="mt-1 w-full">
                <TableRow>
                  <TableCell className="w-[311px] text-sm font-normal border-b border-r border-solid border-accent">
                    Card đồ họa
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { card } = item;
                    if (card) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${card.value}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        defaultValue="open"
        className="w-full"
      >
        <AccordionItem value="open">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <CircleChevronDown size={18} />
              <p className="uppercase text-xs font-bold">
                KÍCH THƯỚC & KHỐI LƯỢNG
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Table className="mx-auto mt-2 bg-widget border border-solid border-accent">
              <TableBody className="mt-1 w-full">
                <TableRow>
                  <TableCell className="w-[311px] text-sm font-normal border-b border-r border-solid border-accent">
                    Nặng
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { detailProduct } = item;
                    if (detailProduct) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${detailProduct.size}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="w-[311px] text-sm font-normal border-b border-r border-solid border-accent">
                    Chất liệu
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { detailProduct } = item;
                    if (detailProduct) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${detailProduct.material}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        defaultValue="open"
        className="w-full"
      >
        <AccordionItem value="open">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <CircleChevronDown size={18} />
              <p className="uppercase text-xs font-bold">THÔNG TIN KHÁC</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Table className="mx-auto mt-2 bg-widget border border-solid border-accent">
              <TableBody className="mt-1 w-full">
                <TableRow>
                  <TableCell className="w-[311px] text-sm font-normal border-b border-r border-solid border-accent">
                    Thông tin Pin
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { detailProduct } = item;
                    if (detailProduct) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${detailProduct.battery}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="w-[311px] text-sm font-normal border-b border-r border-solid border-accent">
                    Công suất bộ sạc
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { detailProduct } = item;
                    if (detailProduct) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${detailProduct.chargeCapacity}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="w-[311px] text-sm font-normal border-b border-r border-solid border-accent">
                    Hệ điều hành
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { detailProduct } = item;
                    if (detailProduct) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${detailProduct.os}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
                <TableRow>
                  <TableCell className="w-[311px] text-sm font-normal border-b border-r border-solid border-accent">
                    Thời điểm ra mắt
                  </TableCell>
                  {listProductCompare.map((item, idx) => {
                    const { detailProduct } = item;
                    if (detailProduct) {
                      return (
                        <TableCell
                          key={idx}
                          colSpan={1}
                          className="text-left border-b w-[310px] border-r border-solid border-accent"
                        >
                          {`${detailProduct.launchTime}`}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={idx}
                        colSpan={1}
                        className="text-left border-b border-r border-solid border-accent"
                      ></TableCell>
                    );
                  })}
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <ul className="grid grid-cols-4 mt-[30px] drop-shadow-main bg-widget rounded">
        <li className=" p-4 ">
          <div className="font-bold flex flex-col gap-4 text-base mt-[10px] uppercase text-accent"></div>
        </li>
        {listProductCompare.map((item, idx) => {
          if (item.name) {
            return (
              <>
                <li key={idx} className=" p-4  flex flex-col gap-2 ">
                  <Button className="text-white dark:text-[#00193B] flex-1 hover:bg-[#02A189] bg-[#00BA9D] border-min border-solid border-[#01C8A9] text-sm font-semibold">
                    Mua ngay
                  </Button>
                </li>
              </>
            );
          } else {
            return (
              <li key={idx} className=" p-4  flex flex-col gap-2 ">
                <div className="flex w-full h-full items-center justify-center flex-col gap-1"></div>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}

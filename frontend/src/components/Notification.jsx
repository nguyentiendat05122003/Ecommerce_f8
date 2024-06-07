"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { socket } from "@/socket";
import {
  fetchAddNotifications,
  fetchNotifications,
} from "@/lib/features/listNotificationSlice";
import { formatTimeMessage } from "@/lib/utils";
import Link from "next/link";

export default function Notification() {
  const { listNotification } = useSelector((state) => state.notification);
  const [isAdmin, setIsAdmin] = useState();
  const buttonRef = useRef();
  useEffect(() => {
    setIsAdmin(JSON.parse(localStorage.getItem("user")).role === "admin");
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotifications());
    const handleNotification = (data) => {
      handlePlayAudio(data);
      dispatch(fetchAddNotifications(data));
    };
    const handleNotificationDestroy = (data) => {
      handlePlayAudio();
      dispatch(fetchAddNotifications(data));
    };
    socket.on("getNotification", handleNotification);
    socket.on("getPaymentDestroy", handleNotificationDestroy);
    return () => {
      socket.off("getNotification", handleNotification);
      socket.off("getPaymentDestroy", handleNotificationDestroy);
    };
  }, [dispatch]);
  const handlePlayAudio = (data) => {
    const audio = new Audio("/notification.mp3");
    audio.play();
  };
  return (
    <>
      {isAdmin && (
        <Sheet className="!opacity-80 bg-widget drop-shadow-main">
          <SheetTrigger asChild>
            <div className="relative h-fit xl:mr-1.5">
              <Button
                className="hover:bg-transparent leading-none text-gray dark:text-gray-red xl:text-[20px]"
                variant="ghost"
                size="icon"
              >
                <Bell />
                <span className="absolute w-3 h-3 rounded-full bg-red top-0 -right-0 border-[2px]  border-background xl:w-6 xl:h-6 xl:-top-2 xl:-right-2 xl:flex xl:items-center xl:justify-center">
                  <span className="hidden text-xs font-bold xl:block text-white dark:text-[#00193B]">
                    {listNotification.length}
                  </span>
                </span>
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent className="bg-widget w-[342px]">
            <SheetHeader className="pb-4">
              <SheetTitle>
                <span className="text-header">Thông báo</span>
                <button
                  ref={buttonRef}
                  onClick={handlePlayAudio}
                  className=""
                ></button>
              </SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            {listNotification.length > 0 ? (
              listNotification.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex gap-2.5 items-start border-b-min border-solid border- mt-2 mx-[10px] pb-[30px]"
                  >
                    <div className="mt-2">
                      <Image
                        className="w-full h-[36px] rounded"
                        src={item.sender.photo}
                        alt="avatar"
                        width={36}
                        height={36}
                      />
                    </div>
                    <div>
                      <span className="text-sm text-header font-bold  max-w-[210px]">
                        {item.sender.name || item.sender.email}
                      </span>
                      <p className="text-base font-normal">{item.content}</p>
                      <p className="flex items-center gap-1.5 mt-1 mb-2">
                        <span className="text-xs font-medium text-gray">
                          {formatTimeMessage(item.createdAt)}
                        </span>
                      </p>
                      <div className="flex items-center gap-2.5">
                        <Link href={`/admin/payment/edit/${item.payment}`}>
                          <SheetClose>
                            <div className="border-min border-solid border-accent h-[26px] min-w-[83px] flex items-center px-[10px] text-accent text-xs font-normal rounded-[23px]">
                              Xem chi tiết
                            </div>
                          </SheetClose>
                        </Link>
                        <button className="border-min border-solid border-red h-[26px] min-w-[83px] px-[10px] text-red text-xs font-normal rounded-[23px]">
                          Bỏ qua
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <span>Không có thông báo mới</span>
              </>
            )}
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}

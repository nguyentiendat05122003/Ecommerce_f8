"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
export default function CustomDeleteDialog({
  Component,
  title = "",
  desc = "",
  onClick,
}) {
  const handleClick = () => {
    onClick();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{Component}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{desc}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:bg-red outline-none border-none">
            Thoát
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleClick}
            className="bg-green hover:bg-green"
          >
            Đồng ý
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "@/components/ui/use-toast";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatFilterFollow = ({ title, activeData }) => {
  const valueActive = activeData.join(" | ");
  return title + " : " + valueActive;
};

export const normalizePath = (path) => {
  return path.startsWith("/") ? path.slice(1) : path;
};

export const handleErrorApi = ({ error, setError, duration }) => {
  toast({
    title: "Lỗi",
    description: error?.payload?.message ?? "Lỗi không xác định",
    variant: "error",
    duration: duration ?? 2000,
  });
};

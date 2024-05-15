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

export const numFormatter = (num, fractionDigits = 0, prefix = "") => {
  const options = {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  };

  if (num > 999 && num < 1000000) {
    const formattedNum = (num / 1000).toLocaleString(undefined, options);
    return `${prefix}${formattedNum}k`;
  } else if (num > 1000000) {
    const formattedNum = (num / 1000000).toLocaleString(undefined, options);
    return `${prefix}${formattedNum}m`;
  } else if (num < 900) {
    return `${prefix}${num}`;
  }
};

export const commaFormatter = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

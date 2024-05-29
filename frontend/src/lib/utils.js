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
export const formatPrice = (price) => {
  const result = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  return result;
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

export const filterPropertyActive = (data) => {
  const newData = data[0].data;
  let activeObjects = [];
  newData.forEach((item) => {
    const activeData = item.data.filter((dataItem) => dataItem.active);
    if (activeData.length > 0) {
      activeObjects.push({
        title: item.title,
        id: item.id,
        activeData: activeData.map((dataItem) => dataItem.value),
      });
    }
  });
  return activeObjects;
};

export const formatTimeMessage = (value) => {
  const startTime = new Date(value);
  const endTime = new Date();
  const timeDifference = endTime - startTime;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} ngày trước`;
  } else if (hours > 0) {
    return `${hours} giờ trước`;
  } else if (minutes > 0) {
    return `${minutes} phút trước`;
  } else {
    return `${seconds} giây trước`;
  }
};

export const removeWhiteSpaces = (str) => {
  return str.replace(/\s+/g, "");
};

export const removeUsername = (str, username) => {
  const regex = new RegExp(`^${username}\\s*`);
  return str.replace(regex, "");
};

export const formatAddress = (address) => {
  return `${address.province.provinceName}, ${address.district.districtName}, ${address.ward.wardName}`;
};

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "@/components/ui/use-toast";
import queryString from "query-string";

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
        id: activeData.map((dataItem) => dataItem._id),
        name: item.name,
        activeData: activeData.map(
          (dataItem) => dataItem.value || dataItem.size || dataItem.name
        ),
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
  return `${address?.province.provinceName || ""}, ${
    address?.district.districtName || ""
  }, ${address?.ward.wardName || ""}`;
};

export const convertFiltersToQueryString = (filters) => {
  if (filters.length < 0) {
    return {};
  }
  const queryObject = {};
  filters.forEach((filter) => {
    const key = filter.name;
    if (Array.isArray(filter.id)) {
      queryObject[key] = filter.id.join(",");
    } else {
      queryObject[key] = filter.id;
    }
  });

  return queryString.stringify(queryObject);
};

export const convertTimeMessage = (createdAtString) => {
  const timeFormatRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s[APap][Mm]$/;
  if (timeFormatRegex.test(createdAtString)) {
    return createdAtString;
  }

  const createdAtUTC = new Date(createdAtString);
  const options = { hour: "numeric", minute: "numeric" };
  const localTime = createdAtUTC.toLocaleTimeString("en-US", options);
  return localTime;
};

export const handleAddMessage = (
  listMessage,
  formattedCurrentDate,
  newMessage
) => {
  const lastDayIndex = listMessage.length - 1;
  const lastDay = listMessage[lastDayIndex];
  if (lastDay && lastDay._id === formattedCurrentDate) {
    lastDay.messages.push(newMessage);
  } else {
    const newDay = {
      _id: formattedCurrentDate,
      messages: [newMessage],
    };
    listMessage.push(newDay);
  }
  return listMessage;
};

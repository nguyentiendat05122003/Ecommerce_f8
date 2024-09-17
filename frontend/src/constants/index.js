import slider1 from "../app/assets/img/slider/1.jpg";
import slider2 from "../app/assets/img/slider/2.webp";
import slider3 from "../app/assets/img/slider/3.jpg";
import sliderDeProduct1 from "../app/assets/img/products/1.webp";
import sliderDeProduct2 from "../app/assets/img/products/2.webp";
import sliderDeProduct3 from "../app/assets/img/products/3.webp";
import sliderDeProduct4 from "../app/assets/img/products/4.webp";
import sliderDeProduct5 from "../app/assets/img/products/5.webp";
import {
  Boxes,
  CircleDollarSign,
  CircleUser,
  Database,
  Filter,
  FolderInput,
  LayoutDashboard,
  Shapes,
  ShoppingCart,
  Star,
  UserRoundSearch,
} from "lucide-react";

export const SLIDERS = [
  { id: 0, src: slider1 },
  { id: 1, src: slider2 },
  { id: 2, src: slider3 },
];

export const SLIDERS_v2 = [
  { id: 0, src: sliderDeProduct1 },
  { id: 1, src: sliderDeProduct2 },
  { id: 2, src: sliderDeProduct3 },
  { id: 3, src: sliderDeProduct4 },
  { id: 4, src: sliderDeProduct5 },
];
export const DATA = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
];

export const DISK = [
  { id: 0, value: "120GB" },
  { id: 1, value: "128GB" },
  { id: 2, value: "256GB" },
  { id: 3, value: "512GB" },
  { id: 4, value: "1TB" },
];

export const RAM = [
  { id: 0, value: "4GB" },
  { id: 1, value: "8GB" },
  { id: 2, value: "12GB" },
  { id: 3, value: "16GB" },
  { id: 4, value: "32TB" },
];

export const CPU = [
  { id: 0, value: "Intel Core i9" },
  { id: 1, value: "Intel Core i7" },
  { id: 2, value: "Intel Core i5" },
  { id: 3, value: "Intel Core i3" },
  { id: 4, value: "AMD Ryzen 7" },
  { id: 5, value: "AMD Ryzen 5" },
];

export const SCREEN_SIZE = [
  {
    id: 0,
    value: "Trên 15 inch",
  },
  {
    id: 1,
    value: "Trên 13 inch",
  },
  {
    id: 2,
    value: "Trên 14 inch",
  },
];

export const RESOLUTION = [
  { id: 0, value: "Full HD" },
  { id: 1, value: "HD" },
  { id: 2, value: "2K" },
  { id: 3, value: "4K" },
];

export const CARD = [
  { id: 0, value: "Card Onboard" },
  { id: 1, value: "NVIDIA GeForce Series" },
  { id: 2, value: "AMD Radeon Series" },
];

export const SPECIAL_FEATURE = [
  { id: 0, value: "Ổ cứng SSD" },
  { id: 1, value: "Wi-Fi 6" },
  { id: 2, value: "Công nghệ Intel Evo" },
];

export const BRANDS = [
  { id: 0, value: "Dell" },
  { id: 1, value: "Lenovo" },
  { id: 2, value: "HP" },
];

export const renderFilter = (
  disk,
  ram,
  cpu,
  screenSize,
  screenResolution,
  card,
  brand
) => {
  return [
    {
      id: 0,
      title: "Bộ lọc",
      Icon: Filter,
      data: [
        {
          id: 1,
          title: "Ổ cứng",
          data: disk,
          name: "disk",
          desc: "Ổ cứng là thiết bị dùng để lưu trữ dữ liệu trong máy tính. Loại ổ cứng phổ biến hiện nay là SSD với tốc độđọc ghi, khởi động ứng dụng nhanh hơn so với HDD.",
        },
        {
          id: 2,
          title: "Dung lượng RAM",
          data: ram,
          name: "ram",
          desc: "Dung lượng RAM càng lớn thì máy càng chạy được nhiều ứng dụng cùng lúc, giúp máy hoạt động mượt mà hơn, không gặp tình trạng giật lag.",
        },
        {
          id: 3,
          title: "CPU",
          name: "cpu",
          data: cpu,
        },
        {
          id: 4,
          title: "Kích thước màn hình ",
          name: "screenSize",
          data: screenSize,
        },
        {
          id: 5,
          title: "Độ phân giải",
          name: "screenResolution",
          data: screenResolution,
        },
        {
          id: 6,
          title: "Card đồ họa",
          data: card,
          name: "card",
          desc: "Hiệu năng của card đồ họa sẽ quyết định việc chơi game, xem video, học tập về đồ họa trên máy tính đó là tốt hoặc kém. Card được chia làm 2 loại Card rời và card onboard (tích hợp sẵn trên main máy tính).",
        },
        {
          id: 7,
          title: "Hãng sản xuất",
          name: "brand",
          data: brand,
        },
      ],
    },
  ];
};

export const RATING = [
  {
    id: 0,
    value: "Rất tệ",
  },
  {
    id: 1,
    value: "Tệ",
  },
  {
    id: 2,
    value: "Tạm ổn",
  },
  {
    id: 3,
    value: "Tốt",
  },
  {
    id: 4,
    value: "Rất tốt",
  },
];

export const SIDEBAR_ADMIN = [
  {
    id: 0,
    name: "Trang chủ",
    Icon: LayoutDashboard,
    link: "/admin/dashboard",
    active: true,
  },
  {
    id: 1,
    name: "Sản phẩm",
    Icon: Boxes,
    link: "/admin/product",
    active: false,
  },
  {
    id: 2,
    name: "Hóa đơn bán",
    Icon: ShoppingCart,
    link: "/admin/payment",
    active: false,
  },
  {
    id: 3,
    name: "Hóa đơn nhập",
    Icon: FolderInput,
    link: "/admin/import",
    active: false,
  },
  { id: 4, name: "Đánh giá", Icon: Star, link: "/admin/review", active: false },
  {
    id: 5,
    name: "Nhà cung cấp",
    Icon: Database,
    link: "/admin/provider",
    active: false,
  },
  {
    id: 6,
    name: "Khách Hàng",
    Icon: CircleUser,
    link: "/admin/customer",
    active: false,
  },
  {
    id: 7,
    name: "Tài khoản",
    Icon: UserRoundSearch,
    link: "/admin/account",
    active: false,
  },
  { id: 8, name: "Khác", Icon: Shapes, link: "/admin/other", active: false },
];

export const LIST_FILTER = [
  {
    id: 0,
    title: "Bộ lọc",
    Icon: Filter,
    data: [
      {
        id: 1,
        title: "Ổ cứng",
        data: DISK,
        desc: "Ổ cứng là thiết bị dùng để lưu trữ dữ liệu trong máy tính. Loại ổ cứng phổ biến hiện nay là SSD với tốc độđọc ghi, khởi động ứng dụng nhanh hơn so với HDD.",
      },
      {
        id: 2,
        title: "Dung lượng RAM",
        data: RAM,
        desc: "Dung lượng RAM càng lớn thì máy càng chạy được nhiều ứng dụng cùng lúc, giúp máy hoạt động mượt mà hơn, không gặp tình trạng giật lag.",
      },
      {
        id: 3,
        title: "CPU",
        data: CPU,
      },
      {
        id: 4,
        title: "Kích thước màn hình ",
        data: SCREEN_SIZE,
      },
      {
        id: 5,
        title: "Độ phân giải",
        data: RESOLUTION,
      },
      {
        id: 6,
        title: "Card đồ họa",
        data: CARD,
        desc: "Hiệu năng của card đồ họa sẽ quyết định việc chơi game, xem video, học tập về đồ họa trên máy tính đó là tốt hoặc kém. Card được chia làm 2 loại Card rời và card onboard (tích hợp sẵn trên main máy tính).",
      },
      {
        id: 7,
        title: "Tính năng đặc biệt",
        data: SPECIAL_FEATURE,
      },
      {
        id: 8,
        title: "Hãng sản xuất",
        data: BRANDS,
      },
    ],
  },
  {
    id: 10,
    title: "Giá",
    Icon: CircleDollarSign,
  },
];

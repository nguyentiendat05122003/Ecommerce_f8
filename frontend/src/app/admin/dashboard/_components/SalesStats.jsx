"use client";
import statisticalApiRequest from "@/apiRequests/statistical";
import { numFormatter } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active = false, payload = [], label = "" }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-widget rounded-sm drop-shadow-main chart-tooltip p-4">
        <h6 className="mb-1">{label}</h6>
        <div className="flex flex-col">
          {payload.map((item, index) => (
            <div className="flex gap-1.5" key={index}>
              <span className="label-text capitalize">{item.name}:</span>
              <span className="h6 !text-sm">
                {numFormatter(item.value, 1, "$")}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default function SalesStats() {
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const [data, setData] = useState([]);
  const revenueColor = theme === "light" ? "var(--header)" : "#C4DEFF";
  const expenseColor = theme === "light" ? "var(--inputBorder)" : "#8D8D99";
  useEffect(() => {
    const fetchApi = async () => {
      const year = new Date().getFullYear();
      const data = await statisticalApiRequest.getMonthlyRevenue(year);
      setData(data);
    };
    fetchApi();
  }, []);
  return (
    <div className="p-[26px] bg-widget rounded-sm drop-shadow-main flex flex-col h-[300px] md:h-[494px]">
      <div className="flex flex-col gap-2.5 mb-5 md:flex-row md:justify-between md:items-center">
        <h4 className="text-xl text-header ">Thống kê bán hàng năm 2024</h4>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <span className="w-4 h-4 rounded-full bg-[#c4deff]" />
            <span className="font-heading font-semibold text-sm text-header">
              Doanh thu
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-4 h-4 rounded-full bg-[#8d8d99]" />
            <span className="font-heading font-semibold text-sm text-header">
              Chi phí
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={false}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="var(--inputBorder)"
              strokeOpacity={0.6}
            />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              dy={9}
              hide={width < 768 || false}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => numFormatter(value, 0, "$")}
              hide={width < 768 || false}
            />
            <Tooltip cursor={false} content={<CustomTooltip />} />
            <Bar
              dataKey="revenue"
              fill={revenueColor}
              maxBarSize={16}
              radius={10}
            />
            <Bar
              dataKey="expense"
              fill={expenseColor}
              strokeWidth={2}
              maxBarSize={16}
              radius={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

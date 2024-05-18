"use client";
import ProductApiRequest from "@/apiRequests/product";
import FilterProperty from "@/components/FilterProperty";
import LazyLoadingProduct from "@/components/LazyLoadingProduct";
import ListProduct from "@/components/ListProduct";
import { updateFloor } from "@/lib/features/bookSlice";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hook";
import { filterPropertyActive } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ListFilters() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleClickResult = (data) => {
    const newFilter = filterPropertyActive(data);
    setFilters(newFilter);
  };
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      setTimeout(async () => {
        const { data } = await ProductApiRequest.getAllProducts();
        setData(data);
        setLoading(false);
      }, 1000);
    }
    fetchData();
  }, [filters]);
  return (
    <>
      <FilterProperty onClick={handleClickResult} />
      <div className="main_container flex items-start gap-5">
        {isLoading ? (
          <LazyLoadingProduct number={5} />
        ) : (
          <ListProduct data={data} />
        )}
      </div>
    </>
  );
}

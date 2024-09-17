"use client";
import ProductApiRequest from "@/apiRequests/product";
import FilterProperty from "@/components/FilterProperty";
import LazyLoadingProduct from "@/components/LazyLoadingProduct";
import ListProduct from "@/components/ListProduct";
import ListTypeProduct from "@/components/ListTypeProduct";
import { convertFiltersToQueryString, filterPropertyActive } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ListFilters() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [sortPrice, setSortPrice] = useState("-price");

  const handleClickResult = (data) => {
    const newFilter = filterPropertyActive(data);
    setFilters(newFilter);
  };
  const handleClickTypeProduct = (id, value) => {
    setFilters((prev) => {
      return [...prev, { name: "typeProduct", value: [value], id: [id] }];
    });
  };
  const handleSortPrice = (value) => {
    setSortPrice(value);
  };
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      setTimeout(async () => {
        console.log("filters", filters);
        const stringifyFilter = convertFiltersToQueryString(filters);
        console.log("string", stringifyFilter);
        const { data } = await ProductApiRequest.getAllProducts(
          stringifyFilter,
          sortPrice
        );
        setData(data);
        setLoading(false);
      }, 200);
    }
    fetchData();
  }, [filters, sortPrice]);
  return (
    <>
      <ListTypeProduct onClick={handleClickTypeProduct} />
      <FilterProperty
        onClickPrice={handleSortPrice}
        onClick={handleClickResult}
      />
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

"use client";

import importApiRequest from "@/apiRequests/import";
import { columnsDetailImport } from "@/app/admin/import/components/columnsDetailImport";
import Loading from "@/app/loading";
import { DataTable } from "@/components/DataTable";
import PageHeader from "@/components/PageHeader";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await importApiRequest.getDetailImport(params.id);
      setTableData(data.products);
      setLoading(false);
    };
    fetchApi();
  }, []);

  return (
    <div>
      <PageHeader title="Chi tiết hóa đơn nhập" />
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="bg-widget rounded-md drop-shadow-main pb-[10px] p-[26px]">
          <div className="">
            <DataTable data={tableData} columns={columnsDetailImport} />
          </div>
        </div>
      )}
    </div>
  );
}

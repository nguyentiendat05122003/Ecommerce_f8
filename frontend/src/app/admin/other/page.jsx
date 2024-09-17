import FormAddCard from "@/app/admin/other/components/FormAddCard";
import FormAddCpu from "@/app/admin/other/components/FormAddCpu";
import FormAddDisk from "@/app/admin/other/components/FormAddDisk";
import FormAddProvider from "@/app/admin/other/components/FormAddProvider";
import FormAddRam from "@/app/admin/other/components/FormAddRam";
import FormAddScreen from "@/app/admin/other/components/FormAddScreen";
import PageHeader from "@/components/PageHeader";
import React from "react";

export default function page() {
  return (
    <div>
      <PageHeader title="Thông tin khác" />
      <FormAddRam />
      <div className="mt-3"></div>
      <FormAddDisk />
      <div className="mt-3"></div>
      <FormAddCpu />
      <div className="mt-3"></div>
      <FormAddCard />
      <div className="mt-3"></div>
      <FormAddScreen />
      <div className="mt-3"></div>
      <FormAddProvider />
    </div>
  );
}

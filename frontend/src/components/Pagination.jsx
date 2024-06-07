import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
export default function PaginationComp() {
  return (
    <div>
      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink
              className="font-bold text-accent hover:text-white border-accent"
              href="#"
              isActive
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>{/* <PaginationNext href="#" /> */}</PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

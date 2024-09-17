import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComp({
  totalPages,
  currentPage,
  onPageChange,
}) {
  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            className={`font-bold ${
              currentPage === i
                ? "text-accent hover:text-white border-accent"
                : ""
            }`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(i);
            }}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return items;
  };

  return (
    <div>
      <Pagination className="mt-6">
        <PaginationContent>{renderPaginationItems()}</PaginationContent>
      </Pagination>
    </div>
  );
}

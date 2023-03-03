import { PaginationControl } from "react-bootstrap-pagination-control";
import { useContext } from "react";
import InventoryContext, { InventoryContextType } from "./../../context/index";

const PagePagination = () => {
  const { currentPage, pages, items, handlePageChange } = useContext(
    InventoryContext
  ) as InventoryContextType;

  const totalPages = Math.ceil(pages);
  return (
    <div className="container pagination">
      <PaginationControl
        page={currentPage}
        between={5}
        total={totalPages}
        limit={20}
        changePage={handlePageChange}
        ellipsis={3}
      />
      <p className="text-muted total">{items} ნივთი</p>
    </div>
  );
};

export default PagePagination;

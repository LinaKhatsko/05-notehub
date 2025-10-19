import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
    pageCount: number;
    onPageChange: (selectedItem: { selected: number }) => void;
    currentPage: number; // 1-based із батьківського стану
}

const Pagination = ({ pageCount, onPageChange, currentPage }: PaginationProps) => {
    return (
        <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            onPageChange={onPageChange}
            forcePage={ Math.max(0, (currentPage || 1) - 1) }
            containerClassName={css.pagination}
            activeClassName={css.active}
            nextLabel="→"
            previousLabel="←"
        />
    );
};

export default Pagination;
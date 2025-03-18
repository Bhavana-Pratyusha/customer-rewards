import React from "react";
import { Button } from "../styles";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <Button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        ◀ Prev
      </Button>
      <span> Page {currentPage} of {totalPages} </span>
      <Button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        Next ▶
      </Button>
    </div>
  );
};

export default Pagination;

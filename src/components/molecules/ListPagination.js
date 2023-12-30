import React from "react";
import StyledButton from "../atoms/StyledButton";
import styled from "styled-components";

const PaginationCapsule = styled.ul`
  margin-top: 35px;
`;

const PaginationLink = styled.li`
  font-size: 15px;
  &:not(:first-child) a {
    margin-left: 0.25rem;
  }
  a {
    position: relative;
    display: block;
    padding: 0.745rem 0.35rem;
    font-size: 0.9375rem;
    color: #5d596c;
    background-color: rgba(75, 70, 92, 0.08);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    line-height: 1;
    text-align: center;
    min-width: calc(2.4275rem + calc(0px * 2));
    border-radius: 0.375rem;
    &:hover {
      color: #5d596c;
      background-color: rgba(75, 70, 92, 0.16);
    }
  }
  &.active {
    a {
      border-color: #7367f0;
      background-color: #7367f0;
      color: #fff;
    }
  }
`;

const ListPagination = ({ pagination, onPageChange }) => {
  const { page, pageCount } = pagination;
  const renderPageNumbers = () => {
    const maxPageButtons = 10;
    const middleButton = Math.floor(maxPageButtons / 2) + 1;

    if (pageCount <= maxPageButtons) {
      return Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
        <PaginationLink key={pageNumber} className={pageNumber === page ? "active" : ""} onClick={() => onPageChange(pageNumber)}>
          <a>{pageNumber}</a>
        </PaginationLink>
      ));
    } else {
      const startPage = Math.min(Math.max(page - middleButton + 1, 1), pageCount - maxPageButtons + 1);
      return Array.from({ length: maxPageButtons }, (_, index) => startPage + index).map((pageNumber) => (
        <PaginationLink key={pageNumber} className={pageNumber === page ? "active" : ""} onClick={() => onPageChange(pageNumber)}>
          <a>{pageNumber}</a>
        </PaginationLink>
      ));
    }
  };

  return (
    <PaginationCapsule className="pagination justify-content-center">
      <PaginationLink disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        <a>Prev</a>
      </PaginationLink>
      {renderPageNumbers()}
      <PaginationLink disabled={page === pageCount} onClick={() => onPageChange(page + 1)}>
        <a>next</a>
      </PaginationLink>
    </PaginationCapsule>
  );
};

export default ListPagination;

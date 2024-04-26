import styled, { css } from "styled-components";
import { PaginationList } from "../Pagination/Pagination.styles";

export const StyledTableLayout = styled.div`
  width: 100%;
  padding: 15px 10px;
  border-radius: 20px;
  margin: ${({ noNegativeMargin }) => (noNegativeMargin ? "" : "0 0 0")};
  background: var(--white);

  @media (min-width: 768px) {
    padding: 20px;
  }

  ${({ noPagination }) =>
    noPagination &&
    css`
      ${PaginationList} {
        display: none;
      }
    `}

  .table-heading {
    display: block;
    font-size: 22px;
    line-height: 25px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0 0 15px;
  }

  .inner-wrap {
    @media (max-width: 992px) {
      padding: 5px 20px 20px;
      border-radius: 10px;
      background: var(--gray-4);
      border-radius: 10px;
    }
    @media (max-width: 768px) {
      padding: 5px 10px 10px;
    }
    .pagination {
      background: var(--gray-4);
      border-radius: 0 0 10px 10px;
      padding-bottom: 20px;
    }
  }
`;

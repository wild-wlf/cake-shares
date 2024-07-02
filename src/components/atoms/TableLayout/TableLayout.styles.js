import styled, { css } from 'styled-components';
import { PaginationList } from '../Pagination/Pagination.styles';

export const StyledTableLayout = styled.div`
  width: 100%;
  border-radius: 20px;
  margin: ${({ noNegativeMargin }) => (noNegativeMargin ? '' : '0 0 0')};
  background: var(--white);
  @media (min-width: 768px) {
    padding: 20px;
    border: 1px solid #d9d9d9;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05), -10px 10px 20px rgba(0, 0, 0, 0.05);
  }
  ${({ noPagination }) =>
    noPagination &&
    css`
      ${PaginationList} {
        display: none;
      }
    `}
  .head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 20px 0;
    font-family: 'Outfit', sans-serif;
    .actions {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'Outfit', sans-serif;
      .Search {
        height: 40px;
        width: 291px;
        input {
          color: rgba(49, 49, 49, 1);
          background-color: rgba(246, 248, 250, 1);
        }
      }
    }

    ${({ filterBlock }) =>
      filterBlock &&
      css`
        @media only screen and (max-width: 768px) {
          .actions {
            flex-direction: column;
            button {
              width: 100%;
            }
          }
        }
      `}
  }
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
      background: var(--white);
      border-radius: 0 0 10px 10px;
      padding-bottom: 20px;
    }
  }
`;

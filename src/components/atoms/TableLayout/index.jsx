import React, { useCallback, useState } from 'react';
// import Filters from "common/filters";
import TableHeader from '../TableHeader';
import { StyledTableLayout } from './TableLayout.styles';
import Pagination from '../Pagination';
import Field from '../Field';
import { CiSearch } from 'react-icons/ci';
import Button from '../Button';
import Image from 'next/image';
import Select from '../../atoms/Select';
import { debounce } from '../../../helpers/common';

function TableLayout({
  children,
  currentPage = 1,
  pageSize = 10,
  totalCount = 0,
  onChangeFilters,
  customFilterKey = '',
  exportBtn,
  createBtn,
  extraFilters,
  filters = false,
  noNegativeMargin,
  onOptionClick,
  resetFilter = false,
  tableHeading,
  transationFilter,
  noPagination,
  placeholder,
  btnWidth,
  btnText,
  btnType,
  btnImg,
  openModal,
  iconImg,
  setSearchQuery,
  setResetFilter = () => {},
}) {
  const [filterState, setFilterState] = useState('');
  const [searchText, setSearchText] = useState('');
  function fetchResults(e) {
    onChangeFilters(e);
  }
  const debouncedFetchResults = useCallback(debounce(fetchResults, 300), []);

  const filterData = [
    {
      value: 'all',
      label: 'All',
    },
    {
      value: 'earn',
      label: 'Earn',
    },
    {
      value: 'top_up',
      label: 'Top Up',
    },
    {
      value: 'spend',
      label: 'filter by products',
    },
  ];
  return (
    <>
      {/* {filters && (
        <Filters
          resetFilter={resetFilter}
          setResetFilter={setResetFilter}
          onChangeFilters={(_) => {
            onChangeFilters({ ..._, page: 1 });
            setFilterState(_);
          }}
          customFilterKey={customFilterKey}
          extraFilters={extraFilters}
          onOptionClick={onOptionClick}
        />
      )} */}
      <StyledTableLayout noNegativeMargin={noNegativeMargin} noPagination={noPagination}>
        <div className="head">
          <div className="heading-holder">
            {tableHeading && <strong className="table-heading">{tableHeading}</strong>}
            {transationFilter && (
              <div className="select-holder">
                <Select
                  noMargin
                  placeholder="Transaction type"
                  onChange={({ target: { value } }) => {
                    // onChangeFilters({ type: value?.value });
                    setSearchQuery(prev => ({ ...prev, type: value?.value }));
                  }}
                  options={filterData}
                  labelReverse
                />
              </div>
            )}
          </div>
          <div className="actions">
            {placeholder && (
              <div className="item">
                <div className="Search">
                  <Field
                    value={searchText}
                    type="search"
                    rounded
                    sm
                    name="search"
                    placeholder={placeholder}
                    suffix={<CiSearch className="icon" />}
                    onChange={({ target: { value } }) => {
                      setSearchText(value);
                      debouncedFetchResults(value);
                    }}
                  />
                </div>
              </div>
            )}
            {btnText && (
              <Button rounded width={btnWidth ? btnWidth : '100%'} sm btntype={btnType} onClick={openModal}>
                {btnText}
                {btnImg && <Image src={btnImg} alt="btnImg" />}
              </Button>
            )}
            {iconImg && (
              <div className="icon-div" onClick={openModal}>
                <Image src={iconImg} alt="iconImg" />
              </div>
            )}
          </div>
        </div>
        <div className="inner-wrap">
          <TableHeader
            total={totalCount}
            page={currentPage}
            resultPerPage={pageSize}
            setPageSize={_ => onChangeFilters({ pageSize: _, page: 1 })}
            exportBtn={exportBtn}
            createBtn={createBtn}
          />
          {children}
          <div className="pagination">
            {totalCount > 1 ? (
              <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={pageSize}
                // onPageChange={_ => onChangeFilters({ page: _ })}
                onPageChange={_ => onChangeFilters({ filter: filterState.filter, page: _ })}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </StyledTableLayout>
    </>
  );
}

export default TableLayout;

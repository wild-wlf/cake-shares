import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import Button from '../Button';
import { useRouter } from 'next/router';
import { RiExpandUpDownFill } from 'react-icons/ri';
import { IoIosRemoveCircle } from 'react-icons/io';
import { IoIosListBox } from 'react-icons/io';
import { Sort } from '../advanceSearch/advanceSearch.style';
import Field from '../Field';
import { BsFillGridFill } from 'react-icons/bs';
import { SearchHeaderWrapper } from './searchHeader.style';
import { SearchContext } from '@/context/SearchContext';
import { useContextHook } from 'use-context-hook';

const SearchHeader = ({ handleViewController, listview, selected, setSelected, fetchProducts }) => {
  const closeRef = useRef();
  const router = useRouter();
  const [sortBox, setSortBox] = useState(false);
  // const [selected, setSelected] = useState(null);
  const { setSearchResults, handleClearQuery, handleSearchQuery } = useContextHook(SearchContext, v => ({
    setSearchResults: v.setSearchResults,
    handleClearQuery: v.handleClearQuery,
    handleSearchQuery: v.handleSearchQuery,
  }));

  const handleSortChecked = e => {
    const { name } = e.target;
    if (name === 'Popularity') {
      setSearchResults(prev => [...prev].sort((a, b) => b.fundingRatio - a.fundingRatio));
    } else if (name === 'Funding Ratio') {
      setSearchResults(prev => [...prev].sort((a, b) => b.fundingRatio - a.fundingRatio));
    } else if (name === 'Return') {
      setSearchResults(prev => [...prev].sort((a, b) => b.returnRatio - a.returnRatio));
    }
    setSelected(name);
    setSortBox(false);
  };

  const handleClickOutside = event => {
    if (closeRef.current && !closeRef.current.contains(event.target)) {
      setSortBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleReset = () => {
    let obj = {
      page: 1,
      itemsPerPage: 12,
      searchText: '',
      popular: '',
      type: '',
      investmentType: '',
      country: '',
      kycLevel: '',
      minBackers: '',
      maxDaysLeft: '',
      minFundsRaised: '',
      maxAnnualCost: '',
      minInvestment: '',
      maxInvestment: '',
    };
    handleSearchQuery(obj);
    fetchProducts(obj);
  }

  return (
    <SearchHeaderWrapper>
      <div>
        <Button
          rounded
          sm
          btntype="blue"
          onClick={() => {
            router.back();
            handleClearQuery();
          }}>
          <IoIosArrowBack />
          Go Back
        </Button>
      </div>
      <div className="headWrapper">
        <div>
          <span className="heading">Search Results</span>
        </div>
        <div className="sorting">
          {' '}
          {listview ? (
            <Button rounded sm className="button" onClick={handleViewController}>
              List View
              <IoIosListBox size={18} />
            </Button>
          ) : (
            <Button rounded sm className="button" onClick={handleViewController}>
              Grid View
              <BsFillGridFill size={18} />
            </Button>
          )}
          <Sort className={sortBox && 'active'}>
            <Button rounded sm className="button" onClick={() => setSortBox(!sortBox)}>
              Sort By
              <RiExpandUpDownFill size={18} />
            </Button>
            <div className="sort-list" ref={closeRef}>
              {sortBox && (
                <div className="list">
                  <Field
                    type="radio"
                    label="Popularity"
                    name="Popularity"
                    radioBorder="var(--gray-2)"
                    labelReverse
                    onChange={handleSortChecked}
                    value={selected === 'Popularity'}
                  />
                  <Field
                    type="radio"
                    label="Funding Ratio"
                    name="Funding Ratio"
                    radioBorder="var(--gray-2)"
                    labelReverse
                    onChange={handleSortChecked}
                    value={selected === 'Funding Ratio'}
                  />
                  <Field
                    type="radio"
                    label="Return"
                    name="Return"
                    radioBorder="var(--gray-2)"
                    labelReverse
                    onChange={handleSortChecked}
                    value={selected === 'Return'}
                  />
                </div>
              )}
            </div>
          </Sort>
          <Button
            rounded
            sm
            className="button"
            onClick={handleReset}
          >
            Clear All
            <IoIosRemoveCircle size={18} />
          </Button>
        </div>
      </div>
    </SearchHeaderWrapper>
  );
};

export default SearchHeader;

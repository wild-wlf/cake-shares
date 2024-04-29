import React, { useState } from "react";
import { SearchFiltersWrapper } from "./searchFilters.style";
import { Sort } from "../advanceSearch/advanceSearch.style";
import Field from "../Field";
import Button from "../Button";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

const SearchFilters = () => {
  const [investmentBox, setInvestmentBox] = useState(false);
  const [countryBox, setCountryBox] = useState(false);
  const [kycBox, setKycBox] = useState(false);
  const [selected, setSelected] = useState({
    investment: "Select Type",
    country: "Select Country",
    kyc: "Select Level",
  });
  const [searchQuery, setSearchQuery] = useState({
    searchText: "",
    popular: false,
    private: false,
  });

  const handleRadioChecked = (e) => {
    const { name } = e.target;

    setSelected((prev) => ({
      ...prev,
      investment: name,
    }));
    setSearchQuery((prev) => ({
      ...prev,
      investmentType: name,
    }));
    setInvestmentBox(false);
  };
  const handleCountryChecked = (e) => {
    const { name } = e.target;

    setSelected((prev) => ({
      ...prev,
      country: name,
    }));
    setSearchQuery((prev) => ({
      ...prev,
      country: name,
    }));
    setCountryBox(false);
  };
  const handleKycChecked = (e) => {
    const { name } = e.target;
    setSelected((prev) => ({
      ...prev,
      kyc: name,
    }));
    setSearchQuery((prev) => ({
      ...prev,
      kyc: name,
    }));
    setKycBox(false);
  };
  const handlePopularChecked = () => {
    setSearchQuery((prev) => ({
      ...prev,
      popular: !prev.popular,
    }));
  };
  const handlePrivateChecked = () => {
    setSearchQuery((prev) => ({
      ...prev,
      private: !prev.private,
    }));
  };
  return (
    <SearchFiltersWrapper>
      <div className="dropdown-div">
        <span>Investment Type</span>
        <Sort className={investmentBox && "active"}>
          <Button
            type="dropdown"
            rounded
            sm
            width="500"
            onClick={() => setInvestmentBox(!investmentBox)}
            className="dropdown"
          >
            {selected.investment}
            <IoMdArrowDropdown size={20} />
          </Button>
          <div className="sort-list">
            {investmentBox && (
              <div className="list">
                <Field
                  type="radio"
                  label="Properties"
                  name="Properties"
                  radioBorder="var(--gray-2)"
                  labelReverse
                  onChange={handleRadioChecked}
                  value={selected.investment === "Properties"}
                />
                <Field
                  type="radio"
                  label="Vehicles"
                  name="Vehicles"
                  radioBorder="var(--gray-2)"
                  labelReverse
                  onChange={handleRadioChecked}
                  value={selected.investment === "Vehicles"}
                />
              </div>
            )}
          </div>
        </Sort>
      </div>
      <div className="dropdown-div">
        <span>Country</span>
        <Sort className={countryBox && "active"}>
          <Button
            type="dropdown"
            rounded
            sm
            width="500"
            onClick={() => setCountryBox(!countryBox)}
            className="dropdown"
          >
            {selected.country}
            <IoMdArrowDropdown size={20} />
          </Button>
          <div className="sort-list">
            {countryBox && (
              <div className="list">
                <Field
                  type="radio"
                  label="United States"
                  name="United States"
                  radioBorder="var(--gray-2)"
                  labelReverse
                  onChange={handleCountryChecked}
                  value={selected.country === "United States"}
                />
                <Field
                  type="radio"
                  label="United Kingdom"
                  name="United Kingdom"
                  radioBorder="var(--gray-2)"
                  labelReverse
                  onChange={handleCountryChecked}
                  value={selected.country === "United Kingdom"}
                />
              </div>
            )}
          </div>
        </Sort>
      </div>
      <div className="dropdown-div">
        <span>KYC Level</span>
        <Sort className={kycBox && "active"}>
          <Button
            type="dropdown"
            rounded
            sm
            width="500"
            onClick={() => setKycBox(!kycBox)}
            className="dropdown"
          >
            {selected.kyc}
            <IoMdArrowDropdown size={20} />
          </Button>
          <div className="sort-list">
            {kycBox && (
              <div className="list">
                <Field
                  type="radio"
                  label="Level 1"
                  name="Level 1"
                  radioBorder="var(--gray-2)"
                  labelReverse
                  onChange={handleKycChecked}
                  value={selected.kyc === "Level 1"}
                />
                <Field
                  type="radio"
                  label="Level 2"
                  name="Level 2"
                  radioBorder="var(--gray-2)"
                  labelReverse
                  onChange={handleKycChecked}
                  value={selected.kyc === "Level 2"}
                />
              </div>
            )}
          </div>
        </Sort>
      </div>
      <div className="volumeWrapper">
        <span>Investment Volume</span>
        <div className="inputWrapper">
          <input type="text" placeholder="$0" />
          <FaMinus size={30} />
          <input type="text" placeholder="$0" />
        </div>
      </div>
      <div className="dropdown-div">
        <span>Min Annual Cost</span>
        <input type="text" placeholder="0%" />
      </div>
      <div className="dropdown-div">
        <span>Min Fund Raised</span>
        <input type="text" placeholder="0%" />
      </div>
      <div className="dropdown-div">
        <span>Min Backers</span>
        <input type="text" placeholder="0" />
      </div>
      <div className="dropdown-div">
        <span>Max Days Left</span>
        <input type="text" placeholder="0" />
      </div>
    </SearchFiltersWrapper>
  );
};

export default SearchFilters;

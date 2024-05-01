import React, { useState } from "react";
import { Sort, Wrapper } from "./advanceSearch.style";
import Button from "../Button";
import { IoMdArrowDropdown } from "react-icons/io";
import Field from "../Field";
import Link from "next/link";
import RangeSlider from "../rangeSlider";
import { FaMinus } from "react-icons/fa";

const AdvanceSearch = () => {
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

  console.log(searchQuery);
  return (
    <Wrapper>
      <div className="searchby">
        <span>Search by</span>
        <input type="text" placeholder="Search any keyword" />
      </div>

      <div className="investmenttype">
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
      </div>

      <div className="rangeSlider">
        <div className="volume-div">
          <span className="heading">Investment Volume</span>
          <div className="inputWrapper">
            <input type="text" placeholder="$0" />
            <FaMinus size={30} />
            <input type="text" placeholder="$0" />
          </div>
        </div>
        <RangeSlider />
      </div>

      <div className="minvalues">
        <div>
          <span>Min Annual Cost</span>
          <input type="text" placeholder="0%" />
        </div>
        <div>
          <span>Min Fund Raised</span>
          <input type="text" placeholder="0%" />
        </div>
        <div>
          <span>Min Backers</span>
          <input type="text" placeholder="0" />
        </div>
        <div>
          <span>Max Days Left</span>
          <input type="text" placeholder="0" />
        </div>
      </div>

      <div className="checkbox">
        <Field
          type="checkbox"
          label="Popular (likes)"
          labelColor="rgba(49, 49, 49, 1)"
          radioBorder="var(--gray-2)"
          onChange={handlePopularChecked}
        />
        <Field
          type="checkbox"
          label="Corporate or Private"
          labelColor="rgba(49, 49, 49, 1)"
          radioBorder="var(--gray-2)"
          onChange={handlePrivateChecked}
        />
      </div>

      <div className="btnwrapper">
        <Link href={{ pathname: "/advanceSearch" }}>
          <Button rounded md btntype="primary" width="170">
            Search
          </Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default AdvanceSearch;

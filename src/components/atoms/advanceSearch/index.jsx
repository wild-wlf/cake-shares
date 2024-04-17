import React, { useState } from "react";
import { Sort, Wrapper } from "./advanceSearch.style";
import Button from "../Button";
import { IoMdArrowDropdown } from "react-icons/io";
import Field from "../Field";

const index = () => {
  const [radioBox, setRadioBox] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [searchQuery, setSearchQuery] = useState({
    searchText: "",
  });

  const handleRadioChecked = (e) => {
    const { name } = e.target;

    setSelectedRadio(name);
    setSearchQuery((prev) => ({
      ...prev,
      sort: name,
    }));
    setRadioBox(false);
  };
  return (
    <Wrapper>
      <div className="searchby">
        <span>Search by</span>
        <input type="text" placeholder="Search any keyword" />
      </div>

      <div className="investmenttype">
        <div className="dropdown-div">
          <span>Investment Type</span>
          <Sort className={radioBox && "active"}>
            <Button
              type="dropdown"
              rounded
              sm
              width="500"
              onClick={() => setRadioBox(!radioBox)}
              className="dropdown"
            >
              Select type
              <IoMdArrowDropdown size={20} />
            </Button>
            <div className="sort-list">
              {radioBox && (
                <div className="list">
                  <Field
                    type="radio"
                    label="All"
                    name="group"
                    radioBorder="var(--gray-2)"
                    labelReverse
                    onChange={handleRadioChecked}
                    value={selectedRadio === "group"}
                  />
                  <Field
                    type="radio"
                    label="Super User"
                    name="group1"
                    radioBorder="var(--gray-2)"
                    labelReverse
                    onChange={handleRadioChecked}
                    value={selectedRadio === "group1"}
                  />
                </div>
              )}
            </div>
          </Sort>
        </div>
        <div className="dropdown-div">
          <span>Country</span>
          <Sort className={radioBox && "active"}>
            <Button
              type="dropdown"
              rounded
              sm
              width="500"
              onClick={() => setRadioBox(!radioBox)}
              className="dropdown"
            >
              Select Country
              <IoMdArrowDropdown size={20} />
            </Button>
            <div className="sort-list">
              {radioBox && (
                <div className="list">
                  <Field
                    type="radio"
                    label="United States"
                    name="group"
                    radioBorder="var(--gray-2)"
                    labelReverse
                    onChange={handleRadioChecked}
                    value={selectedRadio === "group"}
                  />
                  <Field
                    type="radio"
                    label="United Kingdom"
                    name="group1"
                    radioBorder="var(--gray-2)"
                    labelReverse
                    onChange={handleRadioChecked}
                    value={selectedRadio === "group1"}
                  />
                </div>
              )}
            </div>
          </Sort>
        </div>
        <div className="dropdown-div">
          <span>KYC Level</span>
          <Sort className={radioBox && "active"}>
            <Button
              type="dropdown"
              rounded
              sm
              width="500"
              onClick={() => setRadioBox(!radioBox)}
              className="dropdown"
            >
              Select Level
              <IoMdArrowDropdown size={20} />
            </Button>
            <div className="sort-list">
              {radioBox && (
                <div className="list">
                  <Field
                    type="radio"
                    label="Level 1"
                    name="group"
                    radioBorder="var(--gray-2)"
                    labelReverse
                    onChange={handleRadioChecked}
                    value={selectedRadio === "group"}
                  />
                  <Field
                    type="radio"
                    label="Level 2"
                    name="group1"
                    radioBorder="var(--gray-2)"
                    labelReverse
                    onChange={handleRadioChecked}
                    value={selectedRadio === "group1"}
                  />
                </div>
              )}
            </div>
          </Sort>
        </div>
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
          name="group1"
          labelColor="rgba(49, 49, 49, 1)"
          radioBorder="var(--gray-2)"
          onChange={handleRadioChecked}
          value={selectedRadio === "group1"}
        />
        <Field
          type="checkbox"
          label="Corporate or Private"
          labelColor="rgba(49, 49, 49, 1)"
          name="group1"
          radioBorder="var(--gray-2)"
          onChange={handleRadioChecked}
          value={selectedRadio === "group2"}
        />
      </div>

      <div className="btnwrapper">
        <Button rounded md btntype="green" width="170">
          Search
        </Button>
      </div>
    </Wrapper>
  );
};

export default index;

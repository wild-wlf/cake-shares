import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../Button";
import { Wrapper } from "./searchHeader.style";
import { useRouter } from "next/router";
import { RiExpandUpDownFill } from "react-icons/ri";
import { IoIosRemoveCircle } from "react-icons/io";
import { IoIosListBox } from "react-icons/io";
import { Sort } from "../advanceSearch/advanceSearch.style";
import Field from "../Field";

const SearchHeader = () => {
  const router = useRouter();
  const [sortBox, setSortBox] = useState(false);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState({
    searchText: "",
    sort: "",
  });

  const handleSortChecked = (e) => {
    const { name } = e.target;

    setSelected(name);
    setSearchQuery((prev) => ({
      ...prev,
      sort: name,
    }));
    setSortBox(false);
  };
  return (
    <Wrapper>
      <div>
        <Button
          rounded
          sm
          btntype="blue"
          onClick={() => {
            router.back();
          }}
        >
          <IoIosArrowBack />
          Go Back
        </Button>
      </div>
      <div className="headWrapper">
        <div>
          <span className="heading">Search Results</span>
        </div>
        <div className="sorting">
          {" "}
          <Button rounded sm className="button">
            List View
            <IoIosListBox size={18} />
          </Button>
          <Sort className={sortBox && "active"}>
            <Button
              rounded
              sm
              className="button"
              onClick={() => setSortBox(!sortBox)}
            >
              Sort By
              <RiExpandUpDownFill size={18} />
            </Button>
            <div className="sort-list">
              {sortBox && (
                <div className="list">
                  <Field
                    type="checkbox"
                    label="Popularity"
                    name="Popularity"
                    radioBorder="var(--gray-2)"
                    labelReverse
                    onChange={handleSortChecked}
                    value={selected === "Popularity"}
                  />
                  <Field
                    type="checkbox"
                    label="Funding Ratio"
                    name="Funding Ratio"
                    radioBorder="var(--gray-2)"
                    labelReverse
                    onChange={handleSortChecked}
                    value={selected === "Funding Ratio"}
                  />
                  <Field
                    type="checkbox"
                    label="Return"
                    name="Return"
                    radioBorder="var(--gray-2)"
                    labelReverse
                    onChange={handleSortChecked}
                    value={selected === "Return"}
                  />
                </div>
              )}
            </div>
          </Sort>
          <Button rounded sm className="button">
            Close All
            <IoIosRemoveCircle size={18} />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchHeader;

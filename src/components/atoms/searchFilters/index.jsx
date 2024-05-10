import React, { useState } from "react";
import { SearchFiltersWrapper } from "./searchFilters.style";
import Field from "../Field";
import Button from "../Button";
import { FaMinus } from "react-icons/fa6";
import Form, { useForm } from "@/components/molecules/Form";
import Select from "../Select";

const SearchFilters = () => {
  const [form] = useForm();
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

  return (
    <Form form={form}>
      <SearchFiltersWrapper>
        <div className="dropdown-div">
          <Form.Item
            type="text"
            label="Investment Type"
            name="investment_type"
            sm
            rounded
            placeholder="Select Type"
            rules={[
              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Select
              options={[
                { label: "Properties", value: "properties" },
                { label: "Vehicles", value: "vehicles" },
              ]}
            />
          </Form.Item>
        </div>
        <div className="dropdown-div">
          <Form.Item
            type="text"
            label="Country"
            name="country"
            sm
            rounded
            placeholder="Select Country"
            rules={[
              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Select
              options={[
                { label: "United States", value: "united_states" },
                { label: "United Kingdom", value: "united_kingdom" },
              ]}
            />
          </Form.Item>
        </div>
        <div className="dropdown-div">
          <Form.Item
            type="text"
            label="KYC Level"
            name="kyc_level"
            sm
            rounded
            placeholder="Select Level"
            rules={[
              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Select
              options={[
                { label: "Level 1", value: "level_1" },
                { label: "Level 2", value: "level_2" },
                { label: "Level 3", value: "level_3" },
              ]}
            />
          </Form.Item>
        </div>
        <div className="volumeWrapper">
          {/* <span>Investment Volume</span>
        <div className="inputWrapper">
          <input type="text" placeholder="$0" />
          <FaMinus size={30} />
          <input type="text" placeholder="$0" />
        </div> */}
          <Form.Item
            type="text"
            label="Investment Volume"
            name="investment_volume"
            sm
            rounded
            placeholder="$0"
            rules={[
              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
        </div>
        <div className="dropdown-div">
          <Form.Item
            type="text"
            label="Min Annual Cost"
            name="min_annual_cost"
            sm
            rounded
            placeholder="0%"
            rules={[
              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
        </div>
        <div className="dropdown-div">
          <Form.Item
            type="text"
            label="Min Fund Raised"
            name="min_fund_raised"
            sm
            rounded
            placeholder="0"
            rules={[
              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
        </div>
        <div className="dropdown-div">
          <Form.Item
            type="text"
            label="Min Backers"
            name="min_backers"
            sm
            rounded
            placeholder="0"
            rules={[
              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
        </div>
        <div className="dropdown-div">
          <Form.Item
            type="text"
            label="Max Days Left"
            name="max_days_left"
            sm
            rounded
            placeholder="0%"
            rules={[
              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
        </div>
      </SearchFiltersWrapper>
    </Form>
  );
};

export default SearchFilters;

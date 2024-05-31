import React, { useState } from 'react';
import { SearchFiltersWrapper } from './searchFilters.style';
import Field from '../Field';
import Button from '../Button';
import { FaMinus } from 'react-icons/fa6';
import Form, { useForm } from '@/components/molecules/Form';
import Select from '../Select';
import { countries } from '@/components/Constant';

const SearchFilters = ({ setSearchQuery }) => {
  const [arr, setArr] = useState(countries);
  const [form] = useForm();
  const [selected, setSelected] = useState({
    investment: 'Select Type',
    country: 'Select Country',
    kyc: 'Select Level',
  });
  // const [searchQuery, setSearchQuery] = useState({
  //   searchText: '',
  //   popular: false,
  //   private: false,
  // });
  const handleSubmit = e => {
    let obj = {
      investmentType: e?.investment_type?.value,
      country: e?.country?.label,
      kycLevel: e?.kyc_level?.label,
      minBackers: e?.min_backers,
      maxDaysLeft: e?.max_days_left,
      minFundsRaised: e?.min_fund_raised,
      minAnnualCost: e?.min_annual_cost,
    };
    setSearchQuery(prev => ({
      ...prev,
      ...obj,
    }));
  };
  return (
    <Form form={form} onSubmit={handleSubmit}>
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
                message: 'Maximum Character Length is 256',
              },
            ]}>
            <Select
              options={[
                { label: 'Properties', value: 'properties' },
                { label: 'Vehicles', value: 'vehicles' },
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
                message: 'Maximum Character Length is 256',
              },
            ]}>
            <Select options={arr} />
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
                message: 'Maximum Character Length is 256',
              },
            ]}>
            <Select
              options={[
                { label: 'Level 0', value: 'level_0' },
                { label: 'Level 1', value: 'level_1' },
                { label: 'Level 2', value: 'level_2' },
              ]}
            />
          </Form.Item>
        </div>
        <div className="volumeWrapper">
          <span>Investment Volume</span>
          <div className="inputWrapper">
            <input
              type="text"
              placeholder="$0"
              onChange={e => {
                setSearchQuery(prev => ({
                  ...prev,
                  minInvestment: e.target.value,
                }));
              }}
            />
            <FaMinus size={30} />
            <input
              type="text"
              placeholder="$0"
              onChange={e => {
                setSearchQuery(prev => ({
                  ...prev,
                  maxInvestment: e.target.value,
                }));
              }}
            />
          </div>
          {/* <Form.Item
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
          </Form.Item> */}
        </div>
        <div className="dropdown-div">
          <Form.Item
            type="text"
            label="Min Annual Cost"
            name="min_annual_cost"
            sm
            rounded
            placeholder="0%"
            onChange={e => {
              setSearchQuery(prev => ({
                ...prev,
                minAnnualCost: e.target.value,
              }));
              form.setFieldsValue({
                min_annual_cost: e.target.value,
              });
            }}
            rules={[
              {
                pattern: /^.{0,40}$/,
                message: 'Maximum Character Length is 256',
              },
            ]}>
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
                message: 'Maximum Character Length is 256',
              },
            ]}>
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
                message: 'Maximum Character Length is 256',
              },
            ]}>
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
                message: 'Maximum Character Length is 256',
              },
            ]}>
            <Field />
          </Form.Item>
        </div>
        <div className="btn-wrapper">
          <Button rounded md btntype="primary" width="200px" htmlType="submit">
            Search
          </Button>
        </div>
      </SearchFiltersWrapper>
    </Form>
  );
};

export default SearchFilters;

import React, { useContext, useEffect, useMemo, useState } from 'react';
import { SearchFiltersWrapper } from './searchFilters.style';
import Field from '../Field';
import Button from '../Button';
import { FaMinus } from 'react-icons/fa6';
import Form, { useForm } from '@/components/molecules/Form';
import Select from '../Select';
import { countries } from '@/components/Constant';
import { SearchContext } from '@/components/Context/SearchContext';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/components/Context/authContext';
import categoryService from '@/services/categoryService';

const SearchFilters = () => {
  const kycLevel = [
    { label: 'Level 0', value: 0 },
    { label: 'Level 1', value: 1 },
    { label: 'Level 2', value: 2 },
  ];
  const [arr, setArr] = useState(countries);
  const [form] = useForm();
  const { handleSearchQuery, searchQuery, categoriesOptions } = useContext(SearchContext);

  const [investmentVolume, setInvestmentVolume] = useState({
    min: searchQuery?.minInvestment || '',
    max: searchQuery?.maxInvestment || '',
  });
  useEffect(() => {
    async function setFilters(params) {
      const country = countries.find(ele => ele.value === searchQuery?.country);
      const kyc = kycLevel.find(ele => ele.value === searchQuery?.kycLevel);
      const investmentType = await categoriesOptions?.find(ele => ele.value === searchQuery?.investmentType);
      form.setFieldsValue({
        investment_type: investmentType,
        kyc_level: kyc,
        country: country,
        min_backers: searchQuery?.minBackers,
        max_days_left: searchQuery?.maxDaysLeft,
        min_fund_raised: searchQuery?.minFundsRaised,
        min_annual_cost: searchQuery?.minAnnualCost,
        minInvestment: searchQuery?.minInvestment,
        maxInvestment: searchQuery?.maxInvestment,
      });
    }
    setFilters();
  }, [searchQuery]);

  const handleSubmit = e => {
    let obj = {
      investmentType: e?.investment_type?.value,
      country: e?.country?.value,
      kycLevel: e?.kyc_level?.value,
      minBackers: e?.min_backers,
      maxDaysLeft: e?.max_days_left,
      minFundsRaised: e?.min_fund_raised,
      minAnnualCost: e?.min_annual_cost,
      minInvestment: investmentVolume?.min,
      maxInvestment: investmentVolume?.max,
    };
    handleSearchQuery(obj);
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
            options={categoriesOptions}
            rules={[
              {
                pattern: /^.{0,40}$/,
                message: 'Maximum Character Length is 256',
              },
            ]}>
            <Select />
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
            options={kycLevel}
            rules={[
              {
                pattern: /^.{0,40}$/,
                message: 'Maximum Character Length is 256',
              },
            ]}>
            <Select />
          </Form.Item>
        </div>
        <div className="volumeWrapper">
          <span>Investment Volume</span>
          <div className="inputWrapper">
            <input
              type="text"
              placeholder="$0"
              value={investmentVolume?.min}
              onChange={e => {
                setInvestmentVolume(prev => ({
                  ...prev,
                  min: e.target.value,
                }));
              }}
            />
            <FaMinus size={30} />
            <input
              type="text"
              placeholder="$0"
              value={investmentVolume?.max}
              onChange={e => {
                setInvestmentVolume(prev => ({
                  ...prev,
                  max: e.target.value,
                }));
              }}
            />
          </div>
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

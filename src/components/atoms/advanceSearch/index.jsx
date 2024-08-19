import React, { useState, useEffect, useMemo } from 'react';
import { Wrapper } from './advanceSearch.style';
import Button from '../Button';
import Field from '../Field';
import RangeSlider from '../rangeSlider';
import { FaMinus } from 'react-icons/fa';
import Form, { useForm } from '@/components/molecules/Form';
import Select from '../Select';
import { countries } from '@/components/Constant';
import { SearchContext } from '@/context/SearchContext';
import { useRouter } from 'next/router';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import categoryService from '@/services/categoryService';

const AdvanceSearch = ({ priceRange }) => {
  const [arr, setArr] = useState(countries);
  const [form] = useForm();
  const router = useRouter();
  const { fetch } = useContextHook(AuthContext, v => ({
    fetch: v.fetch,
  }));
  const { handleSearchQuery, handleClearQuery } = useContextHook(SearchContext, v => ({
    handleSearchQuery: v.handleSearchQuery,
    handleClearQuery: v.handleClearQuery,
  }));

  const { categories_data } = categoryService.GetAllCategories(
    {
      getAll: true,
    },
    fetch,
  );

  const categoriesOptions = useMemo(() => {
    const options = [
      {
        label: 'All',
        value: '',
      },
      ...(categories_data?.categories?.map(ele => ({
        value: ele?._id,
        label: ele?.name,
      })) || []),
    ];
    return options;
  }, [categories_data?.categories]);

  const [searchQuery, setSearchQuery] = useState({
    searchText: '',
    private: false,
    minInvestment: priceRange.minPrice,
    maxInvestment: priceRange.maxPrice,
  });

  const handleSubmit = e => {
    const type = e?.corporate && e?.private ? 'both' : e?.corporate ? 'corporate' : e?.private ? 'private' : '';

    let obj = {
      searchText: e?.searchText,
      type,
      investmentType: e?.investment_type?.value,
      country: e?.country?.value,
      kycLevel: e?.kyc_level?.value,
      minBackers: e?.min_backers,
      maxDaysLeft: e?.max_days_left,
      minFundsRaised: e?.min_fund_raised,
      minAnnualCost: e?.min_annual_cost,
      minInvestment: searchQuery?.minInvestment,
      maxInvestment: searchQuery?.maxInvestment,
    };

    handleSearchQuery(obj);
    router.push('/advanceSearch');
  };

  useEffect(() => {
    handleClearQuery();
  }, []);

  const loadInvestmentTypeOptions = async searchText => {
    try {
      let options = [];
      const response = await categoryService.getAllCategories({
        getAll: true,
        searchText,
      });
      options = response?.items?.map(_ => ({ value: _?._id, label: _?.name }));
      return options;
    } catch (error) {
      return [];
    }
  };

  return (
    <Form form={form} onSubmit={handleSubmit}>
      <Wrapper>
        <div className="searchby">
          <Form.Item
            type="text"
            label="Search By"
            name="searchText"
            sm
            rounded
            placeholder="Search by any Keyword"
            rules={[
              {
                pattern: /^.{0,40}$/,
                message: 'Maximum Character Length is 256',
              },
            ]}>
            <Field />
          </Form.Item>
        </div>

        <div className="investmenttype">
          <div className="dropdown-div">
            <Form.Item
              type="text"
              label="Investment Type"
              name="investment_type"
              sm
              rounded
              placeholder="Select Type"
              defaultOptions={categoriesOptions}
              rules={[
                {
                  pattern: /^.{0,40}$/,
                  message: 'Maximum Character Length is 256',
                },
              ]}>
              <Select async loadOptions={loadInvestmentTypeOptions} />
            </Form.Item>
          </div>
          <div className="dropdown-div">
            <Form.Item type="text" label="Country" name="country" sm rounded placeholder="Select Country">
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
              options={[
                { label: 'Level 0', value: 0 },
                { label: 'Level 1', value: 1 },
                { label: 'Level 2', value: 2 },
                { label: 'Level 3', value: 3 },
              ]}
              rules={[
                {
                  pattern: /^.{0,40}$/,
                  message: 'Maximum Character Length is 256',
                },
              ]}>
              <Select />
            </Form.Item>
          </div>
        </div>

        <div className="rangeSlider">
          <div className="volume-div">
            <span className="heading">Investment Volume (in Dollars)</span>
            <div className="inputWrapper">
              <input
                type="text"
                placeholder="$0"
                value={searchQuery.minInvestment ? `${searchQuery.minInvestment}` : '0'}
                onChange={_ => {
                  setSearchQuery(prev => ({ ...prev, minInvestment: _.target.value }));
                }}
              />
              <FaMinus size={30} />
              <input
                type="text"
                placeholder="$0"
                value={searchQuery.maxInvestment ? `${searchQuery.maxInvestment}` : '0'}
                onChange={_ => {
                  setSearchQuery(prev => ({ ...prev, maxInvestment: _.target.value }));
                }}
              />
            </div>
          </div>
          <RangeSlider
            min={priceRange?.minPrice}
            max={priceRange?.maxPrice}
            onChange={_ => {
              setSearchQuery(prev => ({ ...prev, minInvestment: _[0], maxInvestment: _[1] }));
            }}
          />
        </div>

        <div className="min-values-div">
          <div className="minvalues">
            <Form.Item
              type="number"
              label="Min Annual Cost"
              name="min_annual_cost"
              sm
              rounded
              placeholder="0"
              rules={[
                {
                  pattern: /^.{0,10}$/,
                  message: 'Maximum Character Length is 10',
                },
                {
                  pattern: /^(?!-)(?:0|(?:[1-9]\d*)(?:\.\d{1,2})?)$/,
                  message: 'Please Enter a Valid Positive Number.',
                },
              ]}>
              <Field maxLength={10} />
            </Form.Item>
          </div>
          <div className="minvalues">
            <Form.Item
              type="number"
              label="Min Fund Raised"
              name="min_fund_raised"
              sm
              rounded
              placeholder="0"
              rules={[
                {
                  pattern: /^.{0,10}$/,
                  message: 'Maximum Character Length is 10',
                },
                {
                  pattern: /^(?!-)(?:0|(?:[1-9]\d*)(?:\.\d{1,2})?)$/,
                  message: 'Please Enter a Valid Positive Number.',
                },
              ]}>
              <Field maxLength={10} />
            </Form.Item>
          </div>
          <div className="minvalues">
            <Form.Item
              type="number"
              label="Min Backers"
              name="min_backers"
              sm
              rounded
              placeholder="0"
              rules={[
                {
                  pattern: /^.{0,3}$/,
                  message: 'Maximum Character Length is 3',
                },
                {
                  pattern: /^(?!-)(?:0|(?:[1-9]\d*)(?:\.\d{1,2})?)$/,
                  message: 'Please Enter a Valid Positive Number.',
                },
              ]}>
              <Field maxLength={3} />
            </Form.Item>
          </div>
          <div className="minvalues">
            <Form.Item
              type="number"
              label="Max Days Left"
              name="max_days_left"
              sm
              rounded
              placeholder="0"
              rules={[
                {
                  pattern: /^.{0,3}$/,
                  message: 'Maximum Character Length is 3',
                },
                {
                  pattern: /^(?!-)(?:0|(?:[1-9]\d*)(?:\.\d{1,2})?)$/,
                  message: 'Please Enter a Valid Positive Number.',
                },
              ]}>
              <Field maxLength={3} />
            </Form.Item>
          </div>
        </div>

        <div className="checkbox">
          <Form.Item
            type="checkbox"
            label="Corporate"
            name="corporate"
            labelColor="rgba(49, 49, 49, 1)"
            radioBorder="var(--gray-2)">
            <Field />
          </Form.Item>
          <Form.Item
            type="checkbox"
            label="Private"
            name="private"
            labelColor="rgba(49, 49, 49, 1)"
            radioBorder="var(--gray-2)">
            <Field />
          </Form.Item>
        </div>

        <div className="btnwrapper">
          <Button rounded md btntype="primary" width="170" htmlType={'submit'}>
            Search
          </Button>
        </div>
      </Wrapper>
    </Form>
  );
};

export default AdvanceSearch;

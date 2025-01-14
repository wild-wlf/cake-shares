import React, { useContext, useEffect, useMemo, useState } from 'react';
import { SearchFiltersWrapper } from './searchFilters.style';
import Field from '../Field';
import Button from '../Button';
import { FaMinus } from 'react-icons/fa6';
import Form, { useForm } from '@/components/molecules/Form';
import Select from '../Select';
import { countries } from '@/components/Constant';
import { SearchContext } from '@/context/SearchContext';
import categoryService from '@/services/categoryService';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';

const SearchFilters = ({ fetchProducts, setSortFilter, dynamicVar, setDynamicVar }) => {
  const { fetch } = useContextHook(AuthContext, v => ({
    fetch: v.fetch,
  }));

  const kycLevel = [
    { label: 'Level 0', value: 0 },
    { label: 'Level 1', value: 1 },
    { label: 'Level 2', value: 2 },
    { label: 'Level 3', value: 3 },
  ];
  // const [arr, setArr] = useState(countries);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = useForm();
  const { handleSearchQuery, searchQuery,
    //  countries 
  } = useContextHook(SearchContext, v => ({
    handleSearchQuery: v.handleSearchQuery,
    searchQuery: v.searchQuery,
    // countries: v.countries,
  }));

  const { categories_data } = categoryService.GetAllCategories(
    {
      getAll: true,
    },
    fetch,
  );

  const categoriesOptions = useMemo(() =>
    [
      { value: '', label: 'All' },
      ...(categories_data?.categories?.map(ele => ({
        value: ele?._id,
        label: ele?.name,
      })) || []),
    ]
    , [categories_data?.categories]);


  const [investmentVolume, setInvestmentVolume] = useState({
    min: dynamicVar?.priceRange?.minPrice || '',
    max: dynamicVar?.priceRange?.maxPrice || '',
  });

  useEffect(() => {
    async function setFilters(params) {
      const country = dynamicVar?.countries?.find(ele => ele.value === searchQuery?.country);
      const kyc = kycLevel.find(ele => ele.value === searchQuery?.kycLevel);
      const investmentType = categoriesOptions?.find(ele => ele.value === searchQuery?.investmentType);
      form.setFieldsValue({
        investment_type: investmentType,
        kyc_level: kyc,
        country: country,
        min_backers: searchQuery?.minBackers,
        max_days_left: searchQuery?.maxDaysLeft,
        min_fund_raised: searchQuery?.minFundsRaised,
        max_annual_cost: searchQuery?.maxAnnualCost,
        minInvestment: searchQuery?.minInvestment,
        maxInvestment: searchQuery?.maxInvestment,
      });
    }
    setFilters();
  }, [searchQuery, categories_data?.categories]);

  const handleSubmit = async e => {
    setIsLoading(true);
    let obj = {
      page: 1,
      itemsPerPage: 12,
      searchText: '',
      popular: '',
      type: '',
      investmentType: e?.investment_type?.value,
      country: e?.country?.value,
      kycLevel: e?.kyc_level?.value,
      minBackers: e?.min_backers,
      maxDaysLeft: e?.max_days_left,
      minFundsRaised: e?.min_fund_raised,
      maxAnnualCost: e?.max_annual_cost,
      minInvestment: investmentVolume?.min,
      maxInvestment: investmentVolume?.max,
    };
    handleSearchQuery(obj);
    fetchProducts(obj);
    setIsLoading(false);
    setSortFilter(null);
  };

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
      <SearchFiltersWrapper>
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
            <Select options={dynamicVar?.countries} />
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
          <span>Investment Volume($)</span>
          <div className="inputWrapper">
            <input
              type="number"
              placeholder="$0"
              value={dynamicVar?.priceRange?.minPrice}
              onChange={e => {
                setInvestmentVolume(prev => ({
                  ...prev,
                  min: e.target.value,
                }));
                setDynamicVar(prev => ({
                  ...prev,
                  priceRange: {
                    ...prev.priceRange,
                    minPrice: e.target.value
                  }
                }))
              }}
            />
            <FaMinus size={30} />
            <input
              type="number"
              placeholder="$0"
              value={dynamicVar?.priceRange?.maxPrice}
              onChange={e => {
                setInvestmentVolume(prev => ({
                  ...prev,
                  max: e.target.value,
                }));
                setDynamicVar(prev => ({
                  ...prev,
                  priceRange: {
                    ...prev.priceRange,
                    maxPrice: e.target.value
                  }
                }))
              }}
            />
          </div>
        </div>
        <div className="dropdown-div">
          <Form.Item
            type="number"
            label="Max Annual Cost"
            name="max_annual_cost"
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
            type="number"
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
        <div className="btn-wrapper">
          <Button rounded md loader={isLoading} btntype="primary" width="200px" htmlType="submit">
            Search
          </Button>
        </div>
      </SearchFiltersWrapper>
    </Form>
  );
};

export default SearchFilters;

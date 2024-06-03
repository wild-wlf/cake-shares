import React, { useContext, useState } from 'react';
import { Sort, Wrapper } from './advanceSearch.style';
import Button from '../Button';
import { IoMdArrowDropdown } from 'react-icons/io';
import Field from '../Field';
import Link from 'next/link';
import RangeSlider from '../rangeSlider';
import { FaMinus } from 'react-icons/fa';
import Form, { useForm } from '@/components/molecules/Form';
import Select from '../Select';
import { countries } from '@/components/Constant';
import { SearchContext } from '@/components/Context/SearchContext';
import { useRouter } from 'next/router';

const AdvanceSearch = () => {
  const [arr, setArr] = useState(countries);
  const [form] = useForm();
  const router = useRouter();

  const [selected, setSelected] = useState({
    investment: 'Select Type',
    country: 'Select Country',
    kyc: 'Select Level',
  });
  const [searchQuery, setSearchQuery] = useState({
    searchText: '',
    popular: false,
    private: false,
    minInvestment: 1350,
    maxInvestment: 10000,
  });
  console.log(searchQuery);
  const handlePopularChecked = () => {
    setSearchQuery(prev => ({
      ...prev,
      popular: !prev.popular,
    }));
  };
  const handlePrivateChecked = () => {
    setSearchQuery(prev => ({
      ...prev,
      private: !prev.private,
    }));
  };
  const { handleSearchQuery } = useContext(SearchContext);

  const handleSubmit = e => {
    let obj = {
      investmentType: e?.investment_type,
      country: e?.country?.value,
      kycLevel: e?.kyc_level,
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
  return (
    <Form form={form} onSubmit={handleSubmit}>
      <Wrapper>
        <div className="searchby">
          <span>Search by</span>
          <input type="text" placeholder="Search any keyword" />
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
        </div>

        <div className="rangeSlider">
          <div className="volume-div">
            <span className="heading">Investment Volume</span>
            <div className="inputWrapper">
              <input type="text" placeholder="$0" readOnly value={`$${searchQuery.minInvestment}`} />
              <FaMinus size={30} />
              <input type="text" placeholder="$0" readOnly value={`$${searchQuery.maxInvestment}`} />
            </div>
          </div>
          <RangeSlider  onChange={(_) =>{
            setSearchQuery({
          minInvestment: _[0],
          maxInvestment: _[1],
        })}

           } />
        </div>

        <div className="min-values-div">
          <div className="minvalues">
            <Form.Item
              type="number"
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
                  pattern: /^.{0,40}$/,
                  message: 'Maximum Character Length is 256',
                },
              ]}>
              <Field />
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
                  pattern: /^.{0,40}$/,
                  message: 'Maximum Character Length is 256',
                },
              ]}>
              <Field />
            </Form.Item>
          </div>
          <div className="minvalues">
            <Form.Item
              type="number"
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
          <Button rounded md btntype="primary" width="170" htmlType={'submit'}>
            Search
          </Button>
        </div>
      </Wrapper>
    </Form>
  );
};

export default AdvanceSearch;

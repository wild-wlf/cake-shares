import React, { useState } from 'react';
import { Sort, Wrapper } from './advanceSearch.style';
import Button from '../Button';
import { IoMdArrowDropdown } from 'react-icons/io';
import Field from '../Field';
import Link from 'next/link';
import RangeSlider from '../rangeSlider';
import { FaMinus } from 'react-icons/fa';
import Form, { useForm } from '@/components/molecules/Form';
import Select from '../Select';

const AdvanceSearch = () => {
  const [form] = useForm();
  const [selected, setSelected] = useState({
    investment: 'Select Type',
    country: 'Select Country',
    kyc: 'Select Level',
  });
  const [searchQuery, setSearchQuery] = useState({
    searchText: '',
    popular: false,
    private: false,
    minInvestment: 20,
    maxInvestment: 80,
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

  return (
    <Form form={form}>
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
              <Select
                options={[
                  { label: 'United States', value: 'united_states' },
                  { label: 'United Kingdom', value: 'united_kingdom' },
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
                  message: 'Maximum Character Length is 256',
                },
              ]}>
              <Select
                options={[
                  { label: 'Level 1', value: 'level_1' },
                  { label: 'Level 2', value: 'level_2' },
                  { label: 'Level 3', value: 'level_3' },
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
          <RangeSlider searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
          <Link href={{ pathname: '/advanceSearch' }}>
            <Button rounded md btntype="primary" width="170">
              Search
            </Button>
          </Link>
        </div>
      </Wrapper>
    </Form>
  );
};

export default AdvanceSearch;

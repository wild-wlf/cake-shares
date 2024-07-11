import React from 'react';
import Card from '../card';
import arrowRight from '../../../_assets/arrow-right.svg';
import Link from 'next/link';
import { CategoriesWrapper, NoRecord } from '../categories/categories.style';
import Skeletonn from '../skeleton/Skeletonn';

const index = ({ data, loading }) => {
  return (
    <CategoriesWrapper image={arrowRight} $slide>
      <div className="slider">
        {loading
          ? Array.from({ length: 5 }).map((_, idx) => <Skeletonn height="238" radius="14px" key={idx} />)
          : data &&
            data.length > 0 &&
            data.map((c_data, index) => (
              <div className="card" key={index}>
                <Link href={`/products/${c_data?._id}`}>
                  <Card Cardimage={c_data?.media[0]} c_data={c_data} />
                </Link>
              </div>
            ))}
      </div>
    </CategoriesWrapper>
  );
};

export default index;

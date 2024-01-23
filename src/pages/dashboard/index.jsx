import React from 'react';
import StaffAmount from './component/StaffAmount';
import { useSelector } from 'umi';
import './css/index.less';

const index = () => {
  const { amountDataList } = useSelector((state) => state.dashboard);
  // console.log(amountDataList);
  return (
    <div className="dashboard-container">
      {amountDataList.map((item, index) => (
        <StaffAmount key={index} {...item} />
      ))}
    </div>
  );
};

export default index;

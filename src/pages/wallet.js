import DetailBar from '@/components/atoms/DetailBar';
import MyWallet from '@/components/atoms/MyWallet/MyWallet';
import TransactionTable from '@/components/atoms/TransactionTable';
import React from 'react';
import { useContextHook } from 'use-context-hook';

const Wallet = () => {
  return (
    <div>
      <MyWallet />
      <DetailBar />
      <TransactionTable />
    </div>
  );
};

export default Wallet;

import DetailBar from '@/components/atoms/DetailBar';
import MyWallet from '@/components/atoms/MyWallet/MyWallet';
import TransactionTable from '@/components/atoms/TransactionTable';
import React from 'react';
import { useContextHook } from 'use-context-hook';
import userService from '@/services/userService';
import { AuthContext } from '@/context/authContext';

const Wallet = () => {
  const { wallet_Details } = userService.GetWalletDetails();
  // console.log({ wallet_Details });

  return (
    <div>
      <MyWallet wallet={wallet_Details?.wallet} />
      <DetailBar />
      <TransactionTable />
    </div>
  );
};

export default Wallet;

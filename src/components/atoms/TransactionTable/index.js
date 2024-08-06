import React, { useMemo, useState } from 'react';
import Table from '@/components/molecules/Table';
import TableLayout from '@/components/atoms/TableLayout';
import { TableContainer } from './TableStyles';
import downloadIcon from '../../../_assets/statement.png';
import CenterModal from '@/components/molecules/Modal/CenterModal';
import DownloadModal from '@/components/atoms/DownloadStatmentModal/DownloadModal';
import SuccessModal from '@/components/atoms/SuccessModal/SuccessModal';
import SuccessIcon from '../../../_assets/successIcon.png';
import { format } from 'date-fns';
import userService from '@/services/userService';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { convertToCurrencyFormat, getDateTime } from '@/helpers/common';

const TransactionTable = ({ transactions }) => {
  const { user, fetch } = useContextHook(AuthContext, v => ({
    user: v.user,
    fetch: v.fetch,
  }));
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    itemsPerPage: 10,
    searchText: '',
    startDate: '',
    endDate: '',
    type: 'all',
    filterRoles: '',
  });

  const [open, setOpen] = useState(false);
  const [statementModal, setStatementModal] = useState(false);
  const modalParagraph =
    "Your account statement is now available at alex123@gmail.com. Be sure to check your spam folder if you don't see it right away.";
  const openModal = () => {
    setOpen(true);
  };
  const openStatementModal = () => {
    setStatementModal(true);
    setOpen(false);
  };

  const { transactions_data, transactions_loading } = userService.GetAllTransactions(searchQuery, fetch);

  const { totalCount, transaction_rows } = useMemo(() => {
    const mappedTransactions = transactions_data?.transactions?.map(transaction => {
      return [
        format(new Date(transaction.created_at), 'yyyy-MM-dd'),
        transaction.transactionType ?? '------------',
        convertToCurrencyFormat(transaction.amount?.$numberDecimal) ?? '------------',
      ];
    });
    return {
      transaction_rows: mappedTransactions,
      totalCount: transactions_data?.totalItems,
    };
  }, [transactions_data?.totalItems, transactions_data?.transactions]);

  const columnNames = [`Created at`, `Transaction type`, 'Amount'];

  return (
    <>
      <CenterModal open={open} setOpen={setOpen} width="666" padding={'30px'} title="Download Statement">
        <DownloadModal openNext={openStatementModal} />
      </CenterModal>

      <CenterModal
        open={statementModal}
        setOpen={setStatementModal}
        width="543"
        padding={'25px'}
        headImage={SuccessIcon}>
        <SuccessModal heading="Statement Sent Successfully!" paragraph={modalParagraph} />
      </CenterModal>

      <TableContainer>
        <TableLayout
          tableHeading="Transaction History"
          // transationFilter={true}
          placeholder="Search history"
          btnText="Download Statement"
          btnType="download"
          btnImg={downloadIcon}
          filterBlock
          openModal={openModal}
          onChangeFilters={filters => {
            setSearchQuery(_ => ({
              ..._,
              ...filters,
            }));
          }}
          setSearchQuery={setSearchQuery}
          currentPage={searchQuery.page}
          totalCount={totalCount}
          pageSize={searchQuery.itemsPerPage}>
          <Table
            width={1024}
            rowsData={transaction_rows}
            loading={transactions_loading}
            columnNames={columnNames}
            noPadding
          />
        </TableLayout>
      </TableContainer>
    </>
  );
};

export default TransactionTable;

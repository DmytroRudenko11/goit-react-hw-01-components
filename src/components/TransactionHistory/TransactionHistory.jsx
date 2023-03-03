import styled from 'styled-components';
import transactions from '../../jsonData/transactions.json';
import TransHead from './TransHead/TransHead';
import TransBody from './TransBody/TransBody';

function TransactionHistory() {
  return (
    <Table>
      <TransHead />
      <TransBody data={transactions} />
    </Table>
  );
}

export default TransactionHistory;

const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 70%;
  margin: 0 auto;
  margin-top: 100px;
`;

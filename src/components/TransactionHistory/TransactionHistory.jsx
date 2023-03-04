import styled from 'styled-components';
import PropTypes from 'prop-types';
import TableRow from '../TransactionHistory/TableRow/TableRow';

function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeaderData>Type</TableHeaderData>
          <TableHeaderData>Amount</TableHeaderData>
          <TableHeaderData>Currency</TableHeaderData>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TableRow
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 70%;
  margin: 0 auto;
  margin-top: 100px;
`;

const TableHeaderData = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
`;
